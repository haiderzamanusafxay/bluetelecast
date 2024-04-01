import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import FAQs from "./pages/FAQs.jsx";
import Team from "./pages/Team.jsx";
import NotFound from "./pages/NotFound.jsx";
import Services from "./pages/Services.jsx";
import ContentNotFound from "./pages/ContentNotFound.jsx";
import Technologies from "./pages/Technologies.jsx";
import Careers from "./pages/Careers.jsx";
import OurCampany from "./pages/OurCompany.jsx";
import Testimonals from "./pages/Testimonals.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/our-company" element={<OurCampany />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/testimonals" element={<Testimonals />} />
          <Route path="/content-not-found" element={<ContentNotFound />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
