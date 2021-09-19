import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
// import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
// import Button from "./Button";

// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";
// Image
import NoImage from "../images/no_image.jpg";
import Flex from "./Flex";
import ThumbFlex from "./ThumbFlex";
import Footer from "./Footer";

const Home = () => {
  const { state, error, searchTerm, setSearchTerm } = useHomeFetch();
  // state.results.length = 10;
  // console.log(prob);
  const handleDragStart = (e) => e.preventDefault();
  if (error) return <div>Something went wrong ...</div>;
  const responsive = {
    0: { items: 3 },
    568: { items: 5 },
    1024: { items: 7 },
  };
  return (
    <>
      {!searchTerm && state.results[0] ? (
        <Carousel autoPlay showThumbs={false} infiniteLoop useKeyboardArrows stopOnHover={true}>
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
          />
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[1].backdrop_path}`}
            title={state.results[1].original_title}
            text={state.results[1].overview}
          />
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[2].backdrop_path}`}
            title={state.results[2].original_title}
            text={state.results[2].overview}
          />
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[3].backdrop_path}`}
            title={state.results[3].original_title}
            text={state.results[3].overview}
          />
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[4].backdrop_path}`}
            title={state.results[4].original_title}
            text={state.results[4].overview}
          />
        </Carousel>
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results.map((movie, item) =>
          item < 7 ? (
            <Thumb
              key={movie.id}
              clickable
              image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
              movieId={movie.id}
            />
          ) : (
            ""
          )
        )}
      </Grid>
      {/* {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)} />
      )} */}
      <Flex header='Comedy Movies'>
        <AliceCarousel
          autoPlay
          items={state.commedy.map((movie) => (
            <ThumbFlex
              key={movie.id}
              clickable
              onDragStart={handleDragStart}
              image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
              movieId={movie.id}
            />
          ))}
          controlsStrategy='alternate'
          animationType='fadeout'
          responsive={responsive}
          autoPlayInterval={2000}
          animationDuration={2000}
          infinite={true}
          mouseTracking={true}
        />
      </Flex>
      <Grid header='Action Movies'>
        {state.actions.map((movie, item) =>
          item < 7 ? (
            <Thumb
              key={movie.id}
              clickable
              image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
              movieId={movie.id}
            />
          ) : (
            ""
          )
        )}
      </Grid>
      <Grid header='Romance Movies' thema='black'>
        {state.romance.map((movie, item) =>
          item < 7 ? (
            <Thumb
              key={movie.id}
              clickable
              image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
              movieId={movie.id}
            />
          ) : (
            ""
          )
        )}
      </Grid>
      <Grid header='Dokumentaries'>
        {state.documental.map((movie, item) =>
          item < 7 ? (
            <Thumb
              key={movie.id}
              clickable
              image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
              movieId={movie.id}
            />
          ) : (
            ""
          )
        )}
      </Grid>
      <Footer />
    </>
  );
};

export default Home;
