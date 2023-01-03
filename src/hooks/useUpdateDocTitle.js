import {  useEffect } from "react";

const useUpdateDocTitle = (arg) => {
    useEffect(() => {
      document.title = `Title: ${arg}`
    }, [arg]);

}
export default useUpdateDocTitle