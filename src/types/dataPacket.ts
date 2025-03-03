/**
 * Interface representing a data packet in the LangIQ system
 */
export interface DataPacket {
    /**
     * Unique identifier for the packet
     */
    id?: string;

    /**
     * The type of packet (e.g., 'query', 'response', 'data', 'animated')
     */
    type?: string;

    /**
     * The content/payload of the packet
     */
    content?: any;

    /**
     * Timestamp when the packet was created
     */
    timestamp?: number;

    /**
     * Position attributes for animation (optional)
     */
    x?: number;
    y?: number;

    /**
     * Target position for animation (optional)
     */
    targetX?: number;
    targetY?: number;
}
