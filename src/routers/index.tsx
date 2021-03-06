import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import Game from '../pages/Game';
import Home from '../pages/Home';
import Project from '../pages/Project';
import Projects from '../pages/Projects';

const Router: React.FC = () => (
    <BrowserRouter>
        <Navbar />
        <ScrollToTop />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<Project />} />
            <Route path="/game" element={<Game />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
