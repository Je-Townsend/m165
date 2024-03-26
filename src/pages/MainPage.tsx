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
        const response = await axios.get(`http://localhost:8080/songs`);
        setResponseShow(response.data); 
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
      }
    };
    
    fetchData();
  }, []);

  function checkLength(string: string) {
    if (string.length > 0) {
      return string;
    } else {
      return "null";
    }
  }

  function secondsToMinutes(secs: number) {
    let minutenGanz = secs / 60;
    var mins = Math.floor(minutenGanz);
    var restlicheSekunden = secs - mins * 60;
    return mins + " Minuten " + restlicheSekunden + " Sekunden";
  }

  return (
    <div className="Band">
      <h1>Songs</h1>
      <br />
      {responseShow && ( 
      responseShow.map((song: any) => {
        return(
        <BandSong
          BandName={checkLength(song.band.name)}
          BandGenre={checkLength(song.band.genre)}
          title={checkLength(song.title)}
          duration={secondsToMinutes(song.duration)}
          composer={checkLength(song.composer)}
          producer={checkLength(song.producer)}
          album={checkLength(song.album)}
          spotify_link={checkLength(song.spotify_link)}
          youtube_link={checkLength(song.youtube_link)} 
          btnText={"Go to Details"} 
          navUrl={"/details/" + checkLength(song.id)} 
          displayBtn={true}        />
          )
      })
        
      )}
      
      
    </div>
  );
}
/*
{responseShow && (
        <EditSong
        BandName={responseShow.band.name}
        BandGenre={responseShow.band.genre}
        title={responseShow.title}
        duration={secondsToMinutes(responseShow.duration)}
        composer={responseShow.composer}
        producer={responseShow.producer}
        album={responseShow.album}
        spotify_link={responseShow.spotify_link}
      />
      )} */