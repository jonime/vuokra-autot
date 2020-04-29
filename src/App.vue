<template>
  <v-app>
    <v-content>
      <v-container class="fill-height">
        <h1 class="display-1">Vuokrattavat autot</h1>
        <template v-if="cars">
          <CarList class="fill-height" :cars="cars" />
        </template>
        <template v-else>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey"></v-progress-circular>
          </v-row>
        </template>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import CarList from './components/CarList.vue';

export default {
  name: 'app',
  components: {
    CarList,
  },
  data() {
    return {
      cars: null,
    };
  },
  async mounted() {
    const { cars } = await fetch('/api/cars').then(r => r.json());
    this.$data.cars = cars;
  },
};
</script>
