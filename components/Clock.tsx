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
            isHidingDay
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
        const h = is24Hour ? 'HH' : 'h';
        const ss = isHidingSeconds ? '' : ':ss';
        const a = is24Hour || isHidingAM ? '' : isUppercaseAM ? ' A' : ' a';

        return dayjs(time).format(h + ':mm' + ss + a);
    }

    // Format date display based on options
    const formatDate = (date: string) => {
        const dayOfWeek = isHidingDay ? '' : 'dddd, ';

        return dayjs(date).format(dayOfWeek + 'MMMM D, YYYY');
    }

    // On mount, get current time and start ticking
    useEffect(() => {
        updateCurrentTime();
        const interval = setInterval(updateCurrentTime, 1000);
        return () => clearInterval(interval)
    }, []);

    const marginBottom = (isHidingDate || isHidingClock) ? 4 : 8;

    return (
        <Box as="section" className="clock-face" textAlign="center" fontFamily="Varela Round, sans-serif" cursor="default" mb={marginBottom}>
            {!isHidingClock &&
                <Text fontSize="12vw">{time ? formatTime(time) : ''}</Text>
            }
            {!isHidingDate &&
                <Text fontSize={isHidingClock ? '6vw' : '3vw'}>{date ? formatDate(date) : ''}</Text>
            }
        </Box>
    );
}
