import Navbar from './components/Navbar';
import Form from './components/Form';
import Content from './components/Content';
import { useGetInfoStudents } from './hooks/useGetStudents'

function App() {

    const infoStudents = useGetInfoStudents();

    return (
      <div>
       {/* <Navbar />  */}
        {/* <Form /> */}
        <Content students={infoStudents}/>
      </div>
    )
  }

export default App
