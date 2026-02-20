'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';
import HeroSection from '@/components/HeroSection';

interface Props {
    labelKey: string;
    titleKey: string;
    subtitleKey: string;
    bgImage: string;
    bgVideo?: string;
    titleAccent?: string;
    showCTA?: boolean;
    small?: boolean;
}

export default function TranslatedHero({ labelKey, titleKey, subtitleKey, bgImage, bgVideo, titleAccent, showCTA, small }: Props) {
    const { lang } = useLanguage();
    return (
        <HeroSection
            label={t(labelKey, lang)}
            title={t(titleKey, lang)}
            subtitle={t(subtitleKey, lang)}
            bgImage={bgImage}
            bgVideo={bgVideo}
            titleAccent={titleAccent}
            showCTA={showCTA}
            small={small}
            ctaText1={t('hero.cta1', lang)}
            ctaText2={t('hero.cta2', lang)}
        />
    );
}
