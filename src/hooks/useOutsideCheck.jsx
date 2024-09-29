"use client"
import { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideChecker = (ref, action=()=>console.log('click outside')) => {
    useEffect(() => {
        function handleClickOutside(event) {
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
      }, [ref]);
}

export default useOutsideChecker
