import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper, Content } from "./Flex.styles";

const Flex = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

Flex.propTypes = {
  header: PropTypes.string,
};

export default Flex;
