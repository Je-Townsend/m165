import BandSong from "../Components/BandSong";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MainPage() {
  const [responseShow, setResponseShow] = useState<any>(null); // Verwende useState, um responseShow zu speichern

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/songs');
        setResponseShow(response.data[0]); // Setze die Antwortdaten in den responseShow-State
        console.log('Daten erhalten:', response.data[1]);
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
      }
    };
    
    fetchData();
  }, []);

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
      {responseShow && ( // Zeige BandSong nur an, wenn responseShow definiert ist
        <BandSong
          BandName={responseShow.band.name}
          BandGenre={responseShow.band.genre}
          title={responseShow.title}
          band_id={responseShow.band.id}
          duration={secondsToMinutes(responseShow.duration)}
          composer={responseShow.composer}
          producer={responseShow.producer}
          album={responseShow.album}
          spotify_link={responseShow.spotify_link}
        />
      )}
    </div>
  );
}