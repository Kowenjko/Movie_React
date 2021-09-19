import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Styles
import { ImageFlex } from "./ThumbFlex.styles";

const ThumbFlex = ({ image, movieId, clickable, onDragStart }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <ImageFlex src={image} onDragStart={onDragStart} alt='movie-thumb' />
      </Link>
    ) : (
      <ImageFlex src={image} alt='movie-thumb' />
    )}
  </div>
);

ThumbFlex.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default ThumbFlex;
