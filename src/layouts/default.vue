<script setup lang="ts">
import Navbar from './sections/Navbar.vue';

</script>

<template>
  <div class="">
    <Navbar></Navbar>
    <section class="pt-6 lg:pt-0 ">
      <slot/>
    </section>
  </div>
</template>