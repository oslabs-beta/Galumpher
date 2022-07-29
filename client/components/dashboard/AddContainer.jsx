import React from 'react';

//make a fetch put request to server and send container name or ID in the body 

//I want to be able to click on containers in the nav bar and have a new page pop up 
//and dynamically send a fetch request to the database to grab a list of container names and ID to 
//display the list of container name and container id along with check box
//that check box will need a eventlistener function to know if users check the box or not
//if the box is checked and user clicks the add container button then UI will add the container name and ID to the sub menu list

//the data returned is going to be an array of objects 
//create another route to get container name and container ID for the get state fetch 
//when someone clicks the add button, use effect wil ltrigger a fetch to grab the container name 
//and id and parse the object to display the information that comes back to the front end 


//create a list column called Container Name
//create a list column called Container ID
//create a list column called select and this is where all the check boxes will be 

const AddContainer = () => {
  
  return (
    <center>
      <div id='outerBox'>
        <div id='innerBox'>
          <div id="App">
            <h1 id="title">Add Containers to Navigation Bar</h1>
            <label><strong>Enter Container Name & ID</strong></label><br/>
            <table>
              <thead>
                <tr>
                  <th>hi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>hi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </center>

  );
};


export default AddContainer;



{/* <form method='POST' action='/'>
<input type="text" placeholder="Container Name" required></input><br/>
<input type="text" placeholder="Container ID" required></input><br/>
<button type="submit" id='addContainer'>Add Container</button>
</form> */}

