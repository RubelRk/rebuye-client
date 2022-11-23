import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{

        document.title = `${title} - GHOST BIKERS`;


    },[title])
}

export default useTitle;