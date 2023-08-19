import React from "react";
import { useState } from "react";
import Navigation from "../components/Navigation";
import NavTabs from "../components/NavTabs";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

const Contact = () => {
  const [currentPage, setCurrentPage] = useState("contact");

  return (
    <div>
      {/* <main>{<Contact> </Contact>}</main> */}
      <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <MDBContainer className="pt-4">
          <section className="mb-4">
            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="https://stackoverflow.com/users/22415886/that-dude713"
              role="button"
            >
              <MDBIcon fab className="fa-stack-overflow" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="https://www.instagram.com/that.dude713/"
              role="button"
            >
              <MDBIcon fab className="fa-instagram" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="https://www.linkedin.com/in/kelvin-easiley-jr-58a34712/"
              role="button"
            >
              <MDBIcon fab className="fa-linkedin" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="https://github.com/That-Dude13"
              role="button"
            >
              <MDBIcon fab className="fa-github" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Contact;
