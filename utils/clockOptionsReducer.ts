import { ClockOptions, Action } from './types';

export function optionsReducer(state: ClockOptions, action: Action): ClockOptions {
    switch (action.type) {
        case 'isHidingClock':
            return { ...state, isHidingClock: !state.isHidingClock };
        case 'is24Hour':
            return { ...state, is24Hour: !state.is24Hour };
        case 'isHidingSeconds':
            return { ...state, isHidingSeconds: !state.isHidingSeconds };
        case 'isUppercaseAM':
            return { ...state, isUppercaseAM: !state.isUppercaseAM };
        case 'isHidingAM':
            return { ...state, isHidingAM: !state.isHidingAM };
        case 'isBurnInReduction':
            return { ...state, isBurnInReduction: !state.isBurnInReduction };

        case 'isHidingDate':
            return { ...state, isHidingDate: !state.isHidingDate };
        default:
            throw new Error('Not implemented');
    }
}

export const initialOptions: ClockOptions = {
    isHidingClock: false,
    is24Hour: false,
    isHidingSeconds: false,
    isUppercaseAM: false,
    isHidingAM: false,
    isBurnInReduction: false,

    isHidingDate: false
};
