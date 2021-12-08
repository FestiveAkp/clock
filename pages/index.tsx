import { useEffect, useState } from 'react';
import { Header, FullscreenButton, Gradient, Clock, Menu, AnimateHeaderContainer, BurnInReductionAnimator } from '../components';
import { ClockOptions, UpdateClockOptions } from '../utils/types';

export default function IndexPage() {
    const [options, setOptions] = useState<ClockOptions>({
        isHidingClock: false,
        is24Hour: false,
        isHidingSeconds: false,
        isUppercaseAM: false,
        isHidingAM: false,
        isBurnInReduction: false,
        isHidingDate: false,
        isHidingDay: false
    });

    const updateOptions: UpdateClockOptions = key => setOptions(options => {
        return {...options, [key]: !options[key]}
    });

    useEffect(() => {
        console.log('Hey there.');
        console.log('https://github.com/FestiveAkp/clock');
    }, []);

    return (
        <AnimateHeaderContainer>
            <Gradient />
            <Header title="Gradient Clock">
                <FullscreenButton />
                <Menu options={options} onUpdate={updateOptions} />
            </Header>
            <Clock options={options} />
            <BurnInReductionAnimator isBurnInReduction={options.isBurnInReduction} />
        </AnimateHeaderContainer>
    );
}
