import React, { useEffect, useState } from 'react'

function useFetch(url , options={}) {

    const [data , setData] = useState(null);
    const [loading , setLoading] = useState(false);
    const [errorMsg , seterrorMsg] = useState(null);

    async function FetchData()
    {
        setLoading(true)
        try{
            const response = await fetch(url , {...options});
            if(!response.ok) throw new Error(response.statusText)
            const result = await response.json()
            setData(result);
            seterrorMsg(null)
            setLoading(false)

        }catch(error)
        {
            seterrorMsg(`${error}. some error occured`);
            setLoading(false)
        }

    }

    useEffect(()=>
    {
        FetchData()
    },[url])

  return (
    {data , loading ,errorMsg }
  )
}

export default useFetch
