import HeaderSection from './components/HeaderSection';
import IntroductionSection from './components/IntroductionSection';
import ExpertiseSection from './components/ExpertiseSection';
import PlatformSection from './components/PlatformSection';
import ConsultingSection from './components/ConsultingSection';

export default function About() {
    return (
        <div className="px-4 py-4 md:px-6 md:py-6 border-t border-gray-200">
            <HeaderSection />
            <IntroductionSection />
            <ExpertiseSection />
            <PlatformSection />
            <ConsultingSection />
        </div>
    );
}


