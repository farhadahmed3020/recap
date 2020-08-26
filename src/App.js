import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [heros,setHeros] = useState([])
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=>res.json())
   .then(data => setHeros(data))
  } , [])
  //const heros =[{name:'farhad',age:'21'},{name:'farhan',age:'8'},{name:'fayshal',age:'16'},{name:'rifat',age:'15'}];//

  return (
    <div className="App">
    
      <header className="App-header">
      <NewWebsite></NewWebsite>
      {
      heros.map(hr =><Hero name={hr.name} age={hr.age}></Hero>)
      }

      </header>
    </div>
  );
  }
  // add section//
 function NewWebsite() {
   const[count, setCount]=useState(0);
   const handelClick = () => setCount(count+1);
   return (
     <div>
       <button onClick={handelClick}> Add Website</button>
       <h4>Number of Website:{count}</h4>
     </div>
   )
 }
 // cade section//

  function Hero(props) {
    console.log(props);
    const heroStyle={
      border:'2px solid purple',
      margin:'20px',
      padding: '10px',
      boxShadow: '5px 2px 2px wheat'
    }
    return (
      <div style={heroStyle}>
        <h1>person:{props.name}</h1>
        <h3> age:{props.age} </h3>
      </div>
    )
    
    
    
  }
 

export default App;
