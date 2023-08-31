import { useState, useEffect, useRef } from "react";
import axios from "axios";

function useDataFetching(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isMounted = useRef(true);

  useEffect(() => {
    const source = axios.CancelToken.source();

    async function fetchData() {
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });

        if (isMounted.current) {
          setData(response.data);
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
        } else {
          if (isMounted.current) {
            setError(err);
          }
        }
      } finally {
        if (isMounted.current) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted.current = false;
      source.cancel("Component unmounted");
    };
  }, [url]);

  return { data, loading, error };
}

export default useDataFetching;
