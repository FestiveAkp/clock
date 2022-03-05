import { Button, Divider, Flex, Link, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stack, Text } from "@chakra-ui/react";
import { ClockOptions, UpdateClockOptions } from "../utils/types";
import MenuOption from './MenuOption';

type Props = {
    options: ClockOptions,
    onUpdate: UpdateClockOptions
}

export default function Menu(props: Props) {
    const { options, onUpdate } = props;

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
                    <Stack px={1} py={1} spacing={3} divider={<Divider />}>
                        <Stack>
                            <Text fontSize="sm" fontWeight="semibold" color="gray.500">Display Options</Text>
                            <MenuOption
                                label="Enable burn-in reduction"
                                value={options.isBurnInReduction}
                                onChange={() => onUpdate('isBurnInReduction')}
                            />
                        </Stack>
                        <Stack>
                            <Text fontSize="sm" fontWeight="semibold" color="gray.500">Time Options</Text>
                            <MenuOption
                                label="Hide clock"
                                value={options.isHidingClock}
                                onChange={() => onUpdate('isHidingClock')}
                            />
                            <MenuOption
                                label="24-hour clock"
                                value={options.is24Hour}
                                onChange={() => onUpdate('is24Hour')}
                                disabled={options.isHidingClock}
                            />
                            <MenuOption
                                label="Hide seconds"
                                value={options.isHidingSeconds}
                                onChange={() => onUpdate('isHidingSeconds')}
                                disabled={options.isHidingClock}
                            />
                            <MenuOption
                                label="Uppercase am/pm"
                                value={options.isUppercaseAM}
                                onChange={() => onUpdate('isUppercaseAM')}
                                disabled={options.isHidingClock || options.is24Hour || options.isHidingAM}
                            />
                            <MenuOption
                                label="Hide am/pm"
                                value={options.isHidingAM}
                                onChange={() => onUpdate('isHidingAM')}
                                disabled={options.isHidingClock || options.is24Hour}
                            />
                        </Stack>
                        <Stack>
                            <Text fontSize="sm" fontWeight="semibold" color="gray.500">Date Options</Text>
                            <MenuOption
                                label="Hide date"
                                value={options.isHidingDate}
                                onChange={() => onUpdate('isHidingDate')}
                            />
                            <MenuOption
                                label="Hide day of the week"
                                value={options.isHidingDay}
                                onChange={() => onUpdate('isHidingDay')}
                                disabled={options.isHidingDate}
                            />
                        </Stack>
                        <Flex fontSize="sm" fontWeight="semibold">
                            <Text>Created by <Link href="/" color="teal.700" textDecoration="underline">Akash Pillai</Link></Text>
                            <Text mx={1} fontWeight="normal">&ndash;</Text>
                            <Link href="https://github.com/FestiveAkp/clock" isExternal color="teal.700" textDecoration="underline">Source Code</Link>
                        </Flex>
                    </Stack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}
