import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { logout, update } from "../../redux/actions/auth";
import "./profile.css";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { useState } from "react";
import AccountInfo from "./accountInfo";
import Address from "./address";
function mapStateToProps(state) {
  const { user } = state.user;
  return {
    user,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: "LOGOUT" }),
    update: (id, newUserInfo) => dispatch(update(id, newUserInfo)),
  };
};

const Profile = (props) => {
  const { user: currentUser, accessToken: accessToken } = props.user;
  const [section, setSection] = useState("info");

  if (!props.user) {
    return <Redirect to="/login" />;
  }

  console.log(currentUser);

  const handelLogout = () => {
    props.logout();
    props.history.push("/login");
  };

  return (
    <>
      <div className="profileDiv">
        <h1>
          Hello {currentUser.first_name} {currentUser.last_name}!
        </h1>
        <Navbar className="profileNav">
          <Container fluid>
            <Nav className="mt-3">
              <Nav.Link
                className="itemSpace"
                onClick={() => setSection("info")}
              >
                ACCOUNT INFORMATION
              </Nav.Link>
              <Nav.Link
                className="itemSpace"
                onClick={() => setSection("address")}
              >
                ADDRESSES
              </Nav.Link>
              <Nav.Link
                className="itemSpace"
                onClick={() => setSection("order")}
              >
                YOUR ORDERS
              </Nav.Link>
              <Nav.Link className="itemSpace" onClick={handelLogout}>
                LOGOUT
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {section === "info" ? (
          <AccountInfo currentUser={currentUser} />
        ) : section === "order" ? (
          <h1> order</h1>
        ) : (
          <Address user={currentUser} />
        )}
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
