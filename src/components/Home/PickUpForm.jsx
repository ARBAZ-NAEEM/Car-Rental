import React, { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import FormGroupSelect from "../GeneralComponents/FormGroupSelect";
import FormGroupInput from "../GeneralComponents/FormGroupInput";

const PickUpForm = () => {
  const formPanel = {
    pickUpLocation: 0,
    // pickUpDate: "",
    // dropOffDate: "",
    // carType: 0,
  };
  const [fields, setFields] = useState(formPanel);
  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="section-form">
      <Container>
        <div className="form-section">
          <Row style={{ alignItems: "flex-end" }}>
            <Col>
              <FormGroupSelect
                label="Pick-up Location"
                onChange={handleChange}
                name="pickUpLocation"
                value={fields?.pickUpLocation}
                defaultName="Select Location"
              />
            </Col>
            <Col>
              <FormGroupInput
                label="Pick-up Date"
                onChange={handleChange}
                name="pickUpLocation"
                value={fields?.pickUpLocation}
                placeholder="d-m-Y"
              />
            </Col>
            <Col>
              <FormGroupInput
                label="Drop-off Date"
                onChange={handleChange}
                name="pickUpLocation"
                value={fields?.pickUpLocation}
                placeholder="d-m-Y"
              />
            </Col>
            <Col>
              <FormGroupSelect
                label="Car Type"
                onChange={handleChange}
                name="pickUpLocation"
                value={fields?.pickUpLocation}
                defaultName="Car Type"
              />
            </Col>
            <Col>
              <Button className="btn-formPanel" color="primary">
                Find a Car
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default PickUpForm;
