import React, { useState, useContext } from 'react';
import LocalIssues from '../../components/LocalIssues';
import MapContainer from '../MapContainer';
import './localIssues.css';
import { Form, Container, Tabs, Tab, Button } from 'react-bootstrap';
import { AppContext } from '../../context/AppContext';

const LocalIssuesPage = () => {
  const { apiData, setApiData, setFilterData } = useContext(AppContext);

  const [mapMarkers, setMapMarkers] = useState([]);
  const [mapCenter, setMapCenter] = useState([-80.2044, 25.8028]);

  const [value, setValue] = useState([1, 3]);
  const [zipCode, setZipcode] = useState('');
  const handleChange = (e) => setZipcode(e.target.value);

  const fetchMarkers = async () => {
    let data = apiData.filter((item) => item.zip_code === zipCode);
    setMapMarkers(data);
    setFilterData(data);
    if (data.length < 1) {
      return null;
    } else {
      setMapCenter([data[0].longitude, data[0].latitude]);
    }
  };

  return (
    <div>
      <Container>
        <Form.Group>
          <br />
          <Form.Control
            value={zipCode}
            onChange={handleChange}
            size="lg"
            type="text"
            placeholder="Enter ZipCode"
          />
          <Button className="mapSubmit" onClick={fetchMarkers}>
            Confirm
          </Button>
          <br />
        </Form.Group>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab className="tab" eventKey="list" title="List View">
            <LocalIssues zipcode={zipCode} />
          </Tab>
          <Tab eventKey="profile" title="Map">
            <MapContainer
              zipCode={zipCode}
              mapMarkers={mapMarkers}
              mapCenter={mapCenter}
            />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default LocalIssuesPage;
