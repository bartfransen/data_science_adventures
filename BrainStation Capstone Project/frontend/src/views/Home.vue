<template>
  <v-container>
    <PriceDisplay v-bind:price="price"/>
    <v-content>
      <ParameterInput v-bind:quote="quote" v-on:fetch-quote="fetchQuote" />
    </v-content>
    <v-footer fixed dark height="48">
      <Footer />
    </v-footer>
  </v-container>
</template>

<script>
import axios from 'axios';
import PriceDisplay from '../components/PriceDisplay'
import ParameterInput from '../components/ParameterInput'
import Footer from '../components/Footer'

export default {
  components: {
    PriceDisplay,
    ParameterInput,
    Footer
  },
  data() {
    return {
      quote: {
        type: 'STANDARD BED',
        maw: 2700,
        axles: 2,
        width: 200,
        length: 400
      },
      price: { amount: 0, currency: 'CAD' }
    }
  },
  methods: {
    fetchQuote(params) {
      const quote_parameters = {quote_parameters: params};
      axios.post('https://capstone.bartfransen.com/api/predict', quote_parameters)
      .then(res => this.price = res.data['price'])
      .catch(err => console.log(err));
    }
  },
  created: function () {
    this.fetchQuote(this.quote);
  }
}

</script>
