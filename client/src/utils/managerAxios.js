import axios from "axios";


export function sendDataAxios(data) {

    axios.post('http://localhost:3004/add-student-data', {

        calification: parseInt(data?.calification[0]),
        direction: data?.direction[0],
        email: data?.email[0],
        name: data?.name[0],
        phone_number: data?.phone_number[0],
    });
}