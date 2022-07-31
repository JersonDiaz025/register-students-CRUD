import Navbar from './components/Navbar';
import Home from './components/Home';
import Content from './components/Content';
import Contact from './components/Contact';
import Form from './components/Form';
import Loader from './components/Loader';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import { getData } from './hooks/useGetData';

function App() {

    const { data, updateStudent } = getData();

    return (
      <BrowserRouter>
      <div className='dashboard-container'>
        <Navbar/>
        <div className='dashboard-body'>
        {data?.data? (
          <Routes>
              <Route path='/' exact element={<Home/>} />
              <Route path='/students' element={<Content data={data} updateStudent={updateStudent}/>} />
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/register' element={<Form updateStudent={updateStudent}/>}/>
              {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        ):<Loader/>}
        </div>
      </div>
      </BrowserRouter>
    )
  }

export default App
