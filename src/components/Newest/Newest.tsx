import { Box, Button, Flex, Stack, Text } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Card } from '../Common/Card/Card.tsx';

export const Newest = () => {
  return (
    <Stack gap={24}>
      <Flex justify="start" align="center" gap={16}>
        <h2 style={{ whiteSpace: 'nowrap' }}>جدیدترین تورها</h2>
        <ul>
          <li>
            <Text size="xs" style={{ textAlign: 'start' }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </Text>
          </li>
        </ul>
        <Box>
          <Button size="sm" px="xl" radius="lg" rightSection={<IconArrowLeft />}>
            مشاهده بیشتر
          </Button>
        </Box>
      </Flex>
      <Flex align="center" gap={24}>
        <Card
          title={'تور شیراز'}
          price={'9,820,000'}
          date={'15 تا 20 خرداد'}
          description={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...'}
          imgUrl={'./images/trip1.png'}
        />
        <Card
          title={'تور شیراز'}
          price={'9,820,000'}
          date={'15 تا 20 خرداد'}
          description={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...'}
          imgUrl={'./images/trip2.png'}
        />
        <Card
          title={'تور شیراز'}
          price={'9,820,000'}
          date={'15 تا 20 خرداد'}
          description={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...'}
          imgUrl={'./images/trip3.png'}
        />
        <Card
          title={'تور شیراز'}
          price={'9,820,000'}
          date={'15 تا 20 خرداد'}
          description={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...'}
          imgUrl={'./images/trip4.png'}
        />
      </Flex>
    </Stack>
  );
};
