import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  height: 80%;
  max-height: 1000px;
  margin: auto;
  padding: 40px;
  background-color: #282c34;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
`;

const Title = styled.h1`
  color: #e0faff;
  margin-bottom: 20px;
  font-family: "Times New Roman", Times, serif;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  background-color: ${props => props.active ? '#e0faff' : '#3a3f4b'};
  color: ${props => props.active ? '#282c34' : '#e0faff'};
  border: none;
  padding: 15px 20px;
  margin: 0 5px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
`;

const SearchForm = styled.form`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: none;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
`;

const SearchButton = styled.button`
  background-color: #e0faff;
  color: #282c34;
  border: none;
  padding: 10px 20px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;
`;

const Post = styled.div`
  background-color: #3a3f4b;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
  color: #e0faff;
  width: 100%;
  max-width: 600px;
`;

const SubscribeButton = styled(Link)`
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

function FeedPage() {
  const [activeTab, setActiveTab] = useState('news');

  return (
    <FullScreenContainer>
      <ContentContainer>
        <Logo src={logo} alt="Company Logo" />
        <Title>News Feed</Title>
        <TabContainer>
          <Tab active={activeTab === 'news'} onClick={() => setActiveTab('news')}>News</Tab>
          <Tab active={activeTab === 'events'} onClick={() => setActiveTab('events')}>Events</Tab>
        </TabContainer>
        <SearchForm>
          <SearchInput type="search" placeholder="Search feeds..." />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
        {activeTab === 'news' && (
          <>
            <Post>
              <h3>Latest Industry News</h3>
              <p>Check out the latest developments in your field...</p>
            </Post>
            <Post>
              <h3>Technology Updates</h3>
              <p>New tools and frameworks released this week...</p>
            </Post>
          </>
        )}
        {activeTab === 'events' && (
          <>
            <Post>
              <h3>Networking Event</h3>
              <p>Join us for a virtual networking session next week...</p>
            </Post>
            <Post>
              <h3>Annual Conference</h3>
              <p>Registration open for our annual technology conference...</p>
            </Post>
          </>
        )}
        <SubscribeButton to="/subscribe">
          Subscribe to feeds
        </SubscribeButton>
      </ContentContainer>
    </FullScreenContainer>
  );
}

export default FeedPage;