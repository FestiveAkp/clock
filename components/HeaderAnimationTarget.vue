<template>
    <div class="anime-js" @mousemove="fadeInHeader" @click="fadeInHeader">
        <slot></slot>
    </div>
</template>

<script>
    import anime from 'animejs';

    export default {
        data() {
            return {
                isHeaderRevealed: false
            };
        },

        methods: {
            fadeInHeader() {
                if (!this.isHeaderRevealed) {
                    anime({
                        targets: ['.animated-header', '.animated-footer'],
                        opacity: 1,
                        duration: 500,
                        easing: 'easeOutExpo',
                        begin() {
                            this.isHeaderRevealed = true;
                        }
                    });
                }

                clearTimeout(this.headerAnimTimeout);
                this.headerAnimTimeout = setTimeout(() => {
                    anime({
                        targets: ['.animated-header', '.animated-footer'],
                        opacity: 0,
                        duration: 500,
                        easing: 'easeOutExpo',
                        complete() {
                            this.isHeaderRevealed = false;
                        }
                    });
                }, 4000);
            }
        },

        mounted() {
            this.fadeInHeader();
        }
    }
</script>
