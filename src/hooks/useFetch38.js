import { useState, useEffect,     useDebugValue} from "react";

const useFetch = (fetchUrl) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);//message de chargement 
    const fetchData = async ()=> {
        try {
            const response = await fetch(fetchUrl)
            // console.log(response)
            if (!response.ok) {
                throw Error("Pas de data")
                
            }
            const fetchedData =await response.json()
            console.log(fetchedData)//pending
            setData(fetchedData)
            setIsLoading(false)
        } catch (error) {
            console.log(error.message)
        }
    }

    //Array
    useDebugValue("bonjour")
    useDebugValue(isLoading)
    useDebugValue(data)
    useDebugValue(fetchUrl)
    useDebugValue(JSON.stringify(data))


    //Cette fonction est appelée uniquement si les Hooks sont inspectés. Elle reçoit la valeur de débogage comme argument et devrait renvoyer la valeur formatée.
    useDebugValue(data,  val => {
        // alert("useDebugValue")//alert si ouvre console
       return JSON.stringify(val)
    })


    //Fetch
    useEffect(() => {
        fetchData()
    
    }, [fetchUrl]);
    return { data, isLoading}



}

export   default useFetch