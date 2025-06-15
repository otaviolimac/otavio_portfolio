import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeroSection from './pages/HeroSection';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Projects from './pages/Projects';
import Networks from './pages/Networks';
import Course from './pages/Course';
import Tech from './pages/Tech';
import Costs from './pages/Costs';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/networks" element={<Networks />} />
        <Route path='/blogs/courses' element={<Course />}/>
        <Route path='/blogs/tech' element={<Tech />}/>
        <Route path='/projects/costs' element={<Costs />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;