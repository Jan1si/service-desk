import { useEffect, useState } from "react"

export const useValidation = (value, validations, ...args) => {
    const [isEmptyError, setIsEmptyError] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [validEmailError, setValidEmailError] = useState(false);
    const [checkPassworError, setCheckPasswordError] = useState(false);
    const [validForm, setValidForm] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value.length > 0 ? setIsEmptyError(false) : setIsEmptyError(true);
                    break;

                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(() => true) : setMinLengthError(() => false);
                    break;
                
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(() => true) : setMaxLengthError(() => false);
                    break;

                case 'validEmail':
                    const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
                    !regex.test(String(value).toLowerCase()) ? setValidEmailError(() => true) : setValidEmailError(() => false)
                    break;

                case 'checkPassword':
                    value !== args[0] ? setCheckPasswordError(() => true) : setCheckPasswordError(() => false);
                    break;
            }
        }
    }, [value]);


    useEffect(() => {

        if (isEmptyError || minLengthError || maxLengthError || validEmailError || checkPassworError) {
            setValidForm(() => false);
        } else {
            setValidForm(() => true);
        }

    }, [isEmptyError, minLengthError, maxLengthError, validEmailError, checkPassworError])

    return {
        isEmptyError,
        minLengthError,
        maxLengthError,
        validEmailError,
        checkPassworError,
        validForm
    }
}