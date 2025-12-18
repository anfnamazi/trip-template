import './App.css'
import Navbar from "./components/Navbar/Navbar.tsx";
import {Search} from "./components/Search/Search.tsx";
import {Stack} from "@mantine/core";

function App() {

    return (
        <Stack gap={40}>
            <Navbar/>
            <Search/>
        </Stack>
    )
}

export default App
