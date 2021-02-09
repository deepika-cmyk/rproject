import React from 'react';
import Netflix from './Netflix';
import Amazon from './Amazon';


const favSeries="amazon";
const FavS=()=>{
if(favSeries==="netflix"){
    return <Netflix/>;
}else{
    return <Amazon/>;
}
};
//Using ternary operator:
//(favSeries==="netflix")? <Netflix/>:<Amazon/>


const App3=()=>(
  <React.Fragment>
  <h1 className="heading_style" >List of top 5 Netflix Series in 2020</h1>
 <FavS/>
        
  </React.Fragment>
);

export default App3;