import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const FullScreenContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f0f0f0;
    padding: 20px;
`;

const FormContainer = styled.div`
    width: 100%;
    max-width: 600px;
    align-items: center;

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

const Form = styled.form`
    display: grid;
    gap: 15px;
`;

const Input = styled.input`
    padding: 15px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ddd;
    align-items: center;

    width: 100%;
`;

const TextArea = styled.textarea`
    padding: 15px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ddd;
    width: 100%;
    align-items: center;

    height: 100px;
`;

const Select = styled.select`
    padding: 15px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ddd;
    width: 100%;
`;

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Button = styled.button`
    padding: 15px;
    font-size: 18px;
    color: white;
    background-color: #61dafb;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #21a1c9;
        transition: .3s ease;
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;

const ErrorMessage = styled.p`
    color: #ff6b6b;
    font-size: 14px;
    margin-top: 5px;
`;

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        dateOfBirth: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        gender: '',
        bio: '',
        interests: [],
        agreeTerms: false,
        subscribeNewsletter: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateForm = () => {
        let newErrors = {};

        // Username validation
        if (!formData.username) newErrors.username = "Username is required";

        // Email validation
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long";
        }

        // Confirm password validation
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        // Terms agreement validation
        if (!formData.agreeTerms) {
            newErrors.agreeTerms = "You must agree to the terms and conditions";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                await axios.post('http://localhost:3001/users', formData);
                alert('Registration successful');
                // Reset form or redirect user
            } catch (error) {
                console.error('Registration error:', error);
                setErrors({ submit: "Registration failed. Please try again." });
            }
        }
    };

    return (
        <FullScreenContainer>
            <FormContainer>
                <Title>Register</Title>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username*"
                        required
                    />
                    {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}

                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email*"
                        required
                    />
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

                    <Input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password*"
                        required
                    />
                    {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

                    <Input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password*"
                        required
                    />
                    {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}

                    <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name*"
                        required
                    />

                    <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name*"
                        required
                    />

                    <Input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                    />

                    <Input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />

                    <Input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Street Address"
                    />

                    <Input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                    />

                    <Input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State/Province"
                    />

                    <Input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        placeholder="Zip/Postal Code"
                    />

                    <Input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Country"
                    />

                    <Select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer_not_to_say">Prefer not to say</option>
                    </Select>

                    <TextArea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder="Bio/Description"
                    />

                    <CheckboxContainer>
                        <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            required
                        />
                        <label>I agree to the Terms and Conditions*</label>
                    </CheckboxContainer>
                    {errors.agreeTerms && <ErrorMessage>{errors.agreeTerms}</ErrorMessage>}

                    <CheckboxContainer>
                        <input
                            type="checkbox"
                            name="subscribeNewsletter"
                            checked={formData.subscribeNewsletter}
                            onChange={handleChange}
                        />
                        <label>Subscribe to newsletter</label>
                    </CheckboxContainer>

                    <Button type="submit" disabled={!formData.agreeTerms}>Register</Button>
                    {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}
                </Form>
            </FormContainer>
        </FullScreenContainer>
    );
}

export default Register;