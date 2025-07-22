import Summary from './components/Summary';
import Hardware from './components/Hardware';
import OperatingSystem from './components/OperatingSystem';
import Drivers from './components/Drivers';
import Middleware from './components/Middleware';
import ApplicationDevelopment from './components/ApplicationDevelopment';
import Projects from './components/Projects';

export default function Home() {
    return (
        <div>
            <Summary />
            <Hardware />
            <OperatingSystem />
            <Drivers />
            <Middleware />
            <ApplicationDevelopment />
            <Projects />
        </div>
    );
}


