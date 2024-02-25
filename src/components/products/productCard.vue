<template>
  <div class="w-full lg:w-1/3 p-4 lg:p-8">
      <div class="border-[3px] h-[240px] border-light-gray px-4 lg:px-6 py-2 lg:py-3 flex flex-col justify-center items-center">
          <section class="my-1 lg:my-2 flex w-full items-center justify-start">
              <div class="mx-1 lg:mx-2">
                  <img class="rounded-full w-16 h-16 lg:w-24 lg:h-24" :src="product.image">
              </div>
              <div class="flex flex-col justify-center items-start">
                  <span class="text-base lg:text-lg text-dark-gray">
                      {{ product.title.slice(0,28) }}
                      ...
                  </span>
                  <span class="my-0.5 lg:my-1">
                      <scoreBand :count-rate="product.rating.count" :defaultScore="product.rating.rate" />
                  </span>
                  <span class="flex items-center justify-start my-0.5 lg:my-1">
                      <span class="text-dark-gray text-base lg:text-lg">
                          ${{ product.price }}
                      </span>

<!--                      <span class="ml-1.5 lg:ml-2.5 text-xs lg:text-sm text-light-gray">-->
<!--                        List Price :-->
<!--                      </span>-->

<!--                      <span class="text-xs lg:text-sm line-through">-->
<!--                        $-->
<!--                        {{ product.price }}-->
<!--                      </span>-->
                  </span>
              </div>
          </section>

          <section class="w-full my-1 lg:my-2 text-xs lg:text-sm text-secondary-gray">
              {{ product.description.slice(0,100) }}
              ...
          </section>

          <section class="mt-auto mb-1 w-full flex justify-center items-center text-xs lg:text-sm text-light-gray">

              <div class="mr-auto px-1">
                    {{ product.category }}
              </div>

              <div @click="editPro()" class="text-right  cursor-pointer px-1 mr-8">
                  Edit
              </div>

              <div @click="deletePro()" class="text-right cursor-pointer px-1">
                  Delete
              </div>
          </section>
      </div>
  </div>
</template>

<script lang="ts" setup>
import type { IProduct } from "../../utils/types"
import scoreBand from "~/components/products/scoreBand.vue"
const props = defineProps({
  product: {
    type: Object as PropType<IProduct>,
    required: true,
  }
})
const emit = defineEmits(['editProduct','deleteProduct'])
const deletePro = ()=>{
  console.log('dddddelll',props.product.id)
  emit('deleteProduct',props.product.id)
}
const editPro = ()=>{
  console.log('dddddelll',props.product.id)
  emit('editProduct',props.product.id)
}

const priceWithDiscount = computed(()=>{
    return  (props.product.price*(1-(props.product.discountPercentage/100))).toFixed(2)
})

</script>