import { defineStore } from 'pinia'
import type { IProduct } from "~/utils/types";
import  useAsyncPublicRequest  from "~/composables/useAsyncPublicRequest"

export const useProductsStore = defineStore('products', ()=>{
    const _products = ref<Array<IProduct>>([])

    const products = computed(()=>{
        return _products.value
    })

    const loadProducts=async ()=>{
        console.log('in store')
        try {
            const response = await useAsyncPublicRequest('https://dummyjson.com/products')
            if(response.ok) {
                const res = await response.json()
                console.log('product', res)
                // let res = fetch('https://dummyjson.com/products')
                //     .then(res => res.json())
                // console.log('product',res)

                return [res.products, null]
            }
        } catch (e) {
            // Error Handler
            console.log(e)
            return [null,'error']
        }
    }

    return{
        products,
        loadProducts
    }
})