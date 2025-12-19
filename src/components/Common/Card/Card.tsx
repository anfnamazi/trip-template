import {Badge, Box, Button, Flex, Stack, Text} from "@mantine/core";
import {IconArrowLeft, IconCalendarWeek} from "@tabler/icons-react";

type Props = {
    title: string,
    price: string,
    date: string,
    description: string,
    imgUrl: string,
};
export const Card = (props: Props) => {
    return (
        <div style={{
            width: 288,
            height: 333,
            opacity: 1,
            borderRadius: 28,
            background: `url(${props.imgUrl})`,
            position: "relative",
        }}>
            <Badge size="lg" leftSection={<IconCalendarWeek size={20}/>} h={24} pos="absolute" top={12} right={14}
                   style={{backgroundColor: "#C7C7C7CC", color: "#000"}}>{props.date}</Badge>

            <svg width="100%" height="95" viewBox="0 0 287 95" fill="none"
                 style={{position: "absolute", bottom: 0, right: 0}}
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 70.5C0 56.969 10.969 46 24.5 46H151.02C163.723 46 174.02 35.7025 174.02 23C174.02 10.2975 184.318 0 197.02 0H261C275.359 0 287 11.6406 287 26V69C287 83.3594 275.359 95 261 95H24.5C10.969 95 0 84.031 0 70.5Z"
                    fill="black" fill-opacity="0.8"/>
            </svg>

            <div style={{
                position: "absolute",
                width: 170,
                height: 40,
                opacity: 1,
                bottom: 55,
                left: 0,
                borderTopRightRadius: 18,
                borderBottomRightRadius: 18,
                background: "#000000CC",
                display: "flex",
            }}>
                <Stack gap={0} w={60} mx={"auto"} align={"start"}>
                    <Text c={"#fff"} size={"xs"}>تومان</Text>
                    <Text c={"#C7C7C7"} size={"xs"}>{props.price}</Text>
                </Stack>
            </div>

            <div style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: 50,
                color: "#C7C7C7",
                textAlign: "right",
                zIndex: 3,
                padding: '4px 16px 16px 0'
            }}>
                <Flex align="end" justify="space-around">
                    <Text size="xs">{props.description}</Text>
                    <Box flex={1} h={"auto"}>
                        <Button size={"xs"} mt={4} variant="transparent" py={0} c={"#fff"}
                                rightSection={<IconArrowLeft/>}>مشاهده</Button>
                    </Box>
                </Flex>
            </div>

            <div style={{
                position: "absolute",
                bottom: 55,
                right: 12,
                color: "#fff",
                borderBottom: "1px solid #ECECEC33",
                padding: '4px 4px 6px 26px',
            }}>
                {props.title}
            </div>


        </div>
    );
};