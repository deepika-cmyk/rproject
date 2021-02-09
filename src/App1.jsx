import React from 'react';
        
          
function App1(){
           let currDate=new Date(2021,2,4,16);
           currDate=currDate.getHours();
           let greeting="";
           const cssStyle={};

           if(currDate>=1&&currDate<12){
             greeting="Good Morning";
            cssStyle.color='green';
          }else if(currDate>=12&&currDate<19){
            greeting="Good Afternoon";
             cssStyle.color='Orange';
           }else{
            greeting="Good Night";
           cssStyle.color='Black';
           }

           return(
            <React.Fragment>
            <div>
            <h1>Hello sir,<span style={cssStyle}>{greeting}</span></h1>

            </div>
           </React.Fragment>

           );
}

export default App1;
          