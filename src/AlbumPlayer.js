import { useState } from "react";
import albums from "./data";
import Album from "./Album";
import TrackList from "./TrackList";

const AlbumPlayer = () => {
  
  const [currentAlbum, setCurrentAlbum] = useState(albums[0]);
  const handleChange = (album) => {
    setCurrentAlbum(album);
  };
  return (
    <>
      <TrackList album={currentAlbum} />
      <h1>Select an Album</h1>
      {albums.map((album) => (
        <Album
          album={album}
          handleChange={handleChange}
          currentAlbumId={currentAlbum.id}
        />
      ))}
    </>
  );
}

export default AlbumPlayer