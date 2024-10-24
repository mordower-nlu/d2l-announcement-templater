import { forwardRef, useRef, useState } from "react";
import { GetFullDateString, GetTwoTimesString, GetWeekdayMonthDayString } from "../utilities/DateUtilities";
import { selectSpecialist } from "../views/SpecialistSelect";
import { DateSelector } from "../views/DateSelect";
import infoArray from "../assets/specialistInfo.json";
import ReactDOMServer from 'react-dom/server';
import { jsx } from "react/jsx-runtime";


const flyerUri = "src/assets/knewtonflyer.png"; //Update this every term.

export function KnewtonWorkshopAnnouncement(){
     //Date when the event will take place
     

    const [specialistName,setName] = useState("Darcy");
    const [eventDate,setDate] =useState(new Date());
    const [startTimeString,setStartTime] = useState("");
    const [endTimeString,setEndTime] = useState("");
    const createDateCallback = (dateEvent) =>{
        let resultDate = new Date(dateEvent.target.valueAsDate);
        
        resultDate.setMinutes(600+resultDate.getTimezoneOffset());
        setDate(resultDate);
    }

    const [jsxContent,setJsxContent] = useState(<></>);
    const htmlTextboxRef = useRef();
    const copyCallback = ()=>{
        // Get the text field
        let copyText = htmlTextboxRef.current;
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
      
        
      }
    const updateJsxCallback =
        ()=>{
            setJsxContent(
                <>
                    <p>Hi, folks! <br/> 

                    {specialistName} from Learning Support here.</p> 

                    <p>In case you want a more comprehensive overview of the Knewton platform, as well as tips for making the assignments easier, we're hosting an online workshop this coming {GetWeekdayMonthDayString(eventDate)}, over Zoom.</p> 

                    <p>Details below:</p> 

                    <hr/> 

                    <p><strong>Knewton Survival Workshop</strong><br/> 
                    {GetWeekdayMonthDayString(eventDate)} <br/> 
                    {startTimeString} - {endTimeString} (Chicago Time)<br/> 
                    <b>Zoom Link:</b>&nbsp;<a rel="noopener" href="https://nl.zoom.us/my/studytables" target="_blank">https://nl.zoom.us/my/studytables</a></p> 

                    <p>This workshop overviews the Knewton learning platform. Attendees will learn tips and tricks for navigating the website's quirks, all while developing strategies for completing its assignments.</p> 

                    <p><img src={flyerUri} alt="" title="" width="600" height="810"/></p> 
                    
                
                
                </>



            )


        }
    


    return <>
        {selectSpecialist((specId)=>{setName(infoArray[specId].FirstName); updateJsxCallback();},[])}
        
        <>
            <label>Event Date: </label>

            <input type="date" id="start" name="trip-start" onChange={(e)=>{createDateCallback(e); updateJsxCallback();}}/> 
             <br/>

            <label>Event Start Time: </label>
            <input type="text" onChangeCapture={(e)=>{setStartTime(e.target.value); updateJsxCallback();}}/>   
        
            <br/>
        
            <label>Event Start Time: </label>
            <input type="text" onChangeCapture={(e)=>{setEndTime(e.target.value); updateJsxCallback();}}/>

    </>

    <hr/>
    <h3>Preview:</h3>
    {jsxContent} 
    

        <hr/>
        <h3>Copyable HTML:</h3>
        <p>Paste your copied text into the "Source Code" editor of D2L, and then click "Save" to start your post. From there, make any edits you see fit.</p>
        <p><b>Note:</b> this step is required if you want to pre-embed your video.</p>
        <p><button onClick={copyCallback}>Click here to copy the text.</button></p>
        <textarea style={{width:"500px", height:"150px"}} readOnly value={ ReactDOMServer.renderToStaticMarkup(jsxContent)} ref={htmlTextboxRef}/>
        <h4>Caution:</h4> Double-check for typos after saving the code in D2L (it'll display the text normally once you click "Save" -- I promise). I made this super-quick, so some stuff is still funky.
        <hr/>
    </>;

}