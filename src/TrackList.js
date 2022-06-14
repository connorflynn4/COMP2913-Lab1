
const TrackList = ({album}) => {
  const { name, coverImg, tracks } = album;
  let styles = { height: "400px" };
  let listStyles = { padding: "20px" };
  return (
    <div className="flex-row">
      <>
      <div>
      <img style={styles} src={coverImg} alt={name} />
      </div>
      <div style={listStyles}>
        <ol>
        <li>{tracks[0]} &#9654;&#65039;</li>
        <li>{tracks[1]} &#9654;&#65039;</li>
        <li>{tracks[2]} &#9654;&#65039;</li>
        <li>{tracks[3]} &#9654;&#65039;</li>
        </ol>
     
      </div>
      </>
    </div>
  );
}

export default TrackList