import axios from "axios";

// Method POST
const postData = async (data) => {

    await axios.post('http://localhost:3004/add-student-data', {

        calification: parseInt(data?.calification[0]),
        direction: data?.direction[0],
        email: data?.email[0],
        name: data?.name[0],
        phone_number: data?.phone_number[0],
        asignatura : data?.asignatura[0],
    });
}


// Method PUT
const putData = async (_id) => {
    await axios.put('http://localhost:3004/:id', )
}






export {postData, putData}