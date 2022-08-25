import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import Game from '../pages/Game';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Project from '../pages/Project';
import Projects from '../pages/Projects';

const Router: React.FC = () => (
    <BrowserRouter>
        <Navbar />
        <ScrollToTop />

        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:slug" element={<Project />} />
                <Route path="game" element={<Game />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;
