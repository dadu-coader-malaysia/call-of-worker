
import PrivetRoutes from './components/PrivetRoutes'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Posts from './pages/Posts'
import Services from './pages/Services'
import Navbar from './navigation/Navbar'
import NewPost from './pages/NewPost'
import Workers from './pages/Workers'
import Error from './pages/Error'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import AddProfile from './components/AddProfile'
import Registration from './pages/Registration'
import Admin from './admin/Admin'
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={ <PrivetRoutes><Posts /></PrivetRoutes>} />
          <Route path="/services" element={ <Services />} />
          <Route path="/newpost" element={<PrivetRoutes><NewPost /></PrivetRoutes>} />
        
        <Route path="/workers" element={ <PrivetRoutes><Workers /></PrivetRoutes>} />
        <Route path="/findjob" element={<PrivetRoutes><Posts /></PrivetRoutes>} />
        <Route path="/newpost" element={<PrivetRoutes><NewPost /></PrivetRoutes>} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={ <PrivetRoutes><Profile /></PrivetRoutes>} />
        <Route path="/addprofile" element={<PrivetRoutes><AddProfile /></PrivetRoutes>} />
        <Route path="/admin" element={<Admin />} />

        <Route path="*" element={<Error />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}