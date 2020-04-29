<template>
  <v-card link :href="car.link" rel="noopener noreferrer" target="_blank" class="pa-2" tile raised>
    <v-img :src="car.image" aspect-ratio="1.5">
      <template v-slot:placeholder>
        <v-sheet color="grey" height="100%">
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </v-sheet>
      </template>
    </v-img>
    <v-card-text class="text--primary text-truncate">{{ car.name }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CarCard',
  props: { car: Object },
};
</script>
