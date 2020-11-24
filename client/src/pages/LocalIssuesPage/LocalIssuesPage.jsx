import React from 'react';
import { Form, Container } from 'react-bootstrap';
import LocalIssues from '../../components/LocalIssues';
import MapContainer from '../MapContainer';

const LocalIssuesPage = () => {
  return (
    <div>
      <Container>
        <Form.Group>
          <br />
          <Form.Control type="text" placeholder="Normal text" />
          <br />
        </Form.Group>
        <MapContainer />
        <LocalIssues />
      </Container>
    </div>
  );
};

export default LocalIssuesPage;
