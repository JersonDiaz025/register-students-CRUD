import axios from "axios";

const BASE_URL = 'http://localhost:3000'

// get data students
const getInfoStudents = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/all-students`)
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

    const params = {
        calification: parseInt(data?.calification[0]),
        direction: data?.direction[0],
        email: data?.email[0],
        name: data?.name[0],
        phone_number: data?.phone_number[0],
        asignatura: data?.asignatura[0],
    }
    try {
        const response = await axios.post(`${BASE_URL}/add-student-data`, params, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": ""
            }
        })
        return response

    } catch (err) {
        console.log(err)
    }
}
// ---------------------------------------------------register and login---------------------------------------
const postDataRegister = async (dataLogin) => {
    const { email, password, username } = dataLogin;
    try {
        const response = await axios.post(`${BASE_URL}/signUp`, {
            username,
            email: email,
            password: password
        });

        return response;
    } catch (err) {
        const { response } = err;
        return response

    }
}

const postDataLogin = async (loginData) => {
    const { email, password } = loginData;
    try {
        const response = await axios.post(`${BASE_URL}/signIn`, {
            email,
            password
        });
        return response;
    } catch (err) {
        const { response } = err;
        return response
    }
}

// Method PUT
const putData = async (dataUpdated) => {
    const { id, name, calification, phone_number, email, direction, asignatura } = dataUpdated;
    const params = { calification, direction, email, name,phone_number, asignatura }
    try {
        const response = await axios.put(`${BASE_URL}/update-students/${id}`,params,{
            headers: {
                "Content-Type": "application/json",
                "x-access-token": 'update token'
            }
        });
        return response
    } catch (err) {
        console.log(err)
    }
}

// method delete
const deleteInfo = async (_id, token) => {
    try {
        const response = await axios.delete(`${BASE_URL}/delete-students/${_id}`, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": 'delete token'
            }
        })

        return response
    } catch (err) {
        console.log(err)
    }
}


export { postData, postDataRegister, postDataLogin, deleteInfo, getInfoStudents, putData }