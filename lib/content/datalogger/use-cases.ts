export const DATALOGGER_USE_CASES = {
    sectionLabel: '06 — Industries',
    headline: 'Fifteen verticals. Purpose-built for each.',
    cards: [
        {
            industry: 'Industrial Automation / Process',
            title: 'Long-term process monitoring with Modbus, HART, and PROFIBUS.',
            vignette: 'Sensor inputs over Modbus RTU (RS-485), HART, 4–20 mA, and PROFIBUS DP. Outputs via Modbus TCP, PROFINET, EtherNet/IP, OPC UA, or MQTT Sparkplug. Local storage: CSV on flash or SD.',
        },
        {
            industry: 'Environmental / Hydrology / Meteorology',
            title: 'Remote environmental station logging over SDI-12 with satellite uplink.',
            vignette: 'Sensor inputs via SDI-12, Modbus RTU, 4–20 mA, and pulse counting. Outputs via FTP/SFTP (CSV), MQTT, HTTP, cellular, or satellite (Iridium). Local storage: CSV or TOA5 (Campbell).',
        },
        {
            industry: 'Utilities — Power',
            title: 'Substation fault recording to IEC 61850 with COMTRADE output.',
            vignette: 'Inputs over Modbus, IEC 61850 MMS/GOOSE, IEC 60870-5-101/104. Outputs via DNP3, IEC 60870-5-104, MQTT. Local storage: COMTRADE for fault records.',
        },
        {
            industry: 'Utilities — Water / Wastewater',
            title: 'Water treatment station data collection over Modbus RTU and DNP3.',
            vignette: 'Inputs via Modbus RTU and 4–20 mA. Outputs via DNP3, Modbus TCP, MQTT. Local storage: CSV.',
        },
        {
            industry: 'Building Automation / HVAC',
            title: 'Building-wide HVAC and energy trend logging over BACnet and Modbus.',
            vignette: 'Inputs via BACnet MS/TP, Modbus RTU, M-Bus. Outputs via BACnet/IP, MQTT, OPC UA. Local storage: CSV or trend logs.',
        },
        {
            industry: 'Energy Metering / Submetering',
            title: 'Multi-tenant energy submetering with DLMS/COSEM and M-Bus.',
            vignette: 'Inputs via Modbus RTU, M-Bus/wireless M-Bus, DLMS/COSEM. Outputs via DLMS/COSEM, Modbus TCP, MQTT. Local storage: CSV.',
        },
        {
            industry: 'Automotive / Vehicle / Off-highway',
            title: 'Road-load data collection on CAN FD, J1939, and LIN — MDF4 output.',
            vignette: 'Inputs via CAN 2.0B, CAN FD, LIN, J1939, OBD-II, FlexRay. Outputs offline via USB/SD or telematics MQTT/HTTP. Local storage: MDF4 (ASAM), CSV, BLF. Fleet-wide log summarisation and cross-run anomaly detection via AI-assisted analysis on the uniform MDF4 dataset — engineer-reviewed conclusions, not AI-certified results.',
        },
        {
            industry: 'Medical Devices',
            title: 'Medical device long-term data collection with encrypted storage and EDF output.',
            vignette: 'Inputs via I²C/SPI/UART board sensors and proprietary interfaces. Outputs via HL7, IEEE 11073 (PHD), BLE, MQTT (IoMT). Local storage: encrypted flash, EDF/EDF+ for biosignals.',
        },
        {
            industry: 'Aerospace / Flight Test',
            title: 'Flight test data acquisition to IRIG-106 Chapter 10 with MIL-STD-1553.',
            vignette: 'Inputs via MIL-STD-1553, ARINC 429, ARINC 717, iNET-X, IRIG-106 PCM. Outputs via IRIG-106 Ch10 and Ethernet (iNET). Local storage: IRIG-106 Ch10. Long-duration flight-test captures can be sent to an LLM for anomaly correlation across runs — AI accelerates the analysis pass; the engineer owns every conclusion and signs the record.',
        },
        {
            industry: 'Rail',
            title: 'On-board rolling stock data collection over MVB/WTB and CAN.',
            vignette: 'Inputs via MVB/WTB (IEC 61375), CAN, Modbus. Outputs via Ethernet TRDP, MQTT. Local storage: CSV.',
        },
        {
            industry: 'Oil & Gas / SCADA Telemetry',
            title: 'Remote pipeline telemetry over HART and Modbus with satellite uplink.',
            vignette: 'Inputs via Modbus RTU, HART, 4–20 mA. Outputs via DNP3, Modbus TCP, MQTT Sparkplug B, satellite. Local storage: CSV.',
        },
        {
            industry: 'Lab / Scientific DAQ',
            title: 'Instrument-grade DAQ over GPIB, USB, and I²C with HDF5 output.',
            vignette: 'Inputs via I²C/SPI, USB, GPIB (IEEE-488), analog. Outputs via LXI/VXI-11, SCPI over TCP, USB-TMC. Local storage: TDMS (NI), HDF5, CSV.',
        },
        {
            industry: 'Agriculture / Precision Ag',
            title: 'Field sensor network logging over LoRaWAN and CAN ISOBUS.',
            vignette: 'Inputs via SDI-12, Modbus, CAN ISOBUS (ISO 11783). Outputs via LoRaWAN, MQTT, cellular. Local storage: CSV.',
        },
        {
            industry: 'Marine',
            title: 'Vessel data logging over NMEA 2000 with satellite uplink.',
            vignette: 'Inputs via NMEA 0183, NMEA 2000 (CAN-based). Outputs via MQTT, satellite (Inmarsat). Local storage: CSV or proprietary format.',
        },
        {
            industry: 'Consumer / Generic IoT',
            title: 'Custom IoT data collection over I²C, BLE, and LoRaWAN.',
            vignette: 'Inputs via I²C, SPI, BLE. Outputs via MQTT, CoAP, HTTP, LoRaWAN. Local storage: flash or cloud.',
        },
    ],
} as const;
