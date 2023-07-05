<template>
  <div class="col" v-for="i in 4" :key="i">
    <Card/>
  </div>
</template>

<script>
import Card from "@/components/card.vue";

export default {
  name: "Home",
  components: {Card}
}
</script>

<style scoped>

</style>