export const USE_CASES = {
    sectionLabel: '06 — Industries',
    headline: 'We\'ve already done this. Across nine industries.',
    cards: [
        {
            industry: 'Automotive / ADAS',
            title: 'Camera and radar fusion ECU.',
            vignette: 'Validated a camera-and-radar fusion ECU through full temperature range, checking sensor capture and bus stability under load.',
        },
        {
            industry: 'Aerospace',
            title: 'UAV mission computer.',
            vignette: 'Validated a UAV mission computer with a camera array and IMU across simulated flight profiles, with every run recorded.',
        },
        {
            industry: 'Defence',
            title: 'Tactical edge compute unit.',
            vignette: 'Validated a tactical edge compute unit under vibration and EMI — I/O, telemetry, and power rails monitored throughout.',
        },
        {
            industry: 'Industrial Automation',
            title: 'Safety PLC I/O and Ethernet bus.',
            vignette: 'Validated a safety PLC\'s I/O and Ethernet bus, capturing latency and fault-response timing over long runs.',
        },
        {
            industry: 'Robotics',
            title: 'AGV LiDAR and motor controller.',
            vignette: 'Validated an AGV\'s LiDAR and motor controller, triggering on scan gaps and motor faults while watching bus integrity under vibration.',
        },
        {
            industry: 'Electric Vehicles',
            title: 'Battery management system.',
            vignette: 'Validated a battery management system across hundreds of charge-discharge cycles, tracking sensor accuracy and fault timing at temperature extremes.',
        },
        {
            industry: 'Rail & Transportation',
            title: 'Train control board.',
            vignette: 'Validated a train control board\'s Ethernet, fault response, and power-cycle recovery over extended runs.',
        },
        {
            industry: 'Space & Satellite',
            title: 'Satellite payload computer.',
            vignette: 'Validated a satellite payload computer\'s high-speed links and power rails across temperature and radiation conditions.',
        },
        {
            industry: 'Energy & Utilities',
            title: 'Smart-grid edge controller.',
            vignette: 'Validated a smart-grid edge controller\'s protocols, timing, and power integrity under simulated grid disturbances.',
        },
    ],
} as const;
