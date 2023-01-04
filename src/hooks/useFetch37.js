import { useState, useEffect,     useDebugValue} from "react";

const useFetch = (fetchUrl) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);//message de chargement 
    

    //Array
    useDebugValue("bonjour")
    useDebugValue(isLoading)
    useDebugValue(data)
    useDebugValue(fetchUrl)
    useDebugValue(JSON.stringify(data))


    //Cette fonction est appelée uniquement si les Hooks sont inspectés. Elle reçoit la valeur de débogage comme argument et devrait renvoyer la valeur formatée.
    useDebugValue(data,  val => {
        alert("useDebugValue")
       return JSON.stringify(val)
    })


    //Fetch
    useEffect(() => {
        fetch(fetchUrl)
            .then(response => response.json())
            .then(json => {
                setData(json);
                setIsLoading(false)

            })
            .catch(error => console.log(error.message))

    }, [fetchUrl]);
    return { data, isLoading}



}

export   default useFetch