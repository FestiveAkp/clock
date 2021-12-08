import { useEffect, useRef } from "react";
import anime from 'animejs';

type Props = {
    isBurnInReduction: boolean
}

export default function BurnInReductionAnimator(props: Props) {
    const { isBurnInReduction } = props;

    const burnInReductionAnimation = useRef(null);

    useEffect(() => {
        const d = 25;           // pixels to shift
        const t = 2_000;        // time to move
        const w = 15_000;       // time to wait
        const f = 4_000;        // time to fade in/out

        const wait = [
            { duration: w }
        ];

        const fadeOutThenIn = [
            { opacity: 0, duration: f },
            { duration: 1_000 },
            { opacity: 1, duration: f },
        ];

        burnInReductionAnimation.current = anime({
            targets: '.clock-face',
            keyframes: [
                // Move to top left
                { translateX: d, translateY: -d, duration: t },
                ...wait,

                ...fadeOutThenIn,

                // Move to bottom right
                { translateX: -d, translateY: d, duration: t },
                ...wait,

                ...fadeOutThenIn,

                // Move to center
                { translateX: 0, translateY: 0, duration: t },
                ...wait,

                ...fadeOutThenIn,

                // Move to top right
                { translateX: -d, translateY: -d, duration: t },
                ...wait,

                ...fadeOutThenIn,

                // Move to bottom left
                { translateX: d, translateY: d, duration: t },
                ...wait,

                ...fadeOutThenIn,

                // Return to center
                { translateX: 0, translateY: 0, duration: t },
                ...wait,

                ...fadeOutThenIn
            ],
            autoplay: false,
            loop: true,
            easing: 'easeInOutExpo'
        });

        if (isBurnInReduction) {
            burnInReductionAnimation.current.play();
        } else {
            // Destroy currently running animation : https://github.com/juliangarnier/anime/issues/188#issuecomment-621589326
            let activeInstances = anime.running;
            let index = activeInstances.indexOf(burnInReductionAnimation.current);
            activeInstances.splice(index, 1);

            // Move clock back to center
            burnInReductionAnimation.current = anime({
                targets: '.clock-face',
                translateX: 0,
                translateY: 0,
                opacity: 1,
                duration: 750,
                easing: 'easeInOutExpo'
            });
            burnInReductionAnimation.current.play();
        }
    }, [isBurnInReduction]);

    return <></>;
}
