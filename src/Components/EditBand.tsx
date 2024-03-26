import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles"; // Corrected import

const LabelTypography = styled(Typography)({
  textAlign: "right",
  paddingRight: "10px",
  marginTop: "15px",
  marginBottom: "32px",
});

interface BandSongProps {
  BandName: string;
  BandGenre: string;
  title: string;
  duration: string;
  composer: string;
  producer: string;
  album: string;
  spotify_link: string;
}

const EditSong: React.FC<BandSongProps> = ({
  BandName: initialBandName,
  BandGenre: initialBandGenre,
  title: initialTitle,
  duration: initialDuration,
  composer: initialComposer,
  producer: initialProducer,
  album: initialAlbum,
  spotify_link: initialSpotifyLink,
}) => {
  // State variables to hold the updated values
  const [bandName, setBandName] = useState(initialBandName);
  const [bandGenre, setBandGenre] = useState(initialBandGenre);
  const [title, setTitle] = useState(initialTitle);
  const [duration, setDuration] = useState(initialDuration);
  const [composer, setComposer] = useState(initialComposer);
  const [producer, setProducer] = useState(initialProducer);
  const [album, setAlbum] = useState(initialAlbum);
  const [spotifyLink, setSpotifyLink] = useState(initialSpotifyLink);

  // Function to log the current spotify_link value when the button is clicked
  const handleClick = () => {
    console.log({
      bandName,
      bandGenre,
      title,
      duration,
      composer,
      producer,
      album,
      spotifyLink,
    });
  };

  return (
    <div style={{ marginRight: "30px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <LabelTypography variant="subtitle1">Band Name:</LabelTypography>
          <LabelTypography variant="subtitle1">Genre:</LabelTypography>
          <LabelTypography variant="subtitle1">Title:</LabelTypography>
          <LabelTypography variant="subtitle1">Duration:</LabelTypography>
          <LabelTypography variant="subtitle1">Composer:</LabelTypography>
          <LabelTypography variant="subtitle1">Producer:</LabelTypography>
          <LabelTypography variant="subtitle1">Album:</LabelTypography>
          <LabelTypography variant="subtitle1">Spotify Link:</LabelTypography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            style={{ marginBottom: "4px" }}
            defaultValue={initialBandName}
            onChange={(event) => setBandName(event.target.value)}
            fullWidth
          />
          <TextField
            style={{ marginBottom: "4px" }}
            defaultValue={initialBandGenre}
            onChange={(event) => setBandGenre(event.target.value)}
            fullWidth
          />
          <TextField
            style={{ marginBottom: "4px" }}
            defaultValue={initialTitle}
            onChange={(event) => setTitle(event.target.value)}
            fullWidth
          />
          <TextField
            style={{ marginBottom: "4px" }}
            defaultValue={initialDuration}
            onChange={(event) => setDuration(event.target.value)}
            fullWidth
          />
          <TextField
            style={{ marginBottom: "4px" }}
            defaultValue={initialComposer}
            onChange={(event) => setComposer(event.target.value)}
            fullWidth
          />
          <TextField
            style={{ marginBottom: "4px" }}
            defaultValue={initialProducer}
            onChange={(event) => setProducer(event.target.value)}
            fullWidth
          />
          <TextField
            style={{ marginBottom: "4px" }}
            defaultValue={initialAlbum}
            onChange={(event) => setAlbum(event.target.value)}
            fullWidth
          />
          <TextField
            style={{ marginBottom: "4px" }}
            defaultValue={initialSpotifyLink}
            onChange={(event) => setSpotifyLink(event.target.value)}
            fullWidth
          />
          <button onClick={handleClick}>Log Data</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default EditSong;
