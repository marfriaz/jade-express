import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Workspaces from "./pages/Workspaces.jsx";
import Events from "./pages/Events.jsx";
import Spaces from "./pages/Spaces.jsx";
import Space from "./pages/Space.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="workspaces" element={<Workspaces />} />
        <Route path="events" element={<Events />} />
        <Route path="spaces" element={<Spaces />} />
        <Route path="spaces/:slug" element={<Space />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
