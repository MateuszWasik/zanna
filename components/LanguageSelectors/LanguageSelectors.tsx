import { useTranslation } from 'react-i18next';
import EnglishFlagLogo from '../../public/assets/images/EnglishFlagIcon.png';
import PolishFlagIcon from '../../public/assets/images/PolishFlagIcon.png';

export const LanguageSelectors = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex text-white mr-2">
      <div
        className="mr-4 w-6 h-auto max-h-1 cursor-pointer"
        onClick={() => i18n.changeLanguage('en')}
      >
        <img src={EnglishFlagLogo.src} alt="" />
      </div>
      <div
        className="mr-4 w-6 h-auto max-h-1 cursor-pointer"
        onClick={() => i18n.changeLanguage('pl')}
      >
        <img src={PolishFlagIcon.src} alt="" />
      </div>
    </div>
  );
};
