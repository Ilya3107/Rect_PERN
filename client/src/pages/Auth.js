import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Link, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import Button from "react-bootstrap/Button";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location);
  console.log(isLogin);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Введите email..." />
          <Form.Control className="mt-3" placeholder="Введите пароль..." />
          <Form.Group className="d-flex justify-content-between mt-3 ">
            {isLogin ? (
              <div>
                Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Регистрация</Link>
              </div>
            ) : (
              <div>
                Есть аккаунт? <Link to={LOGIN_ROUTE}>Авторизация</Link>
              </div>
            )}

            <Button variant="outline-success">
              {isLogin ? "Войти" : "Зарегистрироваться"}
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
