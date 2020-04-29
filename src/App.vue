<template>
  <div id="app">
    <CarList :cars="cars" />
  </div>
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
