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
                <PopoverHeader pl={4} fontWeight="semibold">Clock Options</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                    <Stack px={1} py={1}>
                        <MenuOption
                            label="24-hour clock"
                            value={options.is24Hour}
                            onChange={() => dispatch({ type: 'is24Hour' })}
                        />
                        <MenuOption
                            label="Hide seconds"
                            value={options.isHidingSeconds}
                            onChange={() => dispatch({ type: 'isHidingSeconds' })}
                        />
                        <MenuOption
                            label="Uppercase am/pm"
                            value={options.isUppercaseAM}
                            onChange={() => dispatch({ type: 'isUppercaseAM' })}
                            disabled={options.is24Hour || options.isHidingAM}
                        />
                        <MenuOption
                            label="Hide am/pm"
                            value={options.isHidingAM}
                            onChange={() => dispatch({ type: 'isHidingAM' })}
                            disabled={options.is24Hour}
                        />
                    </Stack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}
