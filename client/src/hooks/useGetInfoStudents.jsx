import axios from 'axios';
import { useEffect, useState } from "react";

/**
 * It's a function that returns an array of objects.
 * returns An array of objects.
*/
export function useGetInfoStudents() {

    const url = 'http://localhost:3004/AllStudents';
    const [infoStudents, setInfoStudents] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                const { data } = response;
                try {
                    if (data.response === 'success') {
                        setInfoStudents(response.data);
                    } else {
                        console.log('Error getting data');
                    }
                } catch (err) {
                    console.log(err)
                }
            });
    }, []);
    return (
        infoStudents
    );
}
