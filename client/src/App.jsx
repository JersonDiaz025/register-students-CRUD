import Navbar from './components/Navbar';
import Home from './components/Home';
import Content from './components/Content';
import Contact from './components/Contact';
import Form from './components/Form';
import ModalEdit from './components/ModalEdit';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import { getInfoStudents } from './utils/managerMethods';
import {useState, useEffect} from 'react';

function App() {

  const [students, setStudent] = useState();

  useEffect(() => {
    updateStudent()
  },[])

  const updateStudent = async() => {
    getInfoStudents()
    .then(response => setStudent(response))
  }


    return (
      <BrowserRouter>
        <Navbar/>
        {/* <ModalEdit text_title={"Update Information"} text_button={"Update"}/> */}
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/students' element={<Content students={students} updateStudent={updateStudent}/>} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/register' element={<Form updateStudent={updateStudent}/>}/>
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    )
  }

export default App
