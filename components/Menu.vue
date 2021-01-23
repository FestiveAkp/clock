<template>
    <c-popover placement="bottom-end">
        <c-popover-trigger>
            <c-button>
                <span class="icon is-large">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                    </svg>
                </span>
            </c-button>
        </c-popover-trigger>
        <c-popover-content placement="bottom-end" class="clock-menu">
            <c-flex align="center" justify="space-between">
                <c-popover-header :pl="4" fontWeight="semibold">Options</c-popover-header>
                <c-popover-close-button position="unset" display="flex" :mr="2" />
            </c-flex>
            <c-stack :px="4" :pt="1" :pb="4">
                <c-flex direction="row" justify="space-between">
                    <c-text
                        fontSize="sm"
                        fontWeight="semibold"
                        as="label"
                        for="24-hour"
                    >
                        24-hour clock
                    </c-text>
                    <c-switch
                        :isChecked="is24Hour"
                        @click="toggle24HourMode"
                        color="vue"
                        id="24-hour"
                    />
                </c-flex>
                <c-flex direction="row" justify="space-between">
                    <c-text
                        fontSize="sm"
                        fontWeight="semibold"
                        as="label"
                        for="hide-seconds"
                    >
                        Hide seconds
                    </c-text>
                    <c-switch
                        :isChecked="isHidingSeconds"
                        @click="toggleHidingSeconds"
                        color="vue"
                        id="hide-seconds"
                    />
                </c-flex>
                <c-flex direction="row" justify="space-between">
                    <c-text
                        fontSize="sm"
                        fontWeight="semibold"
                        as="label"
                        for="uppercase-am"
                    >
                        Uppercase am/pm
                    </c-text>
                    <c-switch
                        :isChecked="isUppercaseAM"
                        @click="toggleUppercaseAM"
                        :isDisabled="is24Hour || isHidingAM"
                        color="vue"
                        id="uppercase-am"
                    />
                </c-flex>
                <c-flex direction="row" justify="space-between">
                    <c-text
                        fontSize="sm"
                        fontWeight="semibold"
                        as="label"
                        for="hide-am"
                    >
                        Hide am/pm
                    </c-text>
                    <c-switch
                        :isChecked="isHidingAM"
                        @click="toggleHidingAM"
                        :isDisabled="is24Hour"
                        color="vue"
                        id="hide-am"
                    />
                </c-flex>
                <!-- <c-flex direction="row" justify="space-between">
                    <c-text
                        fontSize="sm"
                        fontWeight="semibold"
                        as="label"
                        for="burn-in"
                    >
                        Burn-in reduction
                    </c-text>
                    <c-switch
                        :isChecked="isBurnInReduction"
                        @click="toggleBurnInReduction"
                        color="vue"
                        id="burn-in"
                    />
                </c-flex> -->
            </c-stack>
        </c-popover-content>
    </c-popover>
</template>

<script>
    import { mapState } from 'vuex';
    import { CFlex, CStack, CSwitch, CText, CPopover, CPopoverTrigger, CPopoverHeader, CPopoverCloseButton, CPopoverContent, CButton } from '@chakra-ui/vue';

    export default {
        components: { CFlex, CStack, CSwitch, CText, CPopover, CPopoverTrigger, CPopoverHeader, CPopoverCloseButton, CPopoverContent, CButton },

        data() {
            return {};
        },

        computed: {
            ...mapState([
                'is24Hour',
                'isHidingSeconds',
                'isUppercaseAM',
                'isHidingAM',
                'isBurnInReduction'
            ]),
        },

        methods: {
            toggle24HourMode() {
                this.$store.commit('change24Hour', !this.is24Hour);
            },

            toggleHidingSeconds() {
                this.$store.commit('changeHidingSeconds', !this.isHidingSeconds);
            },

            toggleUppercaseAM() {
                this.$store.commit('changeUppercaseAM', !this.isUppercaseAM);
            },

            toggleHidingAM() {
                this.$store.commit('changeHidingAM', !this.isHidingAM);
            },

            toggleBurnInReduction() {
                this.$store.commit('changeBurnInReduction', !this.isBurnInReduction);
            }
        }
    }
</script>

<style scoped>
    button {
        cursor: pointer;
        color: #363636;
        padding: 0;
    }

    button:focus {
        box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25) !important;
    }

    .clock-menu {
        z-index: 4;
        width: 15rem;
        backdrop-filter: blur(5px);
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
    }
</style>
