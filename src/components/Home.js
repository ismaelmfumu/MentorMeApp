import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../MentorMeLogo.png';

const FullScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e0faff;
`;

const Logo = styled.img`
  width: 300px; // Adjust size as needed
  height: auto;
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  height: 60%;
  max-height: 1000px;
  margin: auto;
  padding: 40px;
  background-color: #282c34;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  color: #e0faff;
  margin-bottom: 20px;
  font-family: "Times New Roman", Times, serif;
`;

const StyledLink = styled(Link)`
  padding: 15px;
  font-size: 18px;
  color: black;
  background-color: #e0faff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  margin: 10px 0;
  width: calc(100% - 30px);
  text-align: center;

  &:hover {
    background-color: #21a1c9;
    transition: background-color .3s ease;
  }
`;

function Home() {
  return (
    <FullScreenContainer>
      <ContentContainer>
      <Logo src={logo} alt="Company Logo" />
        <Title>Welcome</Title>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/homepage">HomePage (for DEV (ISH) only )</StyledLink>
      </ContentContainer>

    </FullScreenContainer>
  );
}

export default Home;