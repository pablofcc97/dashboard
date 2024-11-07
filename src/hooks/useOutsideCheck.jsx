"use client"
import { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideChecker = (ref, action=()=>console.log('click outside'), condition=true, exceptPoint=null) => {
  useEffect(() => {
    if (!condition) return;

    function handleClickOutside(event) {
      if(exceptPoint && exceptPoint.contains(event.target)) return
      if (ref.current && !ref.current.contains(event.target)) {
        action()
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, condition]);
}

export default useOutsideChecker
