import { ref,reactive } from "vue"
import * as yup from "yup"

export default function useValidation(objectSchema:yup.ObjectShape){
    // console.log('schema',objectSchema)
    let result:{[key:string]: string}={}
    Object.entries(objectSchema).forEach(([configName, config]) => {
        result[configName] = '';
    });
    let values = ref<{[key:string]: string}>(result)
    let errors = ref<{[key:string]: string}>(result)
    const FormSchema = yup.object().shape(objectSchema) as yup.Schema

    const validate=async(field: string)=> {
        FormSchema.validateAt(field,values.value)
            .then(() => {
                (errors.value as any)[field] = "";
            }).catch((err: any) => {
            (errors.value as any)[field] = err.message;
        })
    }
    // // validate all info boxes
    const validateAll=async()=> {
        return new Promise((resolve) => {
            FormSchema.validate(values.value, { abortEarly: false })
                .then(() => {
                    resolve(true)
                })
                .catch((err: any) => {
                    err.inner.forEach((error: any) => {
                        errors.value = { ...errors.value, [error.path]: error.message };
                    });
                    resolve(false)
                })
        })
    }

    // // let

    return { values,errors,validate,validateAll  }
}