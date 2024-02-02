<template>
  <div @click="$emit('clickBtn')" class=" btn-primary flex justify-center items-center">
    {{ text }}
  </div>
</template>

<script setup lang="ts">

const props=defineProps({
      text:{
        type:String
      },
})

const emit = defineEmits(['clickBtn'])
</script>

<style>

</style>