import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import dayjs from "dayjs";

export default function Clock() {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    const updateCurrentTime = () => {
        setTime(dayjs().format('h:mm:ss a'));
        setDate(dayjs().format('dddd, MMMM D, YYYY'));
    }

    useEffect(() => {
        updateCurrentTime();
        const interval = setInterval(updateCurrentTime, 1000);

        return () => clearInterval(interval)
    }, [])

    return (
        <Box as="section" textAlign="center" mb={8}>
            <Text fontSize="12vw" fontFamily="Varela Round">{time}</Text>
            <Text fontSize="3vw" fontFamily="Varela Round">{date}</Text>
        </Box>
    );
}
