import axios from "axios";
import { useEffect, useState } from "react"

const useFetch = ()=>{
    const [loading, setLoading] = useState(false)
    let controller = new AbortController();

    const fetchData = async (axiosCall)=>{
        if(axiosCall.controller) controller = axiosCall.controller
        console.log(axiosCall)
        setLoading(true)
        let result = {}
        try {
             result = await axiosCall;
          
        } catch (err) {
            setLoading(false)
            throw err;
        }
        setLoading(false)
        return result 
    }

    const cancelEndpoint = () => {
        setLoading(false);
        controller && controller.abort();
      };
      
      useEffect(() => {
        return () => {
          cancelEndpoint();
        };
      }, []);
 
    return {loading, fetchData}
}

export default useFetch