import { useEffect, useRef } from "react";
import anime from 'animejs';

type Props = {
    isBurnInReduction: boolean
}

export default function BurnInReductionAnimator(props: Props) {
    const { isBurnInReduction } = props;

    const burnInReductionAnimation = useRef(null);

    useEffect(() => {
        const d = 25;       // pixels to shift
        const t = 2000;     // time to move
        const w = 10000;     // time to wait
        burnInReductionAnimation.current = anime({
            targets: '.clock-face',
            keyframes: [
                { translateX: d, translateY: -d, duration: t },
                { duration: w },
                { translateX: 0, translateY: 0, duration: t },
                { duration: w },
                { translateX: d, translateY: d, duration: t },
                { duration: w },
                { translateX: 0, translateY: 0, duration: t },
                { duration: w },
                { translateX: -d, translateY: d, duration: t },
                { duration: w },
                { translateX: 0, translateY: 0, duration: t },
                { duration: w },
                { translateX: -d, translateY: -d, duration: t },
                { duration: w },
                { translateX: 0, translateY: 0, duration: t },
                { duration: w },
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
                duration: 750,
                easing: 'easeInOutExpo'
            });
            burnInReductionAnimation.current.play();
        }
    }, [isBurnInReduction]);

    return <></>;
}
