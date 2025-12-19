import { Box, Flex, Stack, Text } from '@mantine/core';
import Graph from '../Common/Graph/Graph.tsx';
import type { Edge, Node } from '@xyflow/react';
import { IconBriefcase, IconCalendarWeek, IconMapPins, IconPlane } from '@tabler/icons-react';

const initialNodes: Node[] = [
  {
    id: '1',
    data: { label: 'تجربه سفر', icon: <IconPlane /> },
    position: { x: -150, y: -150 },
    type: 'travel',
  },
  {
    id: '2',
    data: { label: 'رزرو سفر', icon: <IconCalendarWeek /> },
    position: { x: -0, y: 0 },
    type: 'travel',
  },
  {
    id: '3',
    data: { label: 'خدمات سفر', icon: <IconBriefcase /> },
    position: { x: 200, y: -150 },
    type: 'travel',
  },
  {
    id: '4',
    data: { label: 'برنامه ریزی سفر', icon: <IconMapPins /> },
    position: { x: 350, y: 0 },
    type: 'travel',
  },
];

const initialEdges: Edge[] = [
  { id: '1->2', source: '1', target: '2', animated: true, type: 'smoothstep' },
  { id: '2->3', source: '2', target: '3', animated: true, type: 'smoothstep' },
  { id: '3->4', source: '3', target: '4', animated: true, type: 'smoothstep' },
];

export const AboutMe = () => {
  return (
    <Flex gap={32} align={'center'}>
      <Stack gap={16} style={{ textAlign: 'start' }}>
        <h3>درباره ما</h3>
        <Stack gap={12}>
          <Stack gap={4}>
            <Text fw={'bold'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</Text>
            <Text>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </Text>
          </Stack>
          <Stack gap={4}>
            <Text fw={'bold'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</Text>
            <Text>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Box flex={1}>
        <Graph nodes={initialNodes} edges={initialEdges} />
      </Box>
    </Flex>
  );
};
