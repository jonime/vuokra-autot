<template>
  <v-app>
    <v-content>
      <v-container class="fill-height pa-8" style="max-width: 1200px">
        <template v-if="cars">
          <CarList class="fill-height" :cars="cars" />
        </template>
        <template v-else>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CarList from './components/CarList.vue';

@Component({
  components: {
    CarList,
  },
})
export default class App extends Vue {
  data() {
    return {
      cars: null,
    };
  }

  async mounted() {
    const { cars } = await fetch('/api/cars').then(r => r.json());
    this.$data.cars = cars;
  }
}
</script>
