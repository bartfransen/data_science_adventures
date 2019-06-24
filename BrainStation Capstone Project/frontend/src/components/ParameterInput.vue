<template>
  <v-layout justify-center >
    <v-flex xs12 sm6>
      <v-card>
        <v-card-text>
          <v-select
            v-model="quote.type"
            :items="types"
            label="Type"
            @change="fetchPrice"
          >
          </v-select>

          <v-slider
            v-model="selected_weight"
            hint="Maximum Allowed Weight (kg)"
            persistent-hint
            :tick-labels="weights"
            :max="weights.length-1"
            ticks="always"
            always-dirty
            thumb-label
            thumb-size="32"
            @change="fetchPrice"
          >
            <template v-slot:thumb-label="props">
              <span>
                {{ weight_from_index(props.value) }}
              </span>
            </template>
          </v-slider>

          <v-slider
            v-model="quote.axles"
            hint="Number of Axles"
            persistent-hint
            step="1"
            min="1"
            max="3"
            :tick-labels="[1,2,3]"
            ticks="always"
            always-dirty
            thumb-label
            thumb-size="32"
            @change="fetchPrice"
          >
          </v-slider>

          <v-slider
            v-model="quote.length"
            :label="quote.length.toString()"
            hint="Length (cm)"
            persistent-hint
            inverse-label
            step="10"
            min="250"
            max="500"
            ticks="always"
            always-dirty
            thumb-label
            thumb-size="32"
            @change="fetchPrice"
          >
          </v-slider>

          <v-slider
            v-model="quote.width"
            :label="quote.width.toString()"
            hint="Width (cm)"
            persistent-hint
            inverse-label
            step="10"
            min="130"
            max="250"
            ticks="always"
            always-dirty
            thumb-label
            thumb-size="32"
            @change="fetchPrice"
          >
          </v-slider>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  name: 'ParameterInput',
  props: ['quote'],
  data: function() {
    return {
      types: [
        'STANDARD BED',
        'FLATBED',
        'TIPPER',
        'CLOSED - HARD TOP',
        'CLOSED - SOFT TOP',
        'CAR TRANSPORTER',
        'MACHINE TRANSPORTER',
        'MOTORCYCLE TRANSPORTER',
        'SPECIAL'
      ],

      weights: [
        750,
        1350,
        2000,
        2700,
        3000,
        3500
      ],
    }
  },
  computed: {
    selected_weight: {
      get: function() {
        return this.index_from_weight(this.quote.maw)
      },
      set: function(newValue) {
        this.quote.maw = this.weight_from_index(newValue)
      }
    },
  },
  methods: {
    weight_from_index (index) {
      return this.weights[index]
    },
    index_from_weight (weight) {
      return this.weights.indexOf(weight)
    },

    fetchPrice() {
      const quoteParams = {
        type: this.quote.type,
        maw: this.quote.maw,
        axles: this.quote.axles,
        length: this.quote.length,
        width: this.quote.width,
      }

      this.$emit('fetch-quote', quoteParams);
    }
  }
}
</script>
