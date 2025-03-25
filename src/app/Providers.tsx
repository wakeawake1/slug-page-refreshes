"use client";
import { useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import { useRouter, useParams, usePathname } from "next/navigation";
import { LanguageProvider } from './LanguageProvider';
function LangWrp ({children}){
	const { translate, language, changeLanguage } = useLanguage();
		console.log('>>>language', language);
	const router = useRouter();
	const params = useParams();
	const slug = params.lang;
	useEffect(()=> {
		console.log('slug', slug, `/${slug == 'en' ? 'nl': 'en'}/languageDisplay`);
        router.push(`/${slug == 'en' ? 'nl': 'en'}/languageDisplay`);
	}, [language])
	
	return children
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	
  return (
<>
<LanguageProvider>
<LangWrp>
{children}
</LangWrp>
</LanguageProvider>
</>
  );
}
