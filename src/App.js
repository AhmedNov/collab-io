import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route, Link } from "react-router-dom";
import SignIn from "./components/page/SignIn";
import About from "./components/page/About";
import PreLoader from "./components/PreLoader";
import Error from "./components/page/Error";
import HomeLayout from "./HomeLayout";
import Blog from "./components/page/Blog";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;