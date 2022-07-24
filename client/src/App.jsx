import Navbar from './components/Navbar';
import Home from './components/Home';
import Content from './components/Content';
import Contact from './components/Contact';
import Form from './components/Form';
import { BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {


    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/students' element={<Content/>} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/register' element={<Form/>}/>
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
      
    )
  }

export default App
