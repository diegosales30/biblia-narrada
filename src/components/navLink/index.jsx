"use client";
import { useRouter } from 'next/router'
import { useEffect } from 'react';
 
function ActiveLink({ children, href }) {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  }
  useEffect(() => {
    if (router.isReady) {
      setIsActive(router.pathname === href);
    }
  }, [router.isReady, router.pathname, href]);
 
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
 
  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}
 
export default ActiveLink