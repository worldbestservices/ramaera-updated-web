// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Navbar />
//       <App />
//       <Footer />
//     </BrowserRouter>
//   </React.StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const RootLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName="toast-container"
        containerStyle={{
          top: 80,
          right: 20,
          zIndex: 99999,
        }}
        toastOptions={{
          duration: 5000,
          style: {
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(255, 255, 255, 0.05))',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '16px',
            padding: '16px',
            fontSize: '15px',
            fontWeight: '500',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            maxWidth: '450px',
            fontFamily: 'Orbitron, monospace',
          },
          success: {
            style: {
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9))',
              color: '#ffffff',
              border: '1px solid rgba(16, 185, 129, 0.5)',
              boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)',
            },
            iconTheme: {
              primary: '#ffffff',
              secondary: '#10b981',
            },
          },
          error: {
            style: {
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.9), rgba(220, 38, 38, 0.9))',
              color: '#ffffff',
              border: '1px solid rgba(239, 68, 68, 0.5)',
              boxShadow: '0 0 30px rgba(239, 68, 68, 0.3)',
            },
            iconTheme: {
              primary: '#ffffff',
              secondary: '#ef4444',
            },
          },
          loading: {
            style: {
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.9))',
              color: '#ffffff',
              border: '1px solid rgba(59, 130, 246, 0.5)',
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
            },
          },
        }}
      />
      {!isAdminRoute && <Navbar />}
      <App />
      {!isAdminRoute && <Footer />}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RootLayout />
    </BrowserRouter>
  </React.StrictMode>
);
