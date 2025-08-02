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
      {!isAdminRoute && <Navbar />}
      <App />
      {!isAdminRoute && <Footer />}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Toaster
      position="top-right"
      reverseOrder={false}
      containerStyle={{
        marginTop: '100px',
        marginRight: '2rem',
      }}
    /> */}
      <RootLayout />
    </BrowserRouter>
  </React.StrictMode>
);
