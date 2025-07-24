import Summary from './components/Summary';
import Hardware from './components/Hardware';
import OperatingSystem from './components/OperatingSystem';
import Drivers from './components/Drivers';
import Middleware from './components/Middleware';
import ApplicationDevelopment from './components/ApplicationDevelopment';
import Projects from './components/Firmware';
import Firmware from './components/Firmware';

export default function Home() {
    return (
        <div>
            <Summary />
            <Hardware />
            <OperatingSystem />
            <Drivers />
            <Firmware />
            <Middleware />
            <ApplicationDevelopment />
        </div>
    );
}


