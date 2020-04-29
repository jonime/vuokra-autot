<template>
  <v-container id="app" fluid>
    <h1 class="display-4">Vuokrattavat autot</h1>
    <CarList :cars="cars" />
  </v-container>
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

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif; /* this was it */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
