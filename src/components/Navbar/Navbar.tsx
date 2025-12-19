// App.tsx
import {Box, Button, Group,} from '@mantine/core';
import {IconLogin} from "@tabler/icons-react";

export default function Navbar() {

    return (
        <Box style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 60,
            padding: '0 1rem',
            background: '#F5F5F5',
            borderRadius: 16,
        }}>
            <Group gap="md" visibleFrom="sm">
                <img src="./images/one-logo.png"/>
                <Button variant="subtle">جستجو بلیط</Button>
                <Button variant="subtle">درباره ما</Button>
                <Button variant="subtle">پرسش های متداول</Button>
                <Button variant="subtle">تماس با ما</Button>
            </Group>

            <Box fw={700}><Button radius={16} leftSection={<IconLogin/>}>ورود/ثبت نام</Button></Box>
        </Box>
    );
}
