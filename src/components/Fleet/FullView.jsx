import React from "react";
import { Col, Container, Row } from "reactstrap";
import modalcar from "../../assets/img/modal-image-car.png";
import close from "../../assets/img/close-icon.png";
import question from "../../assets/img/question.png";
import questionfill from "../../assets/img/question-fill.png";
import usericon from "../../assets/img/user-icon.png";
import bagicon from "../../assets/img/bag-icon.png";
import dooricon from "../../assets/img/door-icon.png";
import manulicon from "../../assets/img/manul-icon.png";
import petrolicon from "../../assets/img/petrol-icon.png";
const FullView = ({ onClose }) => {
  const handleClose = (e) => {
    e.stopPropagation(); // Prevent the event from bubbling up to the overlay
    onClose(); // Close the modal
  };
  return (
    <div className="popup-overlay">
      <div className="modal-container">
        <span className="close-button" onClick={handleClose}>
          <img src={close} alt="" />
        </span>
        <div className="modal-body">
          <Container>
            <Row>
              <Col lg="6" md="6" className="px-0">
                <div className="image-modal">
                  <img src={modalcar} alt="" />
                </div>
              </Col>
              <Col lg="6" md="6" xs="12" className="px-0">
                <div className="right-section-contant ">
                  <Row>
                    <div class="small-tags ">
                      <span class="tag-btn">small</span>
                    </div>
                    <Col md="6" lg="6" xs="6">
                      <div className="car-data">
                        <h6>Toyota Aygo</h6>
                        <p>
                          or similar group B car{" "}
                          <span>
                            <img src={question} alt="" />
                          </span>
                        </p>
                      </div>
                    </Col>
                    <Col md="6" lg="6" xs="6">
                      <div className="car-price">
                        <p className="price">
                          € 24.<span className="font-small">23</span>
                        </p>
                        <p className="total-text">Total rental</p>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col md="6" lg="6" xs="6">
                      <div className="checkout-btn">
                        <a href="/checkout">
                          <button>Checkout</button>
                        </a>
                      </div>
                    </Col>
                    <Col md="6" lg="6" xs="6">
                      <div className="checkout-text">
                        <p className="pick-date">Pick-up Date</p>
                        <p className="date-txt">23 june , 12:00am</p>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col md="12" lg="12">
                      <p className="price-txt">Price Includes</p>
                      <div className="price-includes">
                        <p>
                          Vehicle Registration Fee{" "}
                          <img src={questionfill} alt="" />
                        </p>
                        <p>
                          Local Tax 
                          {/* <img src={questionfill}
                           alt="" /> */}
                        </p>
                        <p>
                          Unlimited Mileage <img src={questionfill} alt="" />
                        </p>
                        <p>
                          € 1000.00 Damage Excess{" "}
                          <img src={questionfill} alt="" />
                        </p>
                        <p>
                          € 1000.00 Theft Excess{" "}
                          <img src={questionfill} alt="" />
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col md="12" lg="12">
                      <p className="custom-txt">Not Included</p>
                      <p className="txt-para ">
                        You can also upgrade your rental options when you've
                        chosen your vehicle.
                      </p>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col md="12" lg="12">
                      <p className="txt-para py-3 mb-0">
                        We can’t guarantee the exact model you’ll get.
                      </p>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col>
                      <p className="custom-txt">Features</p>

                      <div className="car-specification">
                        <ul>
                          <li>
                            <img src={usericon} alt="" />5 Seats
                          </li>
                          <li>
                            <img src={bagicon} alt="" />2 Bags
                          </li>
                          <li>
                            <img src={dooricon} alt="" />5 Doors
                          </li>
                          <li>
                            <img src={manulicon} alt="" />
                            Manual
                          </li>
                          <li>
                            <img src={petrolicon} alt="" />
                            Petrol
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col lg="8" md="12">
                      <div className="checkout-btn">
                        <button>IMPORTANT INFORMATION</button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default FullView;
