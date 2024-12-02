// src/theme.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FullScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e0faff;
`;

export const Logo = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  height: 80%;
  max-height: 1000px;
  margin: auto;
  padding: 40px;
  background-color: #282c34;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
`;

export const Title = styled.h1`
  color: #e0faff;
  margin-bottom: 20px;
  font-family: "Times New Roman", Times, serif;
`;

export const StyledButton = styled(Link)`
  display: block;
  background-color: #e0faff;
  color: #282c34;
  text-align: center;
  padding: 15px;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 20px;
  font-size: 18px;
  width: 100%;
  max-width: 600px;

  &:hover {
    background-color: #21a1c9;
    transition: background-color .3s ease;
  }
`;

export const colors = {
  background: '#e0faff',
  primary: '#282c34',
  secondary: '#3a3f4b',
  text: '#e0faff',
  accent: '#21a1c9',
};