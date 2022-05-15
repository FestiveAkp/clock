import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { ClockOptions } from '../utils/types';

type Props = {
    options: ClockOptions
}

export default function Clock(props: Props) {
    const {
        options: {
            isHidingClock,
            is24Hour,
            isHidingSeconds,
            isUppercaseAM,
            isHidingAM,
            isHidingDate,
            isHidingDay,
            fontSelection
        }
    } = props;

    // Clock state
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    // Update time every second
    const updateCurrentTime = () => {
        setTime(dayjs().format());
        setDate(dayjs().format());
    }

    // Format clock display based on options
    const formatTime = (time: string) => {
        if (!time) return '';

        const h = is24Hour ? 'HH' : 'h';
        const ss = isHidingSeconds ? '' : ':ss';
        const a = is24Hour || isHidingAM ? '' : isUppercaseAM ? ' A' : ' a';

        return dayjs(time).format(h + ':mm' + ss + a);
    }

    // Format date display based on options
    const formatDate = (date: string) => {
        if (!date) return '';

        const dayOfWeek = isHidingDay ? '' : 'dddd, ';

        return dayjs(date).format(dayOfWeek + 'MMMM D, YYYY');
    }

    // On mount, get current time and start ticking
    useEffect(() => {
        updateCurrentTime();
        const interval = setInterval(updateCurrentTime, 1000);
        return () => clearInterval(interval)
    }, []);

    // Check if string is only numeric digits
    const isNumeric = (num: string) => num.match(/^[0-9]+$/);

    // Move display up a bit based on the font
    const getDisplayMarginBottom = (font: string) => {
        if (font.includes('Pacifico')) {
            return 28;
        }
        else if (font.includes('Arima')) {
            return 14;
        }
        return 20;
    }

    // Fix the widths of all characters so the display doesn't wiggle
    const getMonospaceCharacterWidth = (digit: string, font: string) => {
        if (digit === ' ') {
            return '3vw';
        }
        else if (digit === ':' || !isNumeric(digit)) {
            return 'auto';
        }
        else if (font.includes('Arima')) {
            return '7.1vw';
        }
        else if (font.includes('Pacifico')) {
            return '6.5vw';
        }
        return '7.75vw';
    }

    const dateFontSize = isHidingClock ? '6vw' : '3vw';
    const clockMarginBottom = fontSelection.includes('Pacifico') ? 8 : 0;

    return (
        <Box
            as="section"
            className="clock-face"
            textAlign="center"
            fontFamily={fontSelection}
            cursor="default"
            mb={getDisplayMarginBottom(fontSelection)}
        >
            {!isHidingClock &&
                <Box display="flex" flexDirection="row" mb={clockMarginBottom}>
                    {Array.from(formatTime(time)).map((digit, i) => {
                        const width = getMonospaceCharacterWidth(digit, fontSelection);
                        return <Text key={i} fontSize="12vw" width={width}>{digit}</Text>
                    })}
                </Box>
            }
            {!isHidingDate &&
                <Text fontSize={dateFontSize}>{formatDate(date)}</Text>
            }
        </Box>
    );
}
