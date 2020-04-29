<template>
  <v-row class="mb-6">
    <v-col v-for="car in cars" :key="car.id" :lg="3" :md="4" :sm="6">
      <CarCard :car="car" />
    </v-col>
  </v-row>
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
