<template>
  <div class="container mx-auto px-6 lg:px-8 py-6 lg:py-12">
    <div class=" mb-4 text-xl lg:text-3xl font-bold text-dark-gray lg:mb-8 ">
        Contact us
    </div>

    <div class="border-[3px] border-light-gray px-8 lg:px-16 py-6 lg:py-10 flex flex-col justify-center items-center">
      <div class="w-full flex flex-col lg:flex-row justify-center items-center">
          <section class="lg:h-[320px] lg:pr-20 w-full lg:w-1/2 flex flex-col justify-between items-center">
            <div class="w-full lg:px-2.5">
              <FormInput
                  v-model:valueInput="values.email"
                  @input="validate('email')"
                  type="text"
                  :error="errors.email"
                  label="Email:"
              />
            </div>
            <div class="w-full lg:px-2.5">
              <FormInput
                  v-model:valueInput="values.webSite"
                  @input="validate('email')"
                  :error="errors.webSite"
                  label="Website:"
                  type="text" />
            </div>
            <div class="w-full lg:px-2.5">
              <FormInput
                  v-model:valueInput="values.phone"
                  :error="errors.phone"
                  label="Phone:"
                  type="text" />
            </div>
          </section>
          <section class=" lg:h-[300px] lg:pl-12 w-full lg:w-1/2">
            <div class="h-full mt-2  lg:mt-2.5 flex-grow pb-4 lg:pb-9 relative">
              <div class="text-dark-gray text-xs md:text-sm lg:text-base">
                Message: *
              </div>
              <textarea
                  placeholder="Write a message..."
                  class="w-full h-full outline-none border border-gray-300 focus:border-blue-500 focus:border-2 text-dark-gray lg:text-base px-2 lg:px-4 rounded-md py-2 lg:py-3 shadow-sm transition-all resize-none"
                  :value="values.message" />
              <div v-show="!!errors.message"  class="w-full flex px-1 justify-between items-center text-size-10 lg:text-xs text-red-500 tracking-wider mt-2">
                <!-- error message , if exist -->
                <p  class="text-left w-5/6">{{ errors.message}}</p>
              </div>
            </div>
          </section>
      </div>
      <div class="w-full flex flex-col lg:flex-row justify-between items-center mt-8 lg:mt-32 ">
           <div :class="!validCheckbox?'underline text-red-500':''"
               class="flex items-center justify-start text-light-gray text-xs lg:text-base">
              <input type="checkbox" v-model="checkInput" >
              <span class="mx-0.5 lg:mx-1">
                I acknowledge the receipt of the
              </span>
              <span @click="$router.push('/privacy')" class="underline mx-0.5 lg:mx-1 cursor-pointer">
                  Privacy Policy.*
              </span>
           </div>
          <div class="w-full mt-6 lg:mt-0 lg:w-36">
              <GlobalBtn text="Submit" @clickBtn="submitForm" ></GlobalBtn>
          </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import FormInput from "~/components/shared/FormInput.vue";
import GlobalBtn from "~/components/shared/GlobalBtn.vue";
import useValidation from "~/composables/useValidation";
import { email,webSite,phone,message } from "~/utils/yupFileds"
import {ref} from "vue";
import {boolean} from "yup";

let { values,errors,validate,validateAll } =  useValidation({
  ...email,...webSite,...phone,...message
})

const checkInput = ref(false)
const validCheckbox = ref<boolean>(true)

watch(checkInput,(n,o)=>{
  if(n) validCheckbox.value = true
})
const submitForm = async()=>{
    console.log('values',values)
  if(await validateAll()){
    if(validCheckbox.value){
      //     send data
    }else {
      validCheckbox.value = false
    }
  }
}
</script>