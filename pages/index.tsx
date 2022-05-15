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
        isHidingDay: false,
        fontSelection: 'Rubik'
    });

    const updateOptions: UpdateClockOptions = key => setOptions(options => {
        return {...options, [key]: !options[key]}
    });

    const changeFont = (font: string) => setOptions(options => {
        return {...options, fontSelection: font}
    });

    useEffect(() => {
        console.log('Hey there.');
        console.log('https://github.com/FestiveAkp/clock');
    }, []);

    return (
        <AnimateHeaderContainer>
            <Gradient />
            <Header title="Gradient Clock" font={options.fontSelection}>
                <FullscreenButton />
                <Menu options={options} onUpdate={updateOptions} changeFont={changeFont} />
            </Header>
            <Clock options={options} />
            <BurnInReductionAnimator isBurnInReduction={options.isBurnInReduction} />
        </AnimateHeaderContainer>
    );
}
