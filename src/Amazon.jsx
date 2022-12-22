import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";


const Amazon = () => {
    return(
        <Card
          imgsrc = { Sdata[4].imgsrc}
          title =  { Sdata[4].title}
          sname =  { Sdata[4].sname}
          link =   { Sdata[4].link}
        /> 
     ); 
}

export default Amazon;