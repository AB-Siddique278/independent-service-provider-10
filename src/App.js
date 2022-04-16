import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Blog from './Blog';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import SignUp from './SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<NotFound />} />
      </Routes>


    </div>
  );
}

export default App;
