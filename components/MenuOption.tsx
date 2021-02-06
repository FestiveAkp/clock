import { Flex, Text, Switch } from '@chakra-ui/react';
import { Dispatch } from 'react';
import { Action } from '../utils/types';

type Props = {
    label: string,
    value: boolean,
    onChange: Dispatch<Action>,
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
