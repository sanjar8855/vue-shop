<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
<!--    <app-message></app-message>-->
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
// import AppMessage from "@/components/AppMessage";

export default {
  components:{
    TheNavbar,
    // AppMessage
  }
}
</script>

<style scoped>

</style>