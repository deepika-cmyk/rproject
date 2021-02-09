import React from 'react';
import ReactDOM from 'react-dom';

const flname="vinod thapa";

ReactDOM.render(
  <React.Fragment>
    <h1>My name is{flname}</h1> 
  </React.Fragment>,
   document.getElementById('root'));

// import React from 'react';//to create new element
// import ReactDOM from 'react-dom';//to call render method

// ReactDOM.render(<h1>Hello World!!!</h1>,document.getElementById('root'));


//How to render multiple elements in ReactDom.render
// import React from 'react';//to create new element
// import ReactDOM from 'react-dom';//to call render method

// ReactDOM.render(
// <div>
// <h1>Hello World!!!</h1>
//  <p>Please subscribe</p>
//  </div>,
//  document.getElementById('root')
//  );



 //we can use array too for react version 16 to render multiple elements
// import React from 'react';//to create new element
// import ReactDOM from 'react-dom';//to call render method

// ReactDOM.render(
// [
// <h1>Hello World!!!</h1>,
//  <p>Please subscribe</p>,
//  <h2>Please like and share</h2>
// ],
//  document.getElementById('root'));



// //Challenge 1
// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <React.Fragment>
//     <h1>Thapa Technical Netflix Pick</h1>
//     <p>List of Best Series</p>
//      <ol>
//       <li>Dark</li>
//       <li>Extra Curricular</li>
//       <li>My Holo Love</li>
//       <li>My first-2 Love</li>
//       <li>Mr Robot</li>
//     </ol> 
//   </React.Fragment>,
//    document.getElementById('root'));

//Javascript expression in js
  //  import React from 'react';
  //  import ReactDOM from 'react-dom';
   
  //  const flname="vinod thapa";
   
  //  ReactDOM.render(
  //    <React.Fragment>
  //      <h1>My name is{flname}</h1> 
  //    </React.Fragment>,
  //     document.getElementById('root'));


  //Tempelate literals in react
  // import React from 'react';
  //  import ReactDOM from 'react-dom';
   
  //  const fname="vinod "
  // const lname="thapa";
   
  //  ReactDOM.render(
  //    <React.Fragment>
  //      <h1>{`My name is ${fname} ${lname}`}</h1> 
  //    </React.Fragment>,
  //     document.getElementById('root'));
   
//Challenge 2:
  //     import React from 'react';
  //  import ReactDOM from 'react-dom';
   
  //  const fname="Dipika";
  // const lname="thapa";
  
  // const curDate=new Date().toLocaleDateString();
  // const currTime=new Date().toLocaleTimeString();
  
 
   
  //  ReactDOM.render(
  //    <React.Fragment>
  //      <h1>{`My name is ${fname} ${lname}`}</h1> 
  //      <p>Todays date is {curDate}</p>
  //      <p>Current Time is{currTime} </p>
  //    </React.Fragment>,
  //     document.getElementById('root'));
   

//  //JSX Attributes in react:
//      import React from 'react';
//        import ReactDOM from 'react-dom';
       
//        const flname="vinod thapa";
//        const img1="https://picsum.photos/id/1/200/300";
//        const img2="https://picsum.photos/id/2/300/300";
//        const img3="https://picsum.photos/id/3/400/300";
//        const links="https://www.thapatechnical.com";
       
//        ReactDOM.render(
//          <React.Fragment>
//            <h1 contentEditable="true">My name is {flname}</h1> 
//            <img src={img1} alt="randomImages" />
//            <img src={img2} alt="randomImages" />
//            <a href={links} target="_blank">
//            <img src={img3} alt="randomImages" />
//            </a>
//          </React.Fragment>,
//           document.getElementById('root'));



//Inline css:
          // import React from 'react';
          // import ReactDOM from 'react-dom';
          // import './index.css';
          
          // const flname="vinod thapa";
          // const img1="https://picsum.photos/id/1/200/300";
          // const img2="https://picsum.photos/id/2/300/300";
          // const img3="https://picsum.photos/id/3/400/300";
          // const links="https://www.thapatechnical.com";

          // const heading={
          //   color:'#fa9191',
          //   textTransform:'capitalize',
          //   textAlign:'center',
          //   textTransform:'capitalize',
          //   fontWeight:'bold',
          //   textShadow:'0px 2px 4px #ffe9c5',
          //   margin:'50px 0',
          //   fontFamily:" 'Josefin Sans', sans-serif " //for inline styling camelcase is neccessary,every value should be inside single or double quote
            

          // };
          
          // ReactDOM.render(
          //   <React.Fragment>
          //     <h1 style={heading}>My name is {flname}</h1>
 
          //     <div className="img_div">
          //     <img src={img1} alt="randomImages" />
          //      <img src={img2} alt="randomImages" />
          //     <a href={links} target="_blank">
          //     <img src={img3} alt="randomImages" />
          //     </a>
          //     </div>
          //   </React.Fragment>,
          //    document.getElementById('root'));


          //Challenge 3:
          //  import React from 'react';
          //  import ReactDOM from 'react-dom';
          //  import App1 from './App1';

          //  import './index.css';
          
          //  ReactDOM.render(
          //   <App1></App1>,
          //    document.getElementById('root')
          //  );


          //Components on react
//           import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
// <App></App>,
//    document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './App2';

ReactDOM.render(
  <React.Fragment>
  <App2></App2>
  
  </React.Fragment>,
  document.getElementById('root'));





