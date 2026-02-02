import { useTranslation } from 'react-i18next';

export default function PatientJourney() {
  const { t } = useTranslation();
  return (
    <div className='section container'>
      <h1 className="heading-lg">{t('journey.title')}</h1>
    </div>
  );
}