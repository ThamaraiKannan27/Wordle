import React, { useCallback, useEffect ,useContext} from 'react'
import { AppContext } from '../App';
function Keyboard() {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
    const {enter,remove,insert} = useContext(AppContext)
    const handleKeyboard = useCallback((event)=>{
        if(event.key.toUpperCase()==="ENTER")enter()
        else if(event.key.toUpperCase()==="BACKSPACE")remove();
        else {
            keys1.forEach((key)=>{
                if(key===event.key.toUpperCase())
                    insert(event.key.toUpperCase())
            })
            keys2.forEach((key)=>{
                if(key===event.key.toUpperCase())
                    insert(event.key.toUpperCase())
            })
            keys3.forEach((key)=>{
                if(key===event.key.toUpperCase())
                    insert(event.key.toUpperCase())
            })
        }
    })
    useEffect(()=>{
        document.addEventListener("keydown",handleKeyboard);
        return()=>{
            document.removeEventListener("keydown",handleKeyboard);
        }
    }
    ,[(handleKeyboard)])
  return (
    <div onKeyDown={handleKeyboard}></div>
  )
}

export default Keyboard