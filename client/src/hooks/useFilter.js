import {useState, useEffect} from 'react';

export const findResult = (props) => {
  // get data table filter
  const { data } = props;
  
  const [filterData, setFilterdData] = useState("");

  const [orders, setOrders] = useState();

  useEffect(() => {
    setOrders(data?.data);
  }, [data])

  const _handleChange = (e) => {
    const { target } = e;
    const { value } = target;
    setFilterdData(value);
    if (value !== "" && value.length > 2) {
      let dataFound = orders.filter(
        (item) =>
          item.name.toLowerCase().includes(filterData) ||
          item.asignatura.toLowerCase().includes(filterData.toLowerCase())
      );
      setOrders(dataFound);
    } else {
      setOrders(data?.data);
    }
  };

  return {
    filterData,
    orders,
    _handleChange,
  };
};


