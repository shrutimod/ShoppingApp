import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
  WhatsApp,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  ${mobile({ textAlign: "center" })}
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-style: italic;
  font-weight: 500;
`;

const SocialContainer = styled.div`
  display: flex;
  ${mobile({ marginLeft: "50px" })}
`;

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 15px;
  margin-left: 0px;
  cursor: pointer;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h2`
  margin-bottom: 30px;
  ${mobile({ textAlign: "center" })}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${mobile({ marginLeft: "30px" })}
`;

const Payment = styled.img`
  cursor: pointer;
  width: 50%;
  ${mobile({ marginLeft: "50px" })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>StyleKart.</Logo>
        <Desc>
          Welcome to StyleKart, your number one source for all products like:
          shoes, bags, clothes. We're dedicated to giving you the very best of
          service, with a focus on dependability, customer service and
          uniqueness.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="25D366">
            <WhatsApp />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Kids Section</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>T&C</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          675 Dixie Path, South Korea 985557
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +1 234 456 789
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@stylekart.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
