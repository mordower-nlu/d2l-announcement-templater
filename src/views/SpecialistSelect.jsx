import { useState } from "react";
import specialistInfo from "../assets/specialistInfo.json";


export function selectSpecialist(selectionCallback,paramArray){
    const [specialistId,setId] = useState(0);
    
    
    return <p>
        <label >Which specialist are you? </label>
        <select name="specialist name" value={specialistId} onChange={
            (e)=>{
                setId(e.target.value);
                selectionCallback(e.target.value,paramArray);


                
            
            
                }
                
            }>
            {specialistInfo.map((elem,index)=><option value={index} key={"specialist "+index}>{elem.FirstName}</option>)}
        </select>
    </p>

}