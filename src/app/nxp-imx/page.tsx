import Summary from './components/Summary';
import StrategyPlanning from './components/StrategyPlanning';
import MarketIntelligence from './components/MarketIntelligence';
import ImplementationIntegration from './components/ImplementationIntegration';
import PerformanceOptimization from './components/PerformanceOptimization';

export default function Home() {
    return (
        <div>
            <Summary />
            <StrategyPlanning />
            <MarketIntelligence />
            <ImplementationIntegration />
            <PerformanceOptimization />
        </div>
    );
}


