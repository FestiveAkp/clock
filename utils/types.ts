export type ClockOptions = {
    isHidingClock: boolean;
    is24Hour: boolean;
    isHidingSeconds: boolean;
    isUppercaseAM: boolean;
    isHidingAM: boolean;
    isBurnInReduction: boolean;
    isHidingDate: boolean;
    isHidingDay: boolean;
    fontSelection: string;
}

export type UpdateClockOptions = (key: string) => void
