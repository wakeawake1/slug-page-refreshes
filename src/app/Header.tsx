import { useLanguage } from './LanguageProvider';
import { useRouter, useParams, usePathname } from "next/navigation";

export const Header = () => {
	const router = useRouter();
	
	const { translate, language, changeLanguage } = useLanguage();
	
	const handleClick = () => {
	changeLanguage(language == 'fr' ? 'en': 'fr')
  }
	return (
	<div>
		
	  <h1>{translate('greeting')}</h1>
<button
        onClick={handleClick}
      >
        click 
      </button>
		</div>
	)
}