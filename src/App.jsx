import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Spaces from "./pages/Spaces.jsx";
import Space from "./pages/Space.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="spaces" element={<Spaces />} />
        <Route path="spaces/:slug" element={<Space />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
