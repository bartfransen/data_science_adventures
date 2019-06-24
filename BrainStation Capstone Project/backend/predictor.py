import os
import json
import joblib
import numpy as np

class QuoteRequest:

	def __init__(self, app, params):
		if not hasattr(self, 'columns'):
			self.columns = joblib.load(os.path.join(app.root_path, 'capstone_columns.pkl'))

		self.length = int(params.get('length', 350))
		self.width = int(params.get('width', 250))
		self.maw = int(params.get('maw', 2700))
		self.type = params.get('type', 'TIPPER')
		self.axles = int(params.get('axles', 2))
		self._transform()

	def __repr__(self):
		return (
			f'Type: {self.type.title()} - MAW: {self.maw}kg - '
			f'Axles: {self.axles} - Width: {self.width}cm - Length {self.length}cm'
		)

	def _transform(self):
		values = np.zeros(len(self.columns))

		# MAP GIVEN VALUES TO VARIABLES KNOWN TO THE MODEL
		values[self.columns.index('DIMENSIONS_LENGTH_CM')] = self.length
		values[self.columns.index('DIMENSIONS_WIDTH_CM')] = self.width
		categorical_column = f'MAW_PARSED_{self.maw}.0'
		values[self.columns.index(categorical_column)] = 1
		categorical_column = f'TYPE_CATEGORY_{self.type}'
		values[self.columns.index(categorical_column)] = 1
		categorical_column = f'AXLES_COUNT_{self.axles}.0'
		values[self.columns.index(categorical_column)] = 1

		# SET DEFAULT VALUES
		values[self.columns.index("AXLES_BRAKE")] = self.maw > 750 #Boolean coerced to int 0 or 1 in numpy array
		values[self.columns.index("TYRE_WIDTH_185.0")] = 1
		values[self.columns.index("TYRE_DIAMETER_13.0")] = 1
		values[self.columns.index("YEAR_18")] = 1

		self.X = values.reshape(1, -1)


class QuotePredictor:

	def __init__(self, app):
		if not hasattr(self, 'model'):
			self.model = joblib.load(os.path.join(app.root_path, 'capstone_model.pkl'))
		pass

	def predict(self, request):
		y = self.model.predict(request.X)
		return np.expm1(y)

if __name__ == "__main__":
	filename = 'request.json'

	with open(filename, 'r') as f:
	        params = json.load(f)['quote_parameters']

	request = QuoteRequest(params)
	predictor = QuotePredictor()
	print(f'Calculating price for:\n{request}')
	prediction = predictor.predict(request)
	print(f'Price: {prediction[0] * 1.5:.2f} CAD')
