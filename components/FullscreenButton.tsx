import { useState } from "react";
import { Button } from "@chakra-ui/react";
import screenfull, { Screenfull } from 'screenfull';

export default function FullscreenButton() {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle();
            screenfull.on('change', () => {
                setIsFullscreen((screenfull as Screenfull).isFullscreen);
            });
        }
    }

    return (
        <Button variant="ghost" onClick={toggleFullscreen}>
            {!isFullscreen ? (
                <svg style={{width:'24px',height:'24px'}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />
                </svg>
            ) : (
                <svg style={{width:'24px',height:'24px'}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z" />
                </svg>
            )}
        </Button>
    );
}
