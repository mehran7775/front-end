<template>
  <svg @click="$emit('makeNewImage')" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="26px" height="26px"><path d="M13.5,3.188C7.805,3.188,3.188,7.805,3.188,13.5S7.805,23.813,13.5,23.813S23.813,19.195,23.813,13.5 S19.195,3.188,13.5,3.188z M19,15h-4v4h-3v-4H8v-3h4V8h3v4h4V15z"/></svg>
</template>

<script>
export default {
name: "plus"
}
</script>

<style scoped>
svg{
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>