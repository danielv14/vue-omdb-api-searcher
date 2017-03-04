<template lang="html">
  <div class="item">
    <div class="image">
        <img v-if="item.Poster != 'N/A'" :src="item.Poster" :alt="item.Title">
        <img v-else src="http://placehold.it/100x150" :alt="item.Title">
    </div>
    <div class="info">
      <h2>{{ item.Title }}</h2>
      <p>Released in {{ item.Year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',

  props: ['item']
}
</script>

<style lang="css" scoped>

.item {
  background: white;
  padding: 20px;
  margin-bottom: 40px;
  width: 45%;
  border-radius: 2px;
  display: flex;
}

img {
  height: 200px;
}

.info {
  padding-left: 10px;
}

</style>
