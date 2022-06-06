import React from 'react'
import albums from "./data";


export default function TrackList(){
    return (
      <div>
        {albums.filter(album => album.name === "Sgt. Peppers Lonely Hearts Club Band").map(filteredAlbum => (
        <div>
        <ol>
        <li>{filteredAlbum.tracks[0]} &#9654;&#65039;</li>
        <li>{filteredAlbum.tracks[1]} &#9654;&#65039;</li>
        <li>{filteredAlbum.tracks[2]} &#9654;&#65039;</li>
        <li>{filteredAlbum.tracks[3]} &#9654;&#65039;</li>
        </ol>
        </div>
      ))}
      </div>
    )
    
  }