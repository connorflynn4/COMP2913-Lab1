import React from 'react'


export default function TrackImage(props){

    let styles = {height: "400px"};
    return (
      <div>
          <img src={props.coverImg} style={styles} alt={props.name} />
      </div>
    )
    
  }