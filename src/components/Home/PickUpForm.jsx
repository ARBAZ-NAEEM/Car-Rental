import React, { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import FormGroupSelect from "../GeneralComponents/FormGroupSelect";
import FormGroupInput from "../GeneralComponents/FormGroupInput";
import DatePicker from "react-datepicker";
const PickUpForm = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateof, setSelectedDateof] = useState(null);
  const { btnText, boxShadow } = props;
  const formPanel = {
    pickUpLocation: 0,
    pickUpDate: "",
    dropOffDate: "",
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
        <div className="form-section" style={{ boxShadow: boxShadow }}>
          <Row style={{ alignItems: "flex-end" }}>
            <Col lg="3" md="3" xs="12">
              <FormGroupSelect
                label="Pick-up Location"
                onChange={handleChange}
                name="pickUpLocation"
                value={fields?.pickUpLocation}
                defaultName="Select Location"
              />
            </Col>
            <Col lg="3" md="3" xs="12">
              <div className="form-group">
                <label className="form-label">Pick-up Date</label>

                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => {
                    const inputYear = date.getFullYear().toString();
                    // Check if the year input is longer than 4 characters
                    if (inputYear.length > 4) {
                      // Manipulate the year to only get the first 4 characters
                      const year = parseInt(inputYear.substring(0, 4), 10);
                      const newDate = new Date(date);
                      newDate.setFullYear(year);
                      setSelectedDate(newDate);
                    } else {
                      setSelectedDate(date);
                    }
                  }}
                  placeholderText={" d-m-Y"}
                  filterDate={(date) =>
                    date.getDay() !== 6 && date.getDay() !== 0
                  }
                  showYearDropdown
                  scrollableYearDropdown
                />
              </div>
            </Col>
            <Col lg="3" md="3" xs="12">
              <div className="form-group">
                <label htmlFor="">Drop-off Date</label>
                <DatePicker
                  selected={selectedDateof}
                  onChange={(date) => {
                    const inputYear = date.getFullYear().toString();
                    // Check if the year input is longer than 4 characters
                    if (inputYear.length > 4) {
                      // Manipulate the year to only get the first 4 characters
                      const year = parseInt(inputYear.substring(0, 4), 10);
                      const newDate = new Date(date);
                      newDate.setFullYear(year);
                      setSelectedDateof(newDate);
                    } else {
                      setSelectedDateof(date);
                    }
                  }}
                  placeholderText={" d-m-Y"}
                  filterDate={(date) =>
                    date.getDay() !== 6 && date.getDay() !== 0
                  }
                  showYearDropdown
                  scrollableYearDropdown
                />
              </div>
            </Col>
            <Col lg="3" md="3" xs="12">
              <div className="findcarbtn">
                <Button className="btn-formPanel" color="primary">
                  {btnText}
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default PickUpForm;
