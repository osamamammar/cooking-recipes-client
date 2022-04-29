import axios from "axios";
import React from "react";
import { useEffect } from "react";

const useAxiosFetch = (urlApi, requestType) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async (url, method) => {
      setLoading(true);
      try {
        const { data } = await axios({
          method: method,
          url,
        });
        if (isMounted) {
          setData(data);
          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.response.data.message);
          setData([]);
        }
      } finally {
        isMounted && setLoading(false);
      }
    };

    fetchData(urlApi, requestType);

    const cleanUp = () => {
      isMounted = false;
    };

    return cleanUp;
  }, [urlApi, requestType]);

  return { data, loading, error };
};

export default useAxiosFetch;
