import React from "react";
import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 50vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "50px" })}
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
  ${mobile({ margin: "0px 20px 10px" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  padding-left: 10px;
  ${mobile({ width: "70%" })}
`;

const Input = styled.input`
  border: none;
  flex: 10;
`;

const Button = styled.button`
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates for your favourite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
