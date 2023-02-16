import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle, theme } from "./global-styles";
import { ThemeProvider } from "styled-components";
import { LandPage } from './components/pages/landpage/LandPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/home/home';
import { ReadingTracker } from './components/pages/reading-tracker/reading-tracker';
import { Notes } from './components/pages/notes/notes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reading-tracker" element={<ReadingTracker/>} />
        <Route path="/notes" element={<Notes/>} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>
  </React.StrictMode>
);
