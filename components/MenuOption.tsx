import { Flex, Text, Switch } from '@chakra-ui/react';

type Props = {
    label: string,
    value: boolean,
    onChange: () => void,
    disabled?: boolean
}

export default function MenuOption(props: Props) {
    const { label, value, onChange, disabled } = props;

    return (
        <Flex direction="row" justify="space-between">
            <Text fontSize="sm" fontWeight="semibold" as="label" htmlFor={label}>
                {label}
            </Text>
            <Switch
                isChecked={value}
                onChange={onChange}
                isDisabled={disabled}
                id={label}
            />
        </Flex>
    );
}
