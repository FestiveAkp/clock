import { Dispatch } from "react";
import {
    Button,
    Popover,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Stack,
    Text
} from "@chakra-ui/react";
import { ClockOptions, Action } from '../utils/types';
import MenuOption from './MenuOption';

type Props = {
    options: ClockOptions,
    dispatch: Dispatch<Action>
}

export default function Menu(props: Props) {
    const { options, dispatch } = props;

    return (
        <Popover placement="bottom-end">
            <PopoverTrigger>
                <Button variant="ghost">
                    <svg style={{width:'24px',height:'24px'}} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                    </svg>
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader pl={4} fontWeight="semibold">Options</PopoverHeader>
                <PopoverCloseButton  mt={1} />
                <PopoverBody>
                    <Stack px={1} py={1}>
                        <Text fontSize="sm" fontWeight="semibold" color="gray.500">Time Options</Text>
                        <MenuOption
                            label="Hide clock"
                            value={options.isHidingClock}
                            onChange={() => dispatch({ type: 'isHidingClock' })}
                        />
                        <MenuOption
                            label="24-hour clock"
                            value={options.is24Hour}
                            onChange={() => dispatch({ type: 'is24Hour' })}
                            disabled={options.isHidingClock}
                        />
                        <MenuOption
                            label="Hide seconds"
                            value={options.isHidingSeconds}
                            onChange={() => dispatch({ type: 'isHidingSeconds' })}
                            disabled={options.isHidingClock}
                        />
                        <MenuOption
                            label="Uppercase am/pm"
                            value={options.isUppercaseAM}
                            onChange={() => dispatch({ type: 'isUppercaseAM' })}
                            disabled={options.isHidingClock || options.is24Hour || options.isHidingAM}
                        />
                        <MenuOption
                            label="Hide am/pm"
                            value={options.isHidingAM}
                            onChange={() => dispatch({ type: 'isHidingAM' })}
                            disabled={options.isHidingClock || options.is24Hour}
                        />
                    </Stack>
                    <Stack px={1} py={1} mt={3}>
                        <Text fontSize="sm" fontWeight="semibold" color="gray.500">Date Options</Text>
                        <MenuOption
                            label="Hide date"
                            value={options.isHidingDate}
                            onChange={() => dispatch({ type: 'isHidingDate' })}
                        />
                    </Stack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}
