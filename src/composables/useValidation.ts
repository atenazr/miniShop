import { ref,reactive } from "vue"
import * as yup from "yup"

export default function useValidation(objectSchema:yup.ObjectShape){
    // console.log('schema',objectSchema)
    let result:{[key:string]: string}={}
    Object.entries(objectSchema).forEach(([configName, config]) => {
        result[configName] = '';
    });
    let values = ref<{[key:string]: string}>(Object.assign({},result))
    let errors = ref<{[key:string]: string}>(Object.assign({},result))
    const FormSchema = yup.object().shape(objectSchema) as yup.Schema

    const validate=async(field: string)=> {
        (errors.value as any)[field] = "";
        try{
            await FormSchema.validateAt(field,values.value);
        }catch (e:any){
            (errors.value as any)[field] = e.message;
        }
    }

    // // validate all info boxes
    const validateAll=async()=> {
        try{
            await FormSchema.validate(values.value, { abortEarly: false })
            return true
        }catch (err:any){
                err.inner.forEach((error: any) => {
                    errors.value = { ...errors.value, [error.path]: error.message };
                });
                return false
            }
        }

    return { values,errors,validate,validateAll  }
}