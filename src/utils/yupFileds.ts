import * as yup from "yup"

export const email= {
    email: yup.string().required('' ).email('')
}

// profile form
export const webSite = {
    webSite: yup.string().required('' )
}

export const phone = {
    phone: yup.string().required('')
        // .matches(/^09[0-9]{9}$/,'')
        .nullable()
}

export const message = {
    message: yup.string().required('').nullable()
}



