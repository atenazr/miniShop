<template>
    <div class="my-1.5 md:my-2 lg:my-2.5 flex-grow">
      <div class="text-dark-gray text-xs md:text-sm lg:text-base">
        {{ label }}
        *
      </div>

      <div class="">
        <input
            :value="value"
            ref="input"
            :type="inputType"
            class="outline-none border border-gray bg-white focus:focus:border-blue-500 text-dark-gray text-xs md:text-base p-2.5 md:px-4 rounded-lg md:rounded-[15px]  md:py-3 w-full shadow-sm transition-all">
        <!--  v-if="prefix" -->
      </div>

      <div v-if="!!error" class="w-full flex px-1 justify-between items-center text-size-10 lg:text-xs text-red-500 tracking-wider mt-2">
        <!-- error message , if exist -->
        <p  class="text-left w-5/6">{{ error }}</p>
        <!-- counter for number input -->
      </div>
    </div>
</template>

<script lang="ts" setup>
interface IProps {
  type: string,
  label?: string,
  // placeText?: string | null,
  value?: string | number | null,
  error?: string | null,
}

const props = defineProps<IProps>()

const inputType=ref(props.type)

</script>

<style scoped>
</style>