import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    styles: {
        global: {
            html: {
                overflow: 'hidden'
            },
            body: {
                color: '#3a3a3a'
            }
        }
    },
    components: {
        Button: {
            variants: {
                ghost: {
                    _hover: {
                        bg: 'transparent'
                    },
                    _active: {
                        bg: 'transparent'
                    }
                }
            }
        }
    }
});
