"use client";

import Image from "next/image";
import {useEffect} from 'react';
import { useRouter, useParams, usePathname } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const slug = params.lang;
  
  useEffect(()=> {
	  console.log('useeffect called');
  });

  
  
  return (
    <>
      
    </>
  );
}
