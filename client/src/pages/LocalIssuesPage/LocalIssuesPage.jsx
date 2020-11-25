import React, { useState } from 'react';
import LocalIssues from '../../components/LocalIssues';
import MapContainer from '../MapContainer';
import './localIssues.css';
import { Form, Container, Tabs, Tab } from 'react-bootstrap';

const LocalIssuesPage = () => {
  const [value, setValue] = useState([1, 3]);
  const handleChange = (val) => setValue(val);
  return (
    <div>
      <Container>
        <Form.Group>
          <br />
          <Form.Control size="lg" type="text" placeholder="Enter ZipCode" />
          <br />
        </Form.Group>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab className="tab" eventKey="list" title="List View">
            <LocalIssues />
          </Tab>
          <Tab eventKey="profile" title="Map">
            <MapContainer />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default LocalIssuesPage;
