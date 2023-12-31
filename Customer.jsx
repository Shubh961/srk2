import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";

export function Customer() {
  return (
    <Container className="mt-5 col-5">
      <Form>
        <Form.Group className="mb-3" controlId="customerEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="mobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text" placeholder="Enter mobile number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="text" placeholder="Enter amount" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="bankId">
          <Form.Label>Bank ID</Form.Label>
          <Form.Control type="text" placeholder="Enter bank ID" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="countOfInstallments">
          <Form.Label>Count of Installments</Form.Label>
          <Form.Control type="text" placeholder="Enter count of installments" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="amountDue">
          <Form.Label>Amount Due</Form.Label>
          <Form.Control type="text" placeholder="Enter amount due" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control type="text" placeholder="Enter status" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="loanPayerId">
          <Form.Label>Loan Payer ID</Form.Label>
          <Form.Control type="text" placeholder="Enter loan payer ID" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Customer;
