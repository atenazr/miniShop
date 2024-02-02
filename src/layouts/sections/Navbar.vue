<template>
  <div class="absolute h-5" @mouseenter="showMenu = true" @mouseleave="showMenu = false">
<!--    <span class="material-icons">menu</span>-->
     <div @click="showMenu=!showMenu"  v-if="!showMenu" class="transition-all">
      <span  class="pt-4 lg:pt-8 material-icons text-xl lg:text-3xl px-2 lg:px-3 cursor-pointer">menu</span>
     </div>
    <div class="w-full lg:w-fit top-0 transition-all duration-1000 h-screen fixed z-20" :class="showMenu?'left-0':'-left-[80vw]'">
      <div class="bg-white h-full min-w-[250px] w-[10vw] flex flex-col justify-start items-center pl-3 lg:pl-4 pr-6 lg:pr-12 pt-6 lg:pt-24 border-r-4 border-dark-gray">
          <div class="lg:hidden w-full flex justify-end my-2">
            <span @click="showMenu=false" class="transition-all pt-4 lg:pt-8 material-icons text-xl lg:text-3xl px-2 lg:px-3 cursor-pointer">close</span>
          </div>
          <div v-for="item in itemsMenu" :key="item.text"
               class="w-full text-light-gray text-left py-1.5 my-1 lg:my-2 text-base lg:text-xl font-semibold hover:underline">
              <nuxt-link :to="item.link" >
                  {{ item.text }}
              </nuxt-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


const itemsMenu = ref([
  {
    text:'Products',
    link:'/'
  },
  {
    text:'Contact us',
    link:'/contactus'
  },

])

const showMenu = ref(false)
</script>