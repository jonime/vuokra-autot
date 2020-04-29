<template>
  <div>
    <a :href="car.link" rel="noopener noreferrer" target="_blank">
      <img :src="car.image" />

      {{ car.name }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'CarCard',
  props: { car: Object },
};
</script>
