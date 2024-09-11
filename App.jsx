import { useState } from 'react'
import './App.css'
import LinkInput from './LinkInput';
import LinkItem from './LinkItem';

function App() {
  //this just sets up the use state and links/setlinks 
  //list of links
  const [links, setLinks] = useState(''); 

  //state to store current value of link input field
  const [currentLink, setCurrentLink] = useState('');


  //this is creating a function that will accept a new value as a parameter 
  const handleLinkChange = (newValue) => {
    setLinks(newValue);
    //console logging current value of the link input field
    console.log(newValue);
  };

  return (
    <div>
      <h1>Mind</h1>
      {/* this is actually using the linkinput function from the other file, the usestate and handlelinkchange func we just made */}
      <LinkInput 
        label = "Enter a link to save for later!"
        placeholder = "http://imgonnareadthislater.com"
        value = {currentLink}
        onChange = {handleLinkChange}
      />
    </div>

  );


}

export default App



/*

// Import necessary dependencies and components
import React, { useState } from 'react';
import LinkInput from './LinkInput'; // Import the LinkInput component
import LinkItem from './LinkItem';   // Import the LinkItem component

// Define the main App component
function App() {
  // Define state to store the list of links
  const [links, setLinks] = useState([]); 

  // Define state to store the current value of the link input
  const [currentLink, setCurrentLink] = useState(''); 

  // Function to handle changes in the input field
  const handleLinkChange = (newValue) => {
    // Update the currentLink state with the new value from the input field
    setCurrentLink(newValue); 
  };

  // Function to handle the submission of the current link
  const handleAddLink = () => {
    // Check if the current link is not just empty spaces
    if (currentLink.trim()) { 
      // Add the current link to the links array and update the state
      setLinks([...links, currentLink]); 
      
      // Clear the input field by resetting currentLink state to an empty string
      setCurrentLink(''); 
    }
  };

  */

  /*

  // Render the UI
  return (
    <div>
      <h1>Mind</h1> {/* Display a title */
      
      //{/* Render the LinkInput component and pass necessary props */}
      //<LinkInput 
      //  label="Enter a link to save for later!" // Label text for the input
      //  placeholder="http://imgonnareadthislater.com" // Placeholder text inside the input field
      //  value={currentLink} // Bind the current value of the input to the currentLink state
      //  onChange={handleLinkChange} // Handle input changes with handleLinkChange function
      ///>
      
      //{/* Button to add the link to the list when clicked */}
      //<button onClick={handleAddLink}>Add Link</button>
      
      //{/* Render the list of links using the LinkItem component */}
      //<ul>
        //{links.map((link, index) => (
          // For each link in the links array, create a LinkItem component
          // Pass the link as a prop and assign a unique key to each item
        ///  <LinkItem key={index} link={link} /> 
        
      //</ul>
    //</div>
  


// Export the App component as the default export
//export default App;

