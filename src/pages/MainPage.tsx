import BandSong from "../Components/BandSong";
import "../App.css";
import { useEffect } from "react";
import axios from "axios";

export default function QuizOverview() {
  //useEffect(() => {
  //  const res = async () => {
  //    await axios.get("http://localhost:8000");
  //  };
  //  res();
  //}, []);

  const BandName = "Example Band";
  const BandGenre = "Rock";
  const title = "Example Song";
  const band_id = 1;
  const duration = 255;
  const composer = "John Doe";
  const producer = "Jane Doe";
  const album = "Example Album";
  const spotify_link = "https://example.com";

  function secondsToMinutes(secs: number) {
    let minutenGanz = secs / 60;
    var mins = Math.floor(minutenGanz);
    var restlicheSekunden = secs - mins * 60;
    return mins + " Minuten " + restlicheSekunden + " Sekunden";
}

  return (
    <div className="Band">
      <h1>MainPage</h1>
      <br />
      <BandSong
        BandName={BandName}
        BandGenre={BandGenre}
        title={title}
        band_id={band_id}
        duration={secondsToMinutes(duration)}
        composer={composer}
        producer={producer}
        album={album}
        spotify_link={spotify_link}
      />
    </div>
  );
}