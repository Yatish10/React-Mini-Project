
import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import "./index.css";

ReactDOM.render( 
<>
  <Card 
    imgsrc = "dark.jpg"
    title = " A Netflix Orignal Series"
    sname = "DARK"
    link = "https://www.netflix.com/in/title/80990668?source=35"
  /> 
  <Card 
    imgsrc = "extracurricular.jpg"
    title = " A Netflix Orignal Series"
    sname = "Extra Curricular"
    link = "https://www.netflix.com/in/title/80990668"
  />
  <Card 
    imgsrc = "strangerthings.jpg"
    title = " A Netflix Orignal Series"
    sname = "Stranger Things"
    link = "https://www.netflix.com/in/title/80057281"

  />
</>, 
document.getElementById("root"));

