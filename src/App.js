import React from 'react';

function App() {
  // new Date(year, month, day, hours, min, sec, millisec)
let curDate = new Date(2022,12,20,2);
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

return(
  <>
    <div>
      <h1> Hello Sir, <span style= {cssStyle}> { greeting } </span></h1>
    </div>
  </>
);
}

export default App;
