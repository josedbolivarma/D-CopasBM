import { useEffect } from "react";
import { useState } from "react"

export const useFetch = ( url ) => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );
    const [ error, setError ] = useState( false );

    const getData = async () => {
        setIsLoading( true );
        try {
            const response = await fetch( url );
            const data = await response.json();
            console.log( data );
            setData( data.drinks );
        } catch (error) {
            console.log( error );
            setData([])
            setError( true ); 
        }
        setIsLoading( false );
    }

    useEffect(() => {
        getData();
    }, []);

    return {
        // Properties
        data,
        isLoading,
        error
        // Methods
    }
}