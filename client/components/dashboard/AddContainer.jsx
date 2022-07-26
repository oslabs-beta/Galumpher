import React from 'react';
//make a fetch put request to server and send container name or ID in the body 

//I want to be able to click on containers in the nav bar and have a new page pop up 
//displaying the container name and container id along with an add container button 

//create a box/frame
//create two input fields
//create add container button 

const AddContainer = () => {
  
  return (
    <center>
      <div id='outerBox'>
        <div id='innerBox'>
          <div id="App">
            <label><strong>Enter Container Name & ID</strong></label><br/>
            <form method='POST' action='/'>
              <input type="text" placeholder="Container Name" required></input><br/>
              <input type="text" placeholder="Container ID" required></input>
              <button type="submit" id='addContainer'>Add Container</button>
            </form>
          </div>
        </div>
      </div>
    </center>

  );
};


export default AddContainer;