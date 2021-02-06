import anime from 'animejs';
import { Center } from "@chakra-ui/react";
import { useEffect, useState } from 'react';

type Props = {
    children: React.ReactNode
}

let animationTimeout;

export default function AnimateHeaderContainer(props: Props) {
    const [isRevealed, setIsRevealed] = useState(false);

    const fadeInHeader = () => {
        if (!isRevealed) {
            anime({
                targets: ['.animated-header'],
                opacity: 1,
                duration: 500,
                easing: 'easeOutExpo',
                begin() {
                    setIsRevealed(true);
                }
            });
        }

        clearTimeout(animationTimeout);
        animationTimeout = setTimeout(() => {
            anime({
                targets: ['.animated-header'],
                opacity: 0,
                duration: 500,
                easing: 'easeOutExpo',
                complete() {
                    setIsRevealed(false);
                }
            });
        }, 4000);
    }

    useEffect(() => {
        fadeInHeader();
    }, [])

    return (
        <Center
            as="main"
            minHeight="100vh"
            onMouseMove={fadeInHeader}
            onClick={fadeInHeader}
        >
            {props.children}
        </Center>
    );
}
