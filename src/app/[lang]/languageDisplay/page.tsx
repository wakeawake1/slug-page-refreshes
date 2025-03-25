"use client";
import Image from "next/image";
import {useEffect} from 'react';
import { useRouter, useParams, usePathname } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const slug = params.lang;
  console.log('path:', pathname );
useEffect(()=> {
	console.log('>>>>>>use effect::', slug);
}, []);

    const handleClick = () => {
          router.push(`/${slug == 'en' ? 'nl': 'en'}/languageDisplay`);
		  }
  
  return (
    <>
      <button
        onClick={handleClick}
      >
        click {slug}
      </button>
    </>
  );
}
