import React from 'react';
import './App.css';
import ContentComponent from './ContentComponent';
import ContentSecond from './ContentSecond';
import ContentThird from './ContentThird';
  

const Hello = () => {
  const main = true;
  const text = "Hello, world!";
  const color = { color: 'black' };

  return <h1 style={color}> {text}</h1>;
  
 
}
function App() {

  return (
    <div className="App">
      <Hello/>
      <ContentComponent />
      <ContentSecond />
      <ContentThird />
    </div>
  );
}


        
 


export default App;
