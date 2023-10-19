import { useState } from "react";

export const useForm = ( iicialForm = {}) => {
    const [formState, setFormState] = useState(iicialForm) 

    const onInputChange = ({target}) => {

        const { name, value } = target

        setFormState({
            ...formState,
            [name] : value
        })

    }

    const onResetForm = () => {

        setFormState(iicialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }


}