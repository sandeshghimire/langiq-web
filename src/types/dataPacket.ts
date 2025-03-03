export interface DataPacket {
    // Add all required properties of your data packet
    id?: string;
    type?: string;
    content?: any;
    timestamp?: number;
    // Add any other properties that your DataPacket should have
}
