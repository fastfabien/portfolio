import { useState, useEffect } from "react";

const CursorPosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null })

    useEffect(() => {
      const mouseMouveHandler = (event) => {
        const {clientX, clientY} = event;
        setMousePosition({ x: clientX, y: clientY });
      };
      document.addEventListener('mousemove', mouseMouveHandler);
    
      return () => {
        document.removeEventListener('mousemove', mouseMouveHandler);
      }
    }, [])

    return mousePosition;
};

export default CursorPosition;
