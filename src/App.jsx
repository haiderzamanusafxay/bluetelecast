import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import JobForm from "./pages/JobForm.jsx";
import Contact from "./pages/Contact.jsx";
import FAQs from "./pages/FAQs.jsx";
import Team from "./pages/Team.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import ContentNotFound from "./pages/ContentNotFound.jsx";
import Technologies from "./pages/Technologies.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/job-form" element={<JobForm />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/content-not-found" element={<ContentNotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
