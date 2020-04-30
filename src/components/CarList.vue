<template>
  <v-row class="mb-6">
    <v-col v-for="car in cars" :key="car.id" :lg="3" :md="4" :sm="6">
      <CarCard :car="car" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CarCard from './CarCard.vue';
import { Car } from 'types/Car';

@Component({
  components: {
    CarCard,
  },
})
export default class CarList extends Vue {
  @Prop() private cars!: Car[];
}
</script>
