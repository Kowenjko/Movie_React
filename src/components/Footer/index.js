import React from "react";
import { Wrapper, Content, Text } from "./Footer.styles";
const Footer = () => (
  <Wrapper>
    <Content>
      <Text>&copy; {new Date().getFullYear()}</Text>
    </Content>
  </Wrapper>
);

export default Footer;
