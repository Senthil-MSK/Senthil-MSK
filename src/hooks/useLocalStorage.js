import { useEffect, useState } from "react"

function getSavedValues(key,initialValue ) {
    const savedValue =  JSON.parse(localStorage.getItem('name'));
     if(savedValue) return savedValue
    if(initialValue instanceof Function) return initialValue()
    return initialValue
}

export default function useLocalStorage (key,initialValue){

    const [value,setValue] = useState(()=>{
        return getSavedValues(key,initialValue)
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify (value));
        // return ()=>{
        //     console.log('unmo');
        // }
    },[value])

    return [value,setValue];

}