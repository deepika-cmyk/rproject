import React from 'react';

        function Card(props){//props is object name
           // console.log(props);
            return(
              <>
              <div className="cards">
              <div className="card">
              <img src={props.imgsrc}alt="myPic"className="card__img"/>
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h1 className="card__title">{props.sname}</h1>
            <a href={props.link}target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
              </div>
          
          
              </div>
              </>
        
            );
            }
    export default Card;