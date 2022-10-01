import axios from "axios";
import React, { useState } from "react";

const useAxios = (query) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (params) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.publicapis.org/${query}`,
        params
      );
      setResponse(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  //   need to return object not jsx
  return {
    fetchData: (params) => fetchData(params),
    response,
    loading,
    error,
  };
};


export default useAxios;
