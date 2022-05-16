import { useEffect, useState } from 'react';
import { Header, FullscreenButton, Gradient, Clock, Menu, AnimateHeaderContainer, BurnInReductionAnimator } from '../components';
import { ClockOptions, UpdateClockOptions } from '../utils/types';

const defaultOptions: ClockOptions = {
    isHidingClock: false,
    is24Hour: false,
    isHidingSeconds: false,
    isUppercaseAM: false,
    isHidingAM: false,
    isBurnInReduction: false,
    isHidingDate: false,
    isHidingDay: false,
    fontSelection: 'Rubik'
};

export default function IndexPage() {
    const [options, setOptions] = useState<ClockOptions>(defaultOptions);

    const updateOptions: UpdateClockOptions = key => setOptions(options => {
        return {...options, [key]: !options[key]}
    });

    const changeFont = (font: string) => setOptions(options => {
        return {...options, fontSelection: font}
    });

    const resetOptions = () => setOptions(defaultOptions);

    // On first load, attempt to load stored options from localStorage
    useEffect(() => {
        const storedOptions = localStorage.getItem('dev.akash.clock.options');

        if (storedOptions == null) {
            setOptions(defaultOptions);
        } else {
            setOptions(JSON.parse(storedOptions));
        }

        console.log('Hey there.');
        console.log('https://github.com/FestiveAkp/clock');
    }, []);

    // On subsequent updates, persist data in localStorage
    useEffect(() => {
        localStorage.setItem('dev.akash.clock.options', JSON.stringify(options));
    }, [options]);

    return (
        <AnimateHeaderContainer>
            <Gradient />
            <Header title="Gradient Clock" font={options.fontSelection}>
                <FullscreenButton />
                <Menu options={options} onUpdate={updateOptions} changeFont={changeFont} reset={resetOptions} />
            </Header>
            <Clock options={options} />
            <BurnInReductionAnimator isBurnInReduction={options.isBurnInReduction} />
        </AnimateHeaderContainer>
    );
}
