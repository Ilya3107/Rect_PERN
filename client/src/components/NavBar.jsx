import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";

import { setIsAuth } from "../store/slices/UserSlice";

const NavBar = () => {
  const isAuth = useSelector((state) => state.user._isAuth.payload);
  const dispatch = useDispatch();
  console.log(isAuth);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Link style={{ color: "white" }} to={SHOP_ROUTE}>
          LOGO
        </Link>
        {isAuth ? (
          <Nav className="ml-auto">
            <Button variant="light" className="mx-3">
              Админ Панель
            </Button>
            <Button variant="light" onClick={() => dispatch(setIsAuth(false))}>
              Войти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button variant="light" onClick={() => dispatch(setIsAuth(true))}>
              Авториция
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
