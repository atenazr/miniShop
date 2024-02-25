<template>
  <div class="flex items-center">
      <div dir="ltr" class="flex items-end">
            <span v-for="score in fullStars" :key="score" class="text-xs lg:text-base material-icons">star</span>
            <span v-for="score in halfStars" :key="score" class="text-xs lg:text-base material-symbols-outlined">star_half</span>
            <span v-for="score in emptyStars" :key="score" class="text-xs lg:text-base material-symbols-outlined">star</span>
      </div>
      <div class="text-xs text-secondary-gray mx-2">
          {{ '('+countRate+')' }}
      </div>
  </div>
</template>

<script lang="ts" setup>

 const props = defineProps({
   defaultScore:{
     type:Number,
     default:0
   },
    countRate:{
      type:Number,
      default:0
    }
 })

 const fullStars= computed( () =>{
   return Math.floor(props.defaultScore /1)
 })
 const halfStars=computed(() => {
   let x = props.defaultScore %1
   return x >= (1/2) ? 1 : 0
 })
 const emptyStars=computed(()=> {
   return 5 - fullStars.value - halfStars.value
 })

</script>

<style scoped>

</style>