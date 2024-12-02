import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import ProfilePage from './components/ProfilePage';
import FeedPage from './components/FeedPage';
import ConnectionsPage from './components/ConnectionsPage';
import MessagingPage from './components/MessagingPage';
import ContentCreationPage from './components/ContentCreationPage';
import GroupsPage from './components/GroupsPage';
import NotificationsPage from './components/NotificationsPage';
import LearningPage from './components/LearningPage';
import SettingsPage from './components/SettingsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<HomePage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/connections" element={<ConnectionsPage />} />
        <Route path="/messages" element={<MessagingPage />} />
        <Route path="/create-content" element={<ContentCreationPage />} />
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;