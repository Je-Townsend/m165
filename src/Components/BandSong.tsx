interface BandSongProps {
  BandName: string;
  BandGenre: string;
  title: string;
  band_id: number;
  duration: string;
  composer: string;
  producer: string;
  album: string;
  spotify_link: string;
}

const BandSong: React.FC<BandSongProps> = ({
  BandName,
  BandGenre,
  title,
  band_id,
  duration,
  composer,
  producer,
  album,
  spotify_link,
}) => {
  return (
    <>
      <h1>{BandName}</h1>
      <p>
        <strong>Genre:</strong> {BandGenre}
      </p>
      <p>
        <strong>Title:</strong> {title}
      </p>
      <p>
        <strong>Band ID:</strong> {band_id}
      </p>
      <p>
        <strong>Duration:</strong> {duration}
      </p>
      <p>
        <strong>Composer:</strong> {composer}
      </p>
      <p>
        <strong>Producer:</strong> {producer}
      </p>
      <p>
        <strong>Album:</strong> {album}
      </p>
      <p>
        <strong>Spotify Link:</strong> {spotify_link}
      </p>
    </>
  );
};

export default BandSong;