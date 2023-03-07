import { useEffect, useState } from "react";

export function useFatch<T = unknown>(url: string) {

    const [data, setData] = useState<T | null>(null)
    const [isFetch, setIsFetch] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(date => setData(date))
        .catch(err => setError(err))
        .finally(() => setIsFetch(false))
    }, [])


    return { data, isFetch, error}
}