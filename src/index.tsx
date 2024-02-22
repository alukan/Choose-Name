import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/MainApp';
import { StateProvider } from './StateContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from './pages/Settings';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StateProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/settings" element={<Settings />} />
          {/*<Route path="*" element={<NoPage />} />*/}
      </Routes>
    </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
