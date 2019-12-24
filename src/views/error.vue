<template>
  <div class="error">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>404 not found</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style scope lang="scss">
.error{
  text-align: center;
  margin-top: 60px;
  p{
    font-size: 80px;
  }
}
</style>
