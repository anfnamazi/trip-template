import {ActionIcon, Box, Button, Select, Stack, Tabs} from "@mantine/core";
import {
    IconBuilding,
    IconBuildingBank,
    IconBus,
    IconCalendarWeek,
    IconChevronDown,
    IconMapPin,
    IconPlaneArrival,
    IconPlaneDeparture,
    IconPlaneTilt,
    IconSearch,
    IconTrain,
    IconTransfer,
    IconUser
} from "@tabler/icons-react";
import classes from "./Search.module.css"

export const Search = () => {
    return (
        <div style={{
            background: `url(/public/bg-header.png) center`,
            height: 511,
            borderRadius: 40,
            position: 'relative'
        }}>
            <Box style={{
                width: 434,
                height: 60,
                bottom: 70,
                right: 80,
                borderRadius: 20,
                background: '#F5F5F5',
                position: 'absolute',
                verticalAlign: 'middle',
                display: 'flex',
            }}>
                <Tabs radius="xs" variant="pills" defaultValue="gallery" mx="auto" h="100%" classNames={{
                    tab: classes.tab,
                    list: classes.list,
                    panel: classes.panel,
                }}>
                    <Tabs.List>
                        <Tabs.Tab value="gallery">
                            <Stack gap={2} align="center">
                                <IconPlaneTilt size={24}/>
                                پرواز
                            </Stack>
                        </Tabs.Tab>
                        <Tabs.Tab value="messages">
                            <Stack gap={2} align="center">
                                <IconBuilding size={24}/>
                                هتل
                            </Stack>
                        </Tabs.Tab>
                        <Tabs.Tab value="settings">
                            <Stack gap={2} align="center">
                                <IconTrain size={24}/>
                                قطار
                            </Stack>
                        </Tabs.Tab>
                        <Tabs.Tab value="bus">
                            <Stack gap={2} align="center">
                                <IconBus size={24}/>
                                اتوبوس
                            </Stack>
                        </Tabs.Tab>
                        <Tabs.Tab value="tour">
                            <Stack gap={2} align="center">
                                <IconBuildingBank size={24}/>
                                تور
                            </Stack>
                        </Tabs.Tab>
                    </Tabs.List>
                </Tabs>
            </Box>

            <Box style={{
                width: 232,
                height: 40,
                bottom: 70,
                left: 80,
                borderRadius: 20,
                background: '#fff',
                position: 'absolute',
                verticalAlign: 'middle',
                display: 'flex',
                paddingTop: 3,

            }}>
                <Tabs radius="xl" variant="pills" defaultValue="gallery" mx="auto">
                    <Tabs.List>
                        <Tabs.Tab value="gallery" leftSection={<IconPlaneDeparture size={14}/>}>
                            رفت
                        </Tabs.Tab>
                        <Tabs.Tab value="test" leftSection={<IconPlaneArrival size={14}/>}>
                            رفت و برگشت
                        </Tabs.Tab>
                    </Tabs.List>
                </Tabs>
            </Box>

            <Box style={{
                width: 144,
                height: 40,
                bottom: 70,
                left: 330,
                borderRadius: 20,
                background: '#fff',
                position: 'absolute',
                verticalAlign: 'middle',
                display: 'flex',
                paddingTop: 3,

            }}>
                <Tabs radius="xl" variant="pills" defaultValue="gallery" mx="auto">
                    <Tabs.List>
                        <Tabs.Tab value="gallery">
                            داخلی
                        </Tabs.Tab>
                        <Tabs.Tab value="test">
                            خارجی
                        </Tabs.Tab>
                    </Tabs.List>
                </Tabs>
            </Box>

            <Box style={{
                width: 1064,
                height: 120,
                bottom: 0,
                left: "50%",
                transform: "translate(-50%, 50%)",
                borderRadius: 30,
                background: '#F5F5F5',
                position: 'absolute',
                verticalAlign: 'middle',
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    height: "100%",
                    gap: 8,
                    padding: 40

                }}>
                    <Box>
                        <Select
                            placeholder="تاریخ رفت"
                            data={['React', 'Angular', 'Vue', 'Svelte']}
                            variant="unstyled"
                            bg="white"
                            style={{borderRadius: 16}}
                            rightSection={<IconChevronDown/>}
                            leftSection={<IconCalendarWeek/>}
                        />
                    </Box>
                    <Box>
                        <Select
                            placeholder="تاریخ برگشت"
                            data={['React', 'Angular', 'Vue', 'Svelte']}
                            variant="unstyled"
                            bg="white"
                            style={{borderRadius: 16}}

                            rightSection={<IconChevronDown/>}
                            leftSection={<IconCalendarWeek/>}
                        />
                    </Box>
                    <Box display="flex" style={{alignItems: "center"}}>
                        <Select
                            placeholder="مبدا"
                            data={['React', 'Angular', 'Vue', 'Svelte']}
                            variant="unstyled"
                            bg="white"
                            style={{borderRadius: 16}}

                            rightSection={<IconChevronDown/>}
                            leftSection={<IconMapPin/>}
                        />
                        <ActionIcon variant="default" radius="xl" size="sm">
                            <IconTransfer size={12}/>
                        </ActionIcon>
                        <Select
                            placeholder="مقصد"
                            data={['React', 'Angular', 'Vue', 'Svelte']}
                            variant="unstyled"
                            bg="white"
                            style={{borderRadius: 16}}

                            rightSection={<IconChevronDown/>}
                            leftSection={<IconMapPin/>}
                        />
                    </Box>
                    <Box>
                        <Button leftSection={<IconUser/>} variant="white" radius={"lg"}>
                            تعداد مسافر
                        </Button>
                    </Box>
                    <Box>
                        <Button rightSection={<IconSearch/>} radius={16} px={32}>
                            جستجو
                        </Button>
                    </Box>
                </div>
            </Box>
        </div>
    );
};