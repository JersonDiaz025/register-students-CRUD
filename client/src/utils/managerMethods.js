import axios from "axios";

const BASE_URL = 'http://localhost:3004'

// Method POST
const postData = async (data) => {
    try {
        await axios.post(`${BASE_URL}/add-student-data`, {

            calification: parseInt(data?.calification[0]),
            direction: data?.direction[0],
            email: data?.email[0],
            name: data?.name[0],
            phone_number: data?.phone_number[0],
            asignatura : data?.asignatura[0],
        });
    } catch (err) {
        console.log(err)
    }
}


// Method PUT
// const putData = async (_id) => {
//     await axios.put('http://localhost:3004/:id', )
// }



// method delete
const deleteInfo = async (_id) => {
    try {
        await axios.delete(`${BASE_URL}/delete-students/${_id}`);

    } catch (err) {
        console.log(err)
    }
}


export {postData, deleteInfo}