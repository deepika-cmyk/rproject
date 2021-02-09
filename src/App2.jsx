import React from 'react';
import {sum,sub,div,mult} from './Calc';

function App2(){
return(
    <React.Fragment>
<ul>
 <li> sum of two num is{sum(40,4)}</li>
 <li> sub of two num is{sub(30,3)}</li>
  <li>div of two num is{div(10,3)}</li> 
 <li> Mult of two num is{mult(10,3)}</li>
  </ul> 
  </React.Fragment>
);
}
  

 
 export default App2;
