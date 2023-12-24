import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  UncontrolledDropdown,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
} from "reactstrap";
import logoImg from "../assets/img/header_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="page-header">
      <Container>
        <Navbar expand="md" className="navbar-custom p-0">
          <NavbarToggler onClick={() => setIsOpen(true)} />
          <Collapse
            isOpen={isOpen}
            navbar
            // tag="ul"
            className="nav main-menu justify-content-between"
          >
            <Nav>
              <NavItem>
                <Link className="nav-link" to="/aboutus">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Nav className="ml-auto">
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret >
                      <Link  to="/discover" style={{textDecoration: 'none', color: '#000'}}>
                      Discover Malta
                      </Link>
                      
                    </DropdownToggle>
                    {/* <DropdownMenu>
                      <DropdownItem
                        type="button"
                        className="dropdown-item"
                        href="/discover"
                      >
                        Dummy Link
                      </DropdownItem>
                    </DropdownMenu> */}
                  </UncontrolledDropdown>
                </Nav>
              </NavItem>
              <NavItem>
                <Nav className="ml-auto">
                  <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret >
                      <Link  to="/fleet" style={{textDecoration: 'none', color: '#000'}}>
                      Fleet
                      </Link>
                      
                    </DropdownToggle>
                    {/* <DropdownMenu>
                      <DropdownItem
                        type="button"
                        className="dropdown-item"
                        href="/"
                      >
                        Dummy Link
                      </DropdownItem>
                    </DropdownMenu> */}
                  </UncontrolledDropdown>
                </Nav>
              </NavItem>
            </Nav>
            <Nav>
              <NavItem className="nav-size">
                <Link to="/">
                  <img
                    // height={90}
                    src={logoImg}
                    alt="Car Rental"
                  />
                </Link>
              </NavItem>
            </Nav>
            <Nav>
              <NavItem>
                <Link className="nav-link" to="/longtermform">
                  Long-Term Rent
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contactus">
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link nav-btn" to="/contact">
                  Booking Now
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
