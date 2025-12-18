// main.tsx
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import {DirectionProvider, MantineProvider, type MantineThemeOverride} from '@mantine/core';
import {createRoot} from "react-dom/client";
import App from "./App.tsx";

export const customTheme: MantineThemeOverride = {
    colors: {
        darkGray: [
            '#f2f2f2',
            '#d9d9d9',
            '#bfbfbf',
            '#a6a6a6',
            '#8c8c8c',
            '#737373',
            '#595959',
            '#404040',
            '#262626',
            '#1C1C1C', // strongest shade
        ],
    },
    primaryColor: 'darkGray',
    primaryShade: 9,
};


createRoot(document.getElementById('root')!).render(
    <DirectionProvider>
        <MantineProvider theme={customTheme}>
            <App/>
        </MantineProvider>
    </DirectionProvider>
);
