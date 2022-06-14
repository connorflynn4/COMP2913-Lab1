
const Album = ({album, handleChange, currentAlbumId}) => {

  const { id, name, coverImg } = album;
  let styles = { borderRadius: "40px" , height: "50px" };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          text={name}
          value={id}
          checked={currentAlbumId === id}
          onChange={() => handleChange(album)}
        />
        <img style={styles} src={coverImg} alt={name} />
        {name}
      </label>
    </div>
  );
}

export default Album

