import { useEffect, useState } from "react";
import axios from "axios";

const useApi = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData().catch(null);
  }, []);
  return [data];
};
export default useApi;
