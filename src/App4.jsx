import React from 'react';

const SlotM=(props)=>{
// let x='😄';
// let y='😄';
// let z='😃';

let x=props.x;
let y=props.y;
let z=props.z;

if(x===y&&y===z){
    return (
        <React.Fragment>
        <div className="slot_inner">
<h1>{x}{y}{z}</h1>
        <h1>This is matching.</h1>
        <hr/>
        </div>
        </React.Fragment>
        
    );

}else{
    return (
        <React.Fragment>
        <div className="slot_inner">
<h1>{x}{y}{z}</h1>
        <h1>This is not matching.</h1>
        <hr/>
        </div>
        </React.Fragment>
        
    );

}
}
const App4=()=>{
    return(
        <React.Fragment>
<h1 className="heading_style">
Welcome to 🎰 <span style={{fontWeight:'bold'}}>Slot Machine game</span>🎰</h1>

<div className="slotmachine">    
<SlotM x='😄' y= '😄' z='😄'/>
<hr/>
<SlotM x='😄' y= '😄' z='😄'/>
<hr/>
<SlotM x='😄' y= '😄' z='😄'/>
<hr/>
<slotM x='😃' y= '😄' z='😄'/>
</div>
        </React.Fragment>
    );
}

export  default App4;