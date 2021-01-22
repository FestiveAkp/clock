export const state = () => ({
    is24Hour: false,
    isHidingSeconds: false,
    isUppercaseAM: false,
    isHidingAM: false,
    isBurnInReduction: false,
});

export const mutations = {
    change24Hour(state, newState) {
        state.is24Hour = newState;
    },

    changeHidingSeconds(state, newState) {
        state.isHidingSeconds = newState;
    },

    changeUppercaseAM(state, newState) {
        state.isUppercaseAM = newState;
    },

    changeHidingAM(state, newState) {
        state.isHidingAM = newState;
    },

    changeBurnInReduction(state, newState) {
        state.isBurnInReduction = newState;
    }
};
