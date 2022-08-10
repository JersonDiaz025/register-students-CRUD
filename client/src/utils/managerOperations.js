import axios from "axios";

const BASE_URL = 'http://localhost:3000/'

// get data students
const getInfoStudents = async () => {
    try {
        const response = await axios.get(`${BASE_URL}all-students`)
        const { data } = response;
        if (data.response === 'success') {
            return response.data
        } else {
            console.log('Error getting data');
        }
    } catch (err) {
        console.log(err)
    }

}

// Method POST
const postData = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}add-student-data`, {

            calification: parseInt(data.calification[0]),
            direction: data.direction[0],
            email: data.email[0],
            name: data.name[0],
            phone_number: data.phone_number[0],
            asignatura: data.asignatura[0],
        });
        return response

    } catch (err) {
        console.log(err)
    }
}

const postDataRegister = async (dataLogin) => {
    const { email, password } = dataLogin;
    try {
        const response = await axios.post(`${BASE_URL}sign-up`, {
            email: email,
            password: password
        });

        return response;
    } catch (err) {
        console.log(err);
    }
}

// Method PUT
const putData = async (dataUpdated) => {
    const { id, name, calification, phone_number, email, direction, asignatura } = dataUpdated;
    try {
        const response = await axios.put(`${BASE_URL}update-students/${id}`, {
            calification,
            direction,
            email,
            name,
            phone_number,
            asignatura,
        });
        return response
    } catch (err) {
        console.log(err)
    }
}

// method delete
const deleteInfo = async (_id) => {
    try {
        const response = await axios.delete(`${BASE_URL}delete-students/${_id}`)
        // .then(data=>console.log(data))
        return response
    } catch (err) {
        console.log(err)
    }
}


export { postData, postDataRegister, deleteInfo, getInfoStudents, putData }