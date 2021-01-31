import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { ClockOptions } from '../utils/types';

type Props = {
    options: ClockOptions
}

export default function Clock(props: Props) {
    // Destructure props
    const {
        options: {
            is24Hour,
            isHidingSeconds,
            isUppercaseAM,
            isHidingAM,
            isBurnInReduction
        }
    } = props;

    // Clock state
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    // Update time every second
    const updateCurrentTime = () => {
        setTime(dayjs().format());
        setDate(dayjs().format('dddd, MMMM D, YYYY'));
    }

    // Format clock display based on options
    const formatTime = (time) => {
        const h = is24Hour ? 'H' : 'h';
        const ss = isHidingSeconds ? '' : ':ss';
        const a = is24Hour || isHidingAM ? '' : isUppercaseAM ? ' A' : ' a';

        return dayjs(time).format(h + ':mm' + ss + a);
    }

    // On mount, get current time and start ticking
    useEffect(() => {
        updateCurrentTime();
        const interval = setInterval(updateCurrentTime, 1000);
        return () => clearInterval(interval)
    }, []);

    return (
        <Box as="section" textAlign="center" mb={8}>
            <Text fontSize="12vw" fontFamily="Varela Round">{formatTime(time)}</Text>
            <Text fontSize="3vw" fontFamily="Varela Round">{date}</Text>
        </Box>
    );
}
