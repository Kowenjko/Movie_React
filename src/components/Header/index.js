import React from "react";
import { Link } from "react-router-dom";

import Tmdb from "../../images/TMDB.svg";
import Logo from "../../images/youtube.png";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={Tmdb} alt='rmdb-logo' />
      </Link>
      <TMDBLogoImg src={Logo} alt='tmdb-logo' />
    </Content>
  </Wrapper>
);

export default Header;
