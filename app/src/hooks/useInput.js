import { useEffect, useState } from "react"
import { useValidation } from "./useValidation";

export const useInput = (initValue, validations, ...args) => {
    const [value, setValue] = useState(initValue);
    const [isDirty, setIsDirty] = useState(false);
    const [messageError, setMessageError] = useState('');
    const valid = useValidation(value, validations, ...args);

    const inputChange = (e) => {
        setValue(() => e.target.value);
    }

    const inputBlur = (e) => {
        setIsDirty(() => true);
    }

    useEffect(() => {
        if (valid.isEmptyError) {
            setMessageError(() => 'Поле не может бьть пустым');
        } else if (valid.minLengthError) {
            setMessageError(() => 'Слишком маленькое значение');
        } else if (valid.maxLengthError) {
            setMessageError(() => 'Слишком большое значение');
        } else if (valid.validEmailError) {
            setMessageError(() => 'Невалидный Email');
        } else if (valid.checkPassworError) {
            setMessageError(() => 'Пароли не совподают');
        } else {
            setMessageError(() => '');
        }
    }, [valid]);

    return{
        value,
        isDirty,
        inputChange,
        inputBlur,
        messageError,
        ...valid
    }
}