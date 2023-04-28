import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@mui/styles';
import { IconButton, Paper, Typography } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import ImageGallery from './ImageGallery';
import "./main.css"

const CatalogViewer = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentImage((currentImage) => (currentImage + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, images.length]);

  const handleNext = () => {
    setCurrentImage((currentImage) => (currentImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((currentImage) =>
      currentImage === 0 ? images.length - 1 : currentImage - 1
    );
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
    setIsPlaying(false);
  };

  return (
    <div className="root">
      <Paper className="imageContainer">
        <img
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className="image"
        />
      </Paper>
      <div className="details">
        <Typography variant="h5" gutterBottom>
          {images[currentImage].title}
        </Typography>
        <Typography variant="body1">{images[currentImage].description}</Typography>
      </div>
      <div className="controls">
        <IconButton
          color="primary"
          aria-label="previous"
          className="button"
          onClick={handlePrev}
        >
          <img
            src="/previous.png"
            alt="previous"
            className="playIcon"
          />
        </IconButton>
        {isPlaying ? (
          <IconButton
            color="primary"
            aria-label="pause"
            className="button"
            onClick={handlePause}
          >
            <Pause className="playIcon" />
          </IconButton>
        ) : (
          <IconButton
            color="primary"
            aria-label="play"
            className="button"
            onClick={handlePlay}
          >
            <PlayArrow className="playIcon" />
          </IconButton>
        )}
        <IconButton
          color="primary"
          aria-label="next"
          className="button"
          onClick={handleNext}
        >
          <img src="/next.png" alt="next" className="playIcon" />
        </IconButton>
      </div>
      <ImageGallery
        images={images}
        currentImage={currentImage}
        onThumbnailClick={handleThumbnailClick}
      />
    </div>
  );
};

export default CatalogViewer;

