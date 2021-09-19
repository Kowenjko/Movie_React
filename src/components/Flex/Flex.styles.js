import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--medGrey);
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: var(--white);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  /* margin: 0 auto; */
  /* display: flex; */
  /* flex-wrap: nowrap; */
  min-width: 220px;
  /* overflow: hidden; */
  /* gap: 2rem;  */
`;
