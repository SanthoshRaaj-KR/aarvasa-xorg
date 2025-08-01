import React from 'react'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AiButton = () => {
    const [visibility,setVisibility]=useState(false);

    useEffect(()=>{
        const onScroll=()=>{
            setVisibility(window.scrollY>200);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    },[])

  return (
    
        <div
            
            
            className={`fixed bottom-20 right-6 z-50 h-12 w-12 rounded-full bg-pink-800 shadow-lg transition-opacity duration-300 ${visibility ? "opacity-100" : "pointer-events-none opacity-0" }`}>
                <Link to={"/chat"}>
                    <DotLottieReact src="https://lottie.host/faae0789-746f-4849-8bf6-f1342a2eeb62/2HXyx9f3Fx.lottie" loop autoplay />
                </Link>
        </div>
    
  )
}

export default AiButton