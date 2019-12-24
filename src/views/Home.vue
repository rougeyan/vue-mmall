<template>
  <div class="home">
    <top-nav-bar />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TopNavBar from "@/components/topNavBar.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    "top-nav-bar": TopNavBar
  }
};
</script>
