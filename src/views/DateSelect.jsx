import { useRef } from "react"

export function DateSelector(){
    const refObject = useRef(null);

    return <>
       <label>Event Date: </label>

        <input type="date" id="start" name="trip-start"  ref={refObject}/> 
        <br/>

        <label>Event Start Time: </label>
        <input type="text"/>   
        <br/>
        <label>Event Start Time: </label>
        <input type="text"/>

    </>

}