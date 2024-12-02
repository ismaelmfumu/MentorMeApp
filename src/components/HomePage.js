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
  width: 300px;
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
  height: 50%;
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

const NavMenu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
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
  text-align: center;
  width: calc(33% - 20px);

  &:hover {
    background-color: #21a1c9;
    transition: background-color .3s ease;
  }
`;

const SettingsButton = styled(StyledLink)`
  color: #e0faff; /* Background color */
  background-color: black; /* Font color */
`;

function HomePage() {
  return (
    <FullScreenContainer>
      <ContentContainer>
        <Logo src={logo} alt="Company Logo" />
        <Title>Welcome to Your Professional Network</Title>
        <NavMenu>
          <StyledLink to="/profile">Profile</StyledLink>
          <StyledLink to="/feed">News Feed</StyledLink>
          <StyledLink to="/connections">Connections</StyledLink>
          <StyledLink to="/messages">Messages</StyledLink>
          <StyledLink to="/create-content">Create Content</StyledLink>
          <StyledLink to="/groups">Groups</StyledLink>
          <StyledLink to="/notifications">Notifications</StyledLink>
          <StyledLink to="/learning">Learning</StyledLink>
          
          <SettingsButton to="/settings">Settings</SettingsButton>
        </NavMenu>
      </ContentContainer>
    </FullScreenContainer>
  );
}

export default HomePage;