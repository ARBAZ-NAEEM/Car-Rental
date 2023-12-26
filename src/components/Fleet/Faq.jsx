import React from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
  UncontrolledAccordion,
} from "reactstrap";

const Faq = () => {
  return (
    <div className="faqs-section">
      <Container>
        <div className="faqs-heading">
          <h3>FAQ</h3>
        </div>
        <UncontrolledAccordion defaultOpen="1">
          <AccordionItem>
            <AccordionHeader targetId="1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod?
            </AccordionHeader>
            <AccordionBody accordionId="1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod?
            </AccordionHeader>
            <AccordionBody accordionId="2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod?
            </AccordionHeader>
            <AccordionBody accordionId="3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod?
            </AccordionHeader>
            <AccordionBody accordionId="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod?
            </AccordionHeader>
            <AccordionBody accordionId="5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod?
            </AccordionHeader>
            <AccordionBody accordionId="6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AccordionBody>
          </AccordionItem>
        </UncontrolledAccordion>
      </Container>
    </div>
  );
};

export default Faq;
