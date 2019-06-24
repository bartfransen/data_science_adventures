from flask import Flask, request, jsonify, make_response, redirect, url_for
from predictor import QuotePredictor, QuoteRequest

app = Flask(__name__, static_url_path='')
predictor = QuotePredictor(app)
dummy_quote = QuoteRequest(app, {})


def CORS_FIX(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Methods',
        'POST,OPTIONS')
    response.headers.add('Access-Control-Allow-Headers',
        'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')

@app.route('/')
def default_page():
        return redirect(url_for('static', filename='index.html'))

@app.route("/api/predict", methods=['OPTIONS'])
def allow_cors():
    response = make_response('', 204)
    CORS_FIX(response)
    return response

@app.route("/api/predict", methods=['POST'])
def predict():
    price = {'amount': 0, 'currency': 'CAD'}
    try:
        quote_json = request.json
        print(quote_json)
        quote_request = QuoteRequest(app, quote_json['quote_parameters'])

        # EUR version
        # price['amount'] = round(predictor.predict(quote_request)[0], 2)
        # price['currency'] = 'EUR'

        # CAD version
        price['amount'] = round(predictor.predict(quote_request)[0] * 1.5, 2)

    except Exception as e:
        print(e)

    response = jsonify(price=price)
    CORS_FIX(response)
    print(response.get_data())
    return response
