import { useState } from "react"

function useInput(initialValue){
const [value,setValue] = useState(initialValue);

const inputype={
    type:'text'
}

    const bindInput ={
        value,
        onChange:((e)=>setValue(e.target.value))
    }

    const reSet =()=>{
        setValue(initialValue);
    }
    return [value,bindInput,reSet,inputype]
}

export default useInput;