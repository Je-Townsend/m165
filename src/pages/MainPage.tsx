import BandSong from "../Components/BandSong";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import EditSong from "../Components/EditBand";

export default function MainPage() {
  const [responseShow, setResponseShow] = useState<any>(null); // Verwende useState, um responseShow zu speichern
  let { id } = useParams<{ id: string }>();



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/songs/${id}`);
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
          duration={secondsToMinutes(responseShow.duration)}
          composer={responseShow.composer}
          producer={responseShow.producer}
          album={responseShow.album}
          spotify_link={responseShow.spotify_link}
        />
      )}
      <EditSong
        BandName={responseShow.BandName}
        BandGenre={responseShow.BandGenre}
        title={responseShow.title}
        duration={secondsToMinutes(responseShow.duration)}
        composer={responseShow.composer}
        producer={responseShow.producer}
        album={responseShow.album}
        spotify_link={responseShow.spotify_link}
      />
    </div>
  );
}
