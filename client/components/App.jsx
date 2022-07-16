import React, { useEffect } from 'react';


const App = () => {

    useEffect(() => {
        fetch('/containers', {  headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }}).then((data) => data.json()).then((info) => console.log(info))
    }, [])

    return (
        <div>
            <h1>Hi there</h1>
        </div>
    )
}

export default App;