import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [errors, setError] = useState(null);
    useEffect(() => {
        const abortcount = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortcount.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error("Something gone wrong");
                    }
                    return res.json();
                })
                .then(data => {
                    setPending(false);
                    setError(null);
                    setData(data);
                })
                .catch(err => {
                    if(err.name === "AbortError") {
                        console.log("fetch aborted");
                    } else {
                        setPending(false);
                        setError(err.message);
                        setData(null);
                    }
                });
        }, 1000);
        return () => abortcount.abort();
    }, [url]);

    return { data, isPending, errors }
}

export default useFetch;