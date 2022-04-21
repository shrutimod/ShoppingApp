import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 30%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  ${"" /* flex-wrap: wrap; */}
`;

const Input = styled.input`
  min-width: 40%;
  margin: 20px 20px 0px 0px;
  padding: 8px;
  border: 1px solid black;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 30%;
  border: none;
  padding: 10px 10px;
  cursor: pointer;
  background-color: teal;
  color: white;
  font-size: 15px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE NEW ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Register</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
