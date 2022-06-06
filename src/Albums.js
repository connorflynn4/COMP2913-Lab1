import React from 'react'


export default function Albums(props){

    let styles = {borderRadius: "150px", height: "50px"};
    return (
      <div>
          <img src={props.coverImg} style={styles} alt={props.name} />
          <span>{props.name}</span>
      </div>
    )
    
  }
