import { useState } from 'react'
import './App.css'
import LinkInput from './LinkInput';

function App() {
  //this just sets up the use state and link/setlink
  const [link, setLink] = useState(''); 

  //this is creating a function that will accept a new value as a parameter 
  const handleLinkChange = (newValue) => {
    setLink(newValue);
    //console.log(newValue);
  };

  return (
    <div>
      <h1>Mind</h1>
      {/* this is actually using the linkinput function from the other file, the usestate and handlelinkchange func we just made */}
      <LinkInput 
        label = "Enter a link to save for later!"
        placeholder = "http://imgonnareadthislater.com"
        value = {link}
        onChange = {handleLinkChange}
      />
    </div>

  );


}

export default App
