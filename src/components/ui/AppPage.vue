<template>
  <div class="card">
    <h1 class="card-title">{{ title }}  <slot name="header"></slot> </h1>

    <slot></slot>
  </div>
</template>

<script>
export default {
  props:['title'],
  setup(props){
    document.title = `${props.title} | Amaliyot`
  }
}
</script>

<style scoped>

</style>