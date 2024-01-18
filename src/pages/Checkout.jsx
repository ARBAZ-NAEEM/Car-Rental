import React, { useState } from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import bgImg from "../assets/img/img-backg-pages.png";
import Footer from "../components/Footer";
import line from "../assets/img/line-bg-golden.png";
import cardone from "../assets/img/Payment method icon-1.png";
import cardtwo from "../assets/img/Payment method icon-2.png";
import cardthree from "../assets/img/Payment method icon.png";
import apple from "../assets/img/ApplePay.png";
import paypal from "../assets/img/Payment method icon (1).png";
import secure from "../assets/img/Secure icon.png";
import imageCar from "../assets/img/modal-image-car.png";
import addImage from "../assets/img/ads-images.png";
import groupServices from "../assets/img/group-service.png";
import ticIcon from "../assets/img/tc-image.png";
import extraArrow from "../assets/img/extra-arrow.png";
import {
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Checkout = () => {
  const [showPayment1, setShowPayment1] = useState(false);
  const [showPayment2, setShowPayment2] = useState(false);
  const [showPayment3, setShowPayment3] = useState(false);
  const [formBackgroundColor, setFormBackgroundColor] = useState("#FFFFFF"); // Initial background color

  const handleCheckboxChange = (option) => {
    // Reset other payment options and toggle the selected one
    setShowPayment1(option === 1 ? true : false);
    setShowPayment2(option === 2 ? true : false);
    setShowPayment3(option === 3 ? true : false);

    setFormBackgroundColor(
      option === 1 || option === 2 || option === 3 ? "#F0F0F0" : "#FFFFFF"
    );
  };
  return (
    <>
      <div className="page-Checkout">
        <Header />
        <PageTitle heading="Checkout" bgImg={[bgImg]} gap="180px 0" />
        <div className="check-out-form py-5">
          <Container>
            <Row>
              <Col lg="12" md="12">
                <div className="checkout-text-heading mb-4">
                  <h3>
                    {" "}
                    Plan & <span className="procinig-txt">Pricing</span> Details
                  </h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="7" md="7">
                <div className="leftside-card mb-2">
                  <div className="card">
                    <div className="card-body">
                      <div className="form-data-section">
                        <h5 className="address-txt">Address</h5>
                        <img src={line} alt="" />
                        <p>Please enter your details to checkout </p>
                      </div>
                      <div className="contact-choice-section">
                        <Row>
                          <Col lg="6" md="6" xs="12">
                            <div className="form-group">
                              <Label>Full Name:</Label>
                              <Input placeholder="Full Name" />
                            </div>
                          </Col>
                          <Col lg="6" md="6" xs="12">
                            <div className="form-group">
                              <Label>
                                Email:<span className="text-danger">*</span>
                              </Label>
                              <Input placeholder="Enter Your Email" />
                            </div>
                          </Col>
                          {/* <Col lg="6" md="6" xs="12" className="mt-3">
                            <div className="form-group">
                              <Label>
                                Age:
                              </Label>
                              <Input placeholder="Enter Your Age" />
                            </div>
                          </Col>
                          <Col lg="6" md="6" xs="12" className="mt-3">
                            <div className="form-group">
                              <Label>
                                Flight Number
                              </Label>
                              <Input placeholder="Enter Your flight number" />
                            </div>
                          </Col> */}
                          <Col lg="12" md="12" xs="12" className="mt-3">
                            <div className="form-group">
                              <Label>
                                Street Address
                                <span className="text-danger">*</span>
                              </Label>
                              <Input placeholder="Write" />
                            </div>
                          </Col>
                          <Col lg="12" md="12" xs="12" className="mt-3">
                            <div className="form-group">
                              <Label>
                                Country<span className="text-danger">*</span>
                              </Label>
                              <Input placeholder="Write" />
                            </div>
                          </Col>
                          <Col lg="12" md="12" xs="12" className="mt-3">
                            <div className="form-group">
                              <Label>Enter Your Message</Label>
                              <Input placeholder="Enter your Messgae" />
                            </div>
                          </Col>

                          <Col lg="6" md="6" xs="12" className="mt-3">
                            <div className="form-group">
                              <Label>
                                City<span className="text-danger">*</span>
                              </Label>
                              <Input placeholder="City" />
                            </div>
                          </Col>
                          {/* <Col lg="6" md="6" xs="12" className="mt-3">
                            <div className="form-group">
                              <Label>
                                State
                              </Label>
                              <Input placeholder="State" />
                            </div>
                          </Col> */}

                          <Col lg="6" md="6" xs="12" className="mt-3">
                            <div className="form-group">
                              <Label>
                                Phone Number
                                <span className="text-danger">*</span>
                              </Label>
                              <Input placeholder="Phone Number" />
                            </div>
                          </Col>
                          <Col lg="6" md="6" xs="12" className="mt-3">
                            <div className="form-group">
                              <Label>
                                Zip Code<span className="text-danger">*</span>
                              </Label>
                              <Input placeholder="Zip Code" />
                            </div>
                          </Col>

                          <Col lg="6" md="6" xs="12" className="mt-3">
                            <div className="form-group">
                              <Label>Date</Label>
                              <Input placeholder="Date" />
                            </div>
                          </Col>
                          <Col lg="6" md="6" xs="12" className="mt-3">
                            <div className="form-group">
                              <Label>Pick</Label>
                              <Input placeholder="pick"  id="exampleFileOne"
       />
                            </div>
                          </Col>
                          <Col lg="6" md="6" xs="12" className="mt-3">
                            <div className="form-group">
                              <Label>Flight Number</Label>
                              <Input placeholder="Flight Number"   id="exampleFileOne"
       />
                            </div>
                          </Col>

                          <Col lg="12" md="12" xs="12" className="mt-3">
                            <div className="form-group">
                              <Label>ID card</Label>
                              <Input placeholder="ID card" 
                               id="exampleFileTwo"
                               name="file"
                               type="file" />
                            </div>
                          </Col>
                          

                          <Col lg="12" md="12" xs="12" className="mt-3">
                            <div className="form-group">
                              <Label>Driving license</Label>
                              <Input placeholder="driving license"   
                              name="file"
                              type="file" />
                            </div>
                          </Col>
                          <Col lg="12" md="12" xs="12" className="mt-3">
                            <FormGroup check>
                              <Input type="checkbox" />{" "}
                              <Label check>
                              Deposit is € 400
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col lg="12" md="12" xs="12" className="mt-3">
                            <FormGroup check>
                              <Input type="checkbox" />{" "}
                              <Label check>
                                Save as default ship-to address
                              </Label>
                            </FormGroup>
                          </Col>


                       

                          <Col lg="12" md="12" xs="12" className="mt-3">
                            <FormGroup check>
                              <Input type="checkbox" />{" "}
                              <Label check>
                                I agree with iShopping{" "}
                                <span className="bold-color-change">
                                  Terms of Use
                                </span>{" "}
                                and{" "}
                                <span className="bold-color-change">
                                  Privacy Policy.
                                </span>
                              </Label>
                            </FormGroup>
                          </Col>

                          <Col lg="12" className="mt-3">
                            <Button
                              className="btn-contact-info"
                              color="primary"
                            >
                              Save and Contiune
                            </Button>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="12" md="12">
                            <div className="paymentheading">
                              <p>Payment</p>
                            </div>
                          </Col>
                          <Col lg="12" md="12">
                            <div className="colo-bg-change">
                              <div
                                className={`check-payment ${
                                  showPayment1 ? "selected" : ""
                                }`}
                                style={{
                                  backgroundColor: showPayment1
                                    ? formBackgroundColor
                                    : "",
                                  padding: "20px",
                                }}
                              >
                                <Row>
                                  <Col md="7" lg="7" xs="6">
                                    <label>
                                      <input
                                        type="checkbox"
                                        checked={showPayment1}
                                        onChange={() => handleCheckboxChange(1)}
                                      />
                                      Pay with Credit Card
                                    </label>
                                  </Col>
                                  <Col md="5" lg="5" xs="6">
                                    <div className="image-section">
                                      <span>
                                        <img src={cardone} alt="" />
                                      </span>

                                      <span>
                                        <img src={cardthree} alt="" />
                                      </span>
                                      <span>
                                        <img src={cardtwo} alt="" />
                                      </span>
                                    </div>
                                  </Col>
                                </Row>

                                {showPayment1 && (
                                  <div className="payment-data">
                                    <Row className="mt-2">
                                      <Col md="9" lg="9" xs="12">
                                        <div className="form-group">
                                          <Label>Name on card</Label>
                                          <Input placeholder="Olivia Rhye" />
                                        </div>
                                      </Col>
                                      <Col md="3" lg="3" xs="12">
                                        <div className="form-group">
                                          <Label>Expiry</Label>
                                          <Input placeholder="06 / 2024" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row className="mt-2">
                                      <Col md="9" lg="9" xs="12">
                                        <div className="form-group">
                                          <Label>Card number </Label>
                                          <Input placeholder="1234 1234 1234 1234" />
                                        </div>
                                      </Col>
                                      <Col md="3" lg="3" xs="12">
                                        <div className="form-group">
                                          <Label>CVV</Label>
                                          <Input placeholder="•••" />
                                        </div>
                                      </Col>
                                    </Row>
                                  </div>
                                )}
                              </div>
                              <div
                                className={`check-payment ${
                                  showPayment2 ? "selected" : ""
                                }`}
                                style={{
                                  backgroundColor: showPayment2
                                    ? formBackgroundColor
                                    : "",
                                  padding: "20px",
                                }}
                              >
                                <Row>
                                  <Col md="10" lg="10" xs="9">
                                    <label>
                                      <input
                                        type="checkbox"
                                        checked={showPayment2}
                                        onChange={() => handleCheckboxChange(2)}
                                      />
                                      Apple Pay
                                    </label>
                                    <p>
                                      Unlimited users and unlimited individual
                                      data.
                                    </p>
                                  </Col>
                                  <Col md="2" lg="2" xs="3">
                                    <div class="image-section">
                                      <span>
                                        <img src={apple} alt="" />
                                      </span>
                                    </div>
                                  </Col>
                                </Row>
                                {showPayment2 && (
                                  <div>
                                    {/* Payment details for option 2 */}
                                    <p>Payment details for Option 2</p>
                                  </div>
                                )}
                              </div>
                              <div
                                className={`check-payment ${
                                  showPayment3 ? "selected" : ""
                                }`}
                                style={{
                                  backgroundColor: showPayment3
                                    ? formBackgroundColor
                                    : "",
                                  padding: "20px",
                                }}
                              >
                                <Row>
                                  <Col md="10" lg="10" xs="9">
                                    <label>
                                      <input
                                        type="checkbox"
                                        checked={showPayment3}
                                        onChange={() => handleCheckboxChange(3)}
                                      />
                                      Paypal
                                    </label>
                                    <p>
                                      You will be redirected to the PayPal
                                      website after submitting your order
                                    </p>
                                  </Col>
                                  <Col md="2" lg="2" xs="3">
                                    <div class="image-section">
                                      <span>
                                        <img src={paypal} alt="" />
                                      </span>
                                    </div>
                                  </Col>
                                </Row>
                                {showPayment3 && (
                                  <div>
                                    {/* Payment details for option 3 */}
                                    <p>Payment details for Option 3</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="12" md="12">
                            <div className="text-lock">
                              <span>
                                <p>
                                  {" "}
                                  <img src={secure} alt="" /> We protect your
                                  payment information using encryption to
                                  provide bank-level security.
                                </p>
                              </span>
                            </div>
                          </Col>
                          <Col lg="12" md="12" xs="12" className="mt-3">
                            <FormGroup check>
                              <Input type="checkbox" />{" "}
                              <Label check>
                                I agree with iShopping{" "}
                                <span className="bold-color-change">
                                  Terms of Use
                                </span>{" "}
                                and{" "}
                                <span className="bold-color-change">
                                  Privacy Policy.
                                </span>
                              </Label>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col lg="12" md="12">
                            <div className="refundabletext">
                              <p>
                                <b>Refundable deposit</b>
                              </p>
                              <p>
                                An additional €300 security deposit will be
                                added to your card at the pickup counter and
                                refunded within a few days of the vehicle's
                                return.
                              </p>
                            </div>
                          </Col>
                        </Row>
                        <Col lg="12" md="12" xs="12" className="mt-3">
                          <FormGroup check>
                            <Input type="checkbox" />{" "}
                            <Label check>
                              I have read and accept the rental information,{" "}
                              <span className="bold-color-change">
                                the terms and conditions,
                              </span>{" "}
                              and the{" "}
                              <span className="bold-color-change">
                                privacy policy,
                              </span>{" "}
                              and I acknowledge that I'm booking a prepaid rate,
                              where the total rental price is immediately
                              charged to the credit or debit card I provided.
                            </Label>
                          </FormGroup>
                        </Col>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="5" md="5" xs="12">
                <div className="rightside-card">
                  <div className="card">
                    <div className="card-body">
                      <Row>
                        <Col md="12" lg="12" xs="12">
                          <p className="order-summry">Order Summary</p>
                        </Col>
                      </Row>

                      <Row className="mt-3">
                        <Col md="6" lg="6" xs="6">
                          <div className="righttext-left">
                            <p className="discount-txt">Discount</p>
                          </div>
                        </Col>
                        <Col md="6" lg="6" xs="6">
                          <div className="righttext-right">
                            <p className="discount-price">$31.9</p>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="6" lg="6" xs="6">
                          <div className="righttext-left">
                            <p className="coupon-txt">Coupon Applied</p>
                          </div>
                        </Col>
                        <Col md="6" lg="6" xs="6">
                          <div className="righttext-right">
                            <p className="coupon-price">$0.00</p>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg="12" md="12" xs="12">
                          <div className="coupon-field">
                            <div className="form-group">
                              <Input placeholder="Coupon Code" />
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <hr />

                      <Row>
                        <Col md="6" lg="6" xs="6">
                          <div className="righttext-left">
                            <p>Pickup Date</p>
                            <p>Drop Off Date</p>
                            <p>Final Price</p>
                          </div>
                        </Col>
                        <Col md="6" lg="6" xs="6">
                          <div className="righttext-right">
                            <p>23-JULY-2023</p>
                            <p>25-JULY-2023</p>
                            <p>$288.08</p>
                          </div>
                        </Col>
                      </Row>

                      <hr />
                      <Row>
                        <Col md="6" lg="6" xs="6">
                          <div className="righttext-left ">
                            <p className="toyota-txt">
                              <b>Toyota Aygo</b>
                            </p>
                            <p className="toyota-txt-p">
                              or similar group B car
                            </p>
                          </div>
                        </Col>
                        <Col md="6" lg="6" xs="6">
                          <div className="righttext-right">
                            <p className="toyota-price">$288.08</p>
                            <p className="toyota-txt-small">Total Price</p>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12" md="12">
                          <div className="lastImage">
                            <img src={imageCar} alt="" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>

                  <div className="ads-section mt-5">
                    <Row>
                      <Col md="12" lg="12">
                        <div className="ads-text">
                          <h5>Ads</h5>
                        </div>
                        <div className="ads-image">
                          <img src={addImage} alt="" />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <section className="mt-3 mb-5 airport-section">
          <Container>
            <Row className="align-items-center servc-row1">
              <Col md="6" lg="6" xs="12">
                <div className="servs-img">
                  <img src={groupServices} alt="" style={{ width: "100%" }} />
                </div>
              </Col>
              <Col md="6" lg="6" xs="12">
                <div className="service-about-content">
                  <h2 data-aos="fade-up">
                    <span>Extra</span> Services
                  </h2>
                  <div className="servicesPoint-text">
                    <ul>
                      <li>
                        <p>
                          <img src={ticIcon} alt="" /> Stringent Quality Check
                        </p>{" "}
                      </li>
                      <li>
                        <p>
                          <img src={ticIcon} alt="" /> Always On-Time
                        </p>{" "}
                      </li>
                      <li>
                        <p>
                          <img src={ticIcon} alt="" /> Affordable Pricing
                        </p>{" "}
                      </li>
                      <li>
                        <p>
                          <img src={ticIcon} alt="" /> Punctual & Reliable
                        </p>{" "}
                      </li>
                      <li>
                        <p>
                          <img src={ticIcon} alt="" /> Stringent Quality Check
                        </p>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row className="mt-5 mb-5">
              <Col md="6" lg="6">
                <div className="airportPick-section">
                  <div className="airportText">
                    <h3 data-aos="fade-up">Airport pickup</h3>
                    <p>
                      Search Flights & Places Hire to our most popular <br />
                      destinations
                    </p>
                    <div className="extra-btn">
                      <button>
                        <img src={extraArrow} alt="" />
                        EXTRA
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="6">
                <div className="airportDrop-section">
                  <div className="airportText">
                    <h3 data-aos="fade-up">Airport Drop off</h3>
                    <p>
                      Search hotels & Places Hire to our most popular <br />
                      destinations
                    </p>
                    <div className="extra-btn">
                      <button>
                        <img src={extraArrow} alt="" />
                        EXTRA
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="mb-5">
          <div className="confirm-section">
            <Row>
              <Col md="6" lg="6" xs="12">
                <div className="confirm-text" data-aos="fade-up">
                  <h3>Confirm All Reservation</h3>
                  <h3>Dream Business Today!</h3>
                </div>
              </Col>
              <Col
                md="6"
                lg="6"
                xs="12"
                className="d-flex justify-content-end align-items-center"
              >
                <div className="processd-btn">
                  <button>Proceed to payment</button>
                  <span className="arrow-image"></span>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
