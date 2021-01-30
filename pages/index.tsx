import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import Header from '../components/Header';
import FullscreenButton from '../components/FullscreenButton';
import Clock from '../components/Clock';

export default function IndexPage() {
    useEffect(() => {
        console.log('Hey there.');
        console.log('https://github.com/FestiveAkp/clock');
    }, []);

    return (
        <Flex as="main" minHeight="100vh" align="center" justify="center">
            <Header title="Gradient Clock">
                <FullscreenButton />
            </Header>
            <Clock />
        </Flex>
    );
}
