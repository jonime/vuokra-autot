<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <h1 class="display-1">Vuokrattavat autot</h1>
        <CarList :cars="cars" /></v-container
    ></v-content>
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
      cars: [],
    };
  },
  async mounted() {
    const { cars } = await fetch('/api/cars').then((r) => r.json());
    this.$data.cars = cars;
  },
};
</script>
