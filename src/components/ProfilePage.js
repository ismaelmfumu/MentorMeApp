import React from 'react';
import styled from 'styled-components';


const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
`;

const ProfileContent = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 40px;
  background-color: #282c34;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
`;

const Title = styled.h2`
  color: #61dafb;
  margin-bottom: 20px;
  text-align: center;
`;

const ProfileInfo = styled.div`
  color: white;
  font-size: 16px;
  margin-bottom: 15px;
`;

function ProfilePage() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <Title>User Profile</Title>
        <ProfileInfo>Name: John Doe</ProfileInfo>
        <ProfileInfo>Email: john@example.com</ProfileInfo>
        <ProfileInfo>Bio: Professional software developer</ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  );
}

export default ProfilePage;