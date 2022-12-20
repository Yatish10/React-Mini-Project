// Show Heading that says Hello Sir, Good Morning, If Time is Between 1 to 11am
// Good Afternoon, if 12pm to 7pm
// Good Night, If 7pm to midnight

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

let curDate = new Date(2022,12,20,15);
curDate = curDate.getHours();
let greeting = '';

const cssStyle = { };

if(curDate >= 1 && curDate < 12){
  greeting = 'Good Morning !';
  cssStyle.color = 'blue';

} else if(curDate >= 12 && curDate < 20){
  greeting = 'Good Afternoon !';
  cssStyle.color = 'orange';

}else{
  greeting = 'Good Night !';
  cssStyle.color = 'green';
}

ReactDOM.render(
  <>
    <div>
      <h1> Hello Sir, <span style= {cssStyle}> { greeting } </span></h1>
    </div>
  </>,
    document.getElementById("root")
);

