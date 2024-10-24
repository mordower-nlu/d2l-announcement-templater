import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { D2LIntroTemplate } from './pages/D2LIntroTemplate'
import { D2LIntroTemplateWithSelection } from './pages/D2LIntroWithSelectionComponent'
import { KnewtonWorkshopAnnouncement } from './pages/KnewtonWorkshopAnnouncement'

function App() {
  const [pageId,setPageId] = useState(0);
  const ComponentArray = [<p>No template has been selected.</p>,<D2LIntroTemplateWithSelection/>,<KnewtonWorkshopAnnouncement/>]
  const clickHandler = (e) => {setPageId(e.target.value)}

  return (
    <>
      <div>
        <h3>Select a Template: </h3>
         <button onClick={clickHandler} value={1}>D2L Intro Template</button>
         <button onClick={clickHandler} value={2}>Knewton Workshop Announcement</button>

      </div>
      <hr/>
      <div>
        {ComponentArray[pageId]}
      </div> 
    </>
  )
}

export default App
