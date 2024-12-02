import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FullScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: auto;
  padding: 40px;
  background-color: #282c34;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
  color: #61dafb;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 15px;
  font-size: 18px;
  border-radius: 4px;
  border: none; 
  width: calc(100% - 30px);
`;

const Button = styled.button`
  padding: 15px;
  font-size: 18px;
  color: white; 
  background-color: #61dafb; 
  border: none; 
  border-radius: 4px; 
  cursor: pointer;
  width: calc(100% - 30px);
  margin-bottom: 10px;
  align-items: center;

  &:hover {
    background-color: #21a1c9; 
    transition: background-color .3s ease; 
  }
`;

const BackButton = styled(Button)`
  background-color: #6c757d;
  
  &:hover {
    background-color: #5a6268;
  }
`;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3001/users?email=${email}&password=${password}`);
            if (response.data.length > 0) {
                alert('Login successful');
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <FullScreenContainer>
            <FormContainer>
                <Title>Login</Title>
                <form onSubmit={handleLogin}>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    <Button type="submit">Login</Button>
                </form>
                <BackButton onClick={handleBack}>Back to Home</BackButton>
            </FormContainer>
        </FullScreenContainer>
    );
}

export default Login;