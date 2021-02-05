import { Box, Flex, Text } from "@chakra-ui/react";

type Props = {
    title: string,
    children: React.ReactNode
}

export default function Header(props: Props) {
    const { title, children } = props;

    return (
        <Flex as="header"
            position="absolute"
            top="0"
            left="0"
            right="0"
            align="center"
            justify="space-between"
            px={6}
            py={4}
            className="animated-header"
        >
            <Text fontSize="xl" fontWeight="semibold">{title}</Text>
            <Box>
                {children}
            </Box>
        </Flex>
    );
}
