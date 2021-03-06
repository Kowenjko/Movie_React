import styled from "styled-components";

export const ImageFlex = styled.img`
  width: 160px;
  /* width: 100%; */
  /* max-width: 720px; */
  transition: all 0.3s;
  object-fit: cover;
  /* object-fit: contain; */
  border-radius: 20px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
