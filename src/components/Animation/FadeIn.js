import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

export default function FadeIn({ children, vars }) {
    const el = useRef();
    const animation = useRef();
    useEffect(() => {
        const ctx = gsap.context(() => {
          animation.current = gsap.from(el.current.children, { 
            opacity: 0,
            ...vars
          });
        });
        return () => ctx.revert();       
      }, []);
  return (
    <span ref={el}>{children}</span>
  )
}