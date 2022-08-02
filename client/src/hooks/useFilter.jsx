import {useState} from 'react';

export const findResult = (data) => {

    const [filterData, setFilterdData] = useState('');
    const [orders, setOrders] = useState(data?.data.data);




    const lowercase = filterData.toLowerCase()


    const handleChange = (e) => {
        const { target } = e;
        const { value } = target;
        setFilterdData(value);
        if (value !== '') {
            let dataFound = orders.filter(
            (item) =>
                item.name.toLowerCase().includes(filterData) || item.asignatura.toLowerCase().includes(filterData.toLowerCase()));
            setOrders(dataFound);
        }
    }

    return {
        filterData,
        orders,
        handleChange,
    };
}


