import Albums from "./Albums"
import albums from "./data";
import './App.css';
import TrackImage from "./TrackImage";
import TrackList from "./TrackList";

function App() {
  return (
    <div>
    <div className="rowC">
      {albums.filter(album => album.name === "Sgt. Peppers Lonely Hearts Club Band").map(filteredAlbum => (
        <TrackImage coverImg={filteredAlbum.coverImg}/>
      ))}
      <TrackList />
      </div>
      <div>
    <h1>Select an Album</h1>
    { albums.map ((album) => (
      <Albums name={album.name} coverImg ={album.coverImg} />
    ))}
    </div>
    </div>
  );
}

export default App;
