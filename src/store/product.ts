import { defineStore } from 'pinia'
import type { IProduct } from "~/utils/types";
import  useAsyncPublicRequest  from "~/composables/useAsyncPublicRequest"

export const useProductsStore = defineStore('products', ()=>{
    const _products = ref<Array<IProduct>>([])

    const products = computed(()=>{
        return _products.value
    })

    const loadProducts=async ()=>{
        try {
            const response = await useAsyncPublicRequest('https://fakestoreapi.com/products/')
            if(response.ok) {
                const res = await response.json()
                console.log('reeee',res)
                return [res, null]
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