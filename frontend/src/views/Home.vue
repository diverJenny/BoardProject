<template>
  <div class="col" v-for="(post, idx) in state.posts" :key="idx">
<!--    {{ post }}-->
    <Card :item="post"/>
  </div>
</template>

<script>
import axios from "axios";
import {reactive} from "vue";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {Card},
  setup() {
    const state = reactive({
      items: []
    })

    axios.get("/posts").then(({data}) => {
      state.posts = data;
    });
    // 아래와 같이 사용할 수 있다. {} 안에 있는 특정 프로퍼티를 바로 꺼내쓸 수 있는 것이 위의 문법.
    /*
    axios.get("/posts").then((res) => {
      state.posts = res.data;
    });
     */

    return {state};
  }
}
</script>

<style scoped>

</style>