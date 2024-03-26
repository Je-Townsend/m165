import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles"; // Corrected import

const LabelTypography = styled(Typography)({
  textAlign: "center",
  paddingLeft: "10px",
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
  youtube_link: string;
  btnText: string | undefined;
  navUrl: string | undefined;
  displayBtn: boolean;
}

const BandSong: React.FC<BandSongProps> = ({
  BandName,
  BandGenre,
  title,
  duration,
  composer,
  producer,
  album,
  spotify_link,
  youtube_link,
  btnText,
  navUrl,
  displayBtn
}) => {
  
  return (
    <div style={{ marginRight: "30px", border: "1px solid black" }}>
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
          <LabelTypography variant="subtitle1">Youtube Link:</LabelTypography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography style={{ textAlign: "left", paddingLeft: "-10px", marginLeft: "-70px", marginTop: "16px", marginBottom: "36px", color: "#000" }}>
            {BandName}
          </Typography>
          <Typography style={{ textAlign: "left", paddingLeft: "-10px", marginLeft: "-70px", marginTop: "16px", marginBottom: "36px", color: "#000" }}>
            {BandGenre}
          </Typography>
          <Typography style={{ textAlign: "left", paddingLeft: "-10px", marginLeft: "-70px", marginTop: "16px", marginBottom: "36px", color: "#000" }}>
            {title}
          </Typography>
          <Typography style={{ textAlign: "left", paddingLeft: "-10px", marginLeft: "-70px", marginTop: "16px", marginBottom: "36px", color: "#000" }}>
            {duration}
          </Typography>
          <Typography style={{ textAlign: "left", paddingLeft: "-10px", marginLeft: "-70px", marginTop: "16px", marginBottom: "36px", color: "#000" }}>
            {composer}
          </Typography>
          <Typography style={{ textAlign: "left", paddingLeft: "-10px", marginLeft: "-70px", marginTop: "16px", marginBottom: "36px", color: "#000" }}>
            {producer}
          </Typography>
          <Typography style={{ textAlign: "left", paddingLeft: "-10px", marginLeft: "-70px", marginTop: "16px", marginBottom: "36px", color: "#000" }}>
            {album}
          </Typography>
          <Typography style={{ textAlign: "left", paddingLeft: "-10px", marginLeft: "-70px", marginTop: "16px", marginBottom: "36px", color: "#000" }}>
            {spotify_link}
          </Typography>
          <Typography style={{ textAlign: "left", paddingLeft: "-10px", marginLeft: "-70px", marginTop: "16px", marginBottom: "36px", color: "#000" }}>
            {youtube_link}
          </Typography>
          {(displayBtn && navUrl && btnText) && (
          <button 
          onClick={() => {
            window.location.href = navUrl;
          }}
          >{btnText}</button>
          )}
          

        </Grid>
      </Grid>
    </div>
  );
};

export default BandSong;
