<script setup lang="ts">
import { useProductsStore } from "~/store/product"
import type { IProduct } from "~/utils/types";
import Spinner from "~/components/shared/Spinner.vue";
import productCard from "~/components/products/productCard.vue"
import GlobalBtn from "~/components/shared/GlobalBtn.vue";

const useProducts = useProductsStore()
const loading = ref(true)
const products = ref<IProduct[]>()
onBeforeMount(async()=>{
  const [response,error] = await useProducts.loadProducts() as [IProduct[],any]
  console.log('in page',response)
  products.value = response
  loading.value = false
})

const deleteProduct =(id:number)=>{
//     delete number
    console.log('id',id)
}

const editProduct =(id:number)=>{
//     edit number
  console.log('id',id)
}

const addProduct = ()=>{
//   adding product
}

</script>

<style lang="scss">
</style>
<template>
  <div class="container mx-auto">
    <Spinner class="my-10" v-if="loading" />
    <section v-else class="w-full py-6 lg:py-12">
      <div class="mb-4 lg:mb-8 px-6 lg:px-8 flex items-center justify-between">
          <div class="text-xl lg:text-3xl font-bold text-dark-gray">
            Products
          </div>
        <div class="w-32 lg:w-40">
          <GlobalBtn class="text-base lg:!text-xl" text="Add Product" @clickBtn="addProduct" ></GlobalBtn>
        </div>
      </div>
          <div v-if="!!products" class="w-full flex justify-center items-start flex-wrap">
              <productCard
              v-for="(product,index) in products"
              :key="index"
              :product="product"
              @editProduct="editProduct"
              @deleteProduct="deleteProduct"
              ></productCard>
          </div>

          <div v-else class="w-full text-center">
              this list is empty!!
          </div>
    </section>
  </div>
</template>