import { useState } from "react";

export default function useInput<T>(defaultValue:T){
    const [value,setValue] = useState<T>(defaultValue)

    function handleValue(e:React.FormEvent<HTMLInputElement>){
        setValue(e.target?.value)
    }
}