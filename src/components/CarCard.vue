<template>
  <v-card
    link
    :href="car.link"
    rel="noopener noreferrer"
    target="_blank"
    class="pa-2"
    tile
  >
    <v-img :src="car.image" />
    <v-card-text class="text--primary">
      {{ car.name }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CarCard',
  props: { car: Object },
};
</script>
