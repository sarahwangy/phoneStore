import React from "react";
import { Link } from "react-router-dom";

import { Container, ContainerWrapper, BackOption, Error } from "./style";

export default function NotFound() {
  return (
    <Container>
      <ContainerWrapper>
        <h2>Oops! Page not found.</h2>
        <Error>404</Error>
        <p>We can't find the page you're looking for.</p>
        <Link to={`/`}>
          <BackOption href="#">Go back home</BackOption>
        </Link>
      </ContainerWrapper>
    </Container>
  );
}
