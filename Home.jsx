import React from "react";
import { Card, Container } from "react-bootstrap";

export const Home = ({ clientName }) => {
  return (
    <Container className="my-5">
      <Card>
        <Card.Body>
          <Card.Title>Welcome to GUPS </Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};
