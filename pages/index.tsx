import { Center } from '@chakra-ui/react';
import { useEffect } from 'react';
import Header from '../components/Header';
import FullscreenButton from '../components/FullscreenButton';
import Gradient from '../components/Gradient';
import Clock from '../components/Clock';

export default function IndexPage() {
    useEffect(() => {
        console.log('Hey there.');
        console.log('https://github.com/FestiveAkp/clock');
    }, []);

    return (
        <Center as="main" minHeight="100vh">
            <Header title="Gradient Clock">
                <FullscreenButton />
            </Header>
            <Gradient />
            <Clock />
        </Center>
    );
}
