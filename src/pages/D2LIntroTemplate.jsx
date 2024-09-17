import React, { useState, useRef } from "react";
import ReactDOMServer from 'react-dom/server';
import { DropoffLink, LearningSupportUrl, StudyTablesLink } from "../constants/WebpageLinks";
import specialistInfo from "../assets/specialistInfo.json";
import supportInfo from "../assets/supportProvided.json";

export function D2LIntroTemplate(){
    const [specialistId,setSelected]=useState(0);
    const [htmlCopyable,setHtmlCopyable]=useState(<></>);
    const [serviceAIndex,setServiceA]=useState(0);
    const [serviceBIndex,setServiceB]=useState(-1);
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
    
    const selectionCallback = (specId, servIdA, servIdB) => {
        setHtmlCopyable(
            <>
                <p>Hi, folks! 
                <br/>
                My name is {specialistInfo[specId].FirstName+" "+specialistInfo[specId].LastName} ({specialistInfo[specId].Pronouns}), and I work as a {specialistInfo[specId].JobTitle} / tutor for NLU Learning Support.</p>
                {(specialistInfo[specId].IntroVideoLink)?
                    <div>
                        Check out my introduction video below:
                
                    <p>
                        <iframe src={specialistInfo[specId].IntroVideoLink} height="405" width="600" style={{border: "1px solid #464646"}} allowFullScreen="allowfullscreen" allow="autoplay"></iframe>
                    </p>
                </div>:null}
                <p>
                    <strong>Important Links:</strong><br/>
                    <a rel="noopener" href={supportInfo[servIdA].serviceUrl} target="_blank">- Schedule an appointment with a {supportInfo[servIdA].specialistType}  specialist</a> (Note: you must be logged in to access this page)
                </p>
                {(servIdB>=0 && servIdA !== servIdB)?<p>
                    <a rel="noopener" href={supportInfo[servIdB].serviceUrl} target="_blank">
                        {(supportInfo[servIdB].serviceType==="APA Citation Support")?
                            <span>- Schedule an APA citation consultation</span>:
                            <span>- Schedule an appointment with a {supportInfo[servIdB].specialistType} specialist</span>}
                    </a> (Note: you must be logged in to access this page)
                </p>:null}
                <p>
                    <a rel="noopener" href={LearningSupportUrl} target="_blank">- Learning Support website</a>
                </p>
                <p>
                    <a rel="noopener" href={StudyTablesLink} target="_blank">- Study Tables</a> (for virtual walk-in appointments)
                </p>
                <p>
                    <a rel="noopener" href={DropoffLink} target="_blank">- Assignment drop-off service</a>
                </p>
                <p>
                    <a rel="noopener" href={specialistInfo[specId].BioLink} target="_blank">- About me</a>
                </p>
    
                <p>If you have questions or concerns about Learning Support, feel free to reach out to me at&nbsp;<a rel="noopener" href={"mailto:"+specialistInfo[specId].email}>{specialistInfo[specId].email}</a> .</p>
                <hr/>
                <p>See you soon!<br/>
                -{specialistInfo[specId].FirstName}</p>
            </>


            );
    
    
        }
    
    


    return <>
        <p>
            <label >Which specialist are you? </label>
            <select name="specialist name" value={specialistId} onChange={
                (e)=>{
                    setSelected(e.target.value)
                    

                   selectionCallback(e.target.value,serviceAIndex,serviceBIndex);


                       
                
                
                    }
                    
                }>
                {specialistInfo.map((elem,index)=><option value={index} key={"specialist "+index}>{elem.FirstName}</option>)}
            </select>
        </p>
        <p>
            <label>Which scheduling link do you want to provide? </label>
            <select name="service A" value={serviceAIndex} onChange={
                (e)=>{
                    setServiceA(e.target.value);
                    selectionCallback(specialistId,e.target.value,serviceBIndex);
                }
            }>
                {supportInfo.map(
                    (elem,index)=><option value={index} key={"support-A-"+index}>{elem.serviceType}</option>
                )}

            </select>
        </p>
        <p>
            If you'd like to add a second service link (e.g. APA Citation Assistance), choose it here:<br/>
            <label>Extra scheduling link (optional): </label>
            <select name="service B" onChange={
                (e)=>{
                    setServiceB(e.target.value);
                    selectionCallback(specialistId,serviceAIndex,e.target.value);
                }
            }>
                <option value={-1}>None</option>
                {supportInfo.map(
                    (elem,index)=><option value={index} key={"support-B-"+index}>{elem.serviceType}</option>
                )}
            </select>
        </p>
        <hr/>
        <h3>Copyable HTML</h3>
        <p><button onClick={copyCallback}>Click here to copy the text.</button></p>
        <textarea style={{width:"auto"}} readOnly value={ ReactDOMServer.renderToStaticMarkup(htmlCopyable)} ref={htmlTextboxRef}/>
        <p>Paste your copied text into the "Source Code" editor of D2L, and then click "Save" to start your post. From there, make any edits you see fit.</p>
        <h4>Caution: double-check for typos. I made this super-quick.</h4>
        <hr/>
        <h3>Preview:</h3>
        {htmlCopyable}

        
    
    </>;
 
}


/*

 <div>
            <p>Hi, folks! 
            <br/>
            My name is {jsonInfo[selectionId].FirstName+" "+jsonInfo[selectionId].LastName} ({jsonInfo[selectionId].Pronouns}), and I work as a {jsonInfo[selectionId].JobTitle} / tutor for NLU Learning Support.<br/>
            Check out my introduction video below:</p>
            
            <p>
                <iframe src={jsonInfo[selectionId].IntroVideoLink} height="405" width="600" style={{border: "1px solid #464646"}} allowFullScreen="allowfullscreen" allow="autoplay"></iframe>
            </p>
            
            <p>
                <strong>Important Links:</strong><br/>
                <a rel="noopener" href={schedulingLinkByService} target="_blank">- Schedule an appointment with a [DISCIPLINE, e.g. math]  specialist</a> (Note: you must be logged in to access this page)
            </p>
            <p>
                <a rel="noopener" href={LearningSupportUrl} target="_blank">- Learning Support website</a>
            </p>
            <p>
                <a rel="noopener" href={StudyTablesLink} target="_blank">- Study Tables</a> (for virtual walk-in appointments)
            </p>
            <p>
                <a rel="noopener" href={DropoffLink} target="_blank">- Assignment drop-off service</a>
            </p>
            <p>
                <a rel="noopener" href={jsonInfo[selectionId].BioLink} target="_blank">- About me</a>
            </p>

            <p>If you have questions or concerns about Learning Support, feel free to reach out to me at&nbsp;<a rel="noopener" href={"mailto:"+jsonInfo[selectionId].email}>{jsonInfo[selectionId].email}</a> .</p>
            <hr/>
            <p>See you soon!<br/>
            -{jsonInfo[selectionId].FirstName}</p>
        </div>

*/
