import { useEffect, useState } from 'react';

const useFetchData = (url, cb) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const result = await res.json();

      if (cb) setData(cb(result));
      else setData(result);

      seterror('');
      setLoading(false);
    } catch (e) {
      seterror(e.message);
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
