import React from 'react';
import { makeStyles } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  thumbnail: {
    opacity: 0.5,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  thumbnailSelected: {
    opacity: 1,
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ImageGallery = ({ images, currentImage, onThumbnailClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {images.map((image, index) => (
          <Grid item xs={4} key={index}>
            <Paper
              className={`${classes.thumbnail} ${
                currentImage === index ? classes.thumbnailSelected : ''
              }`}
              onClick={() => onThumbnailClick(index)}
            >
              <img src={image.src} alt={image.alt} className={classes.image} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ImageGallery;
