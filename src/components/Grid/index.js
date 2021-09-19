import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper, Content, WrapperDark } from "./Grid.styles";

const Grid = ({ header, children, thema }) =>
  thema === "black" ? (
    <WrapperDark>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </WrapperDark>
  ) : (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );

Grid.propTypes = {
  header: PropTypes.string,
};

export default Grid;
