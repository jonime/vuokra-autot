<template>
  <div>
    <CarCard v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<script>
import CarCard from './CarCard';

export default {
  name: 'CarList',
  props: { cars: Array },
  components: {
    CarCard,
  },
};
</script>
