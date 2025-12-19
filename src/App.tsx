import './App.css'
import Navbar from "./components/Navbar/Navbar.tsx";
import {Search} from "./components/Search/Search.tsx";
import {Stack} from "@mantine/core";
import {Newest} from "./components/Newest/Newest.tsx";

function App() {

    return (
        <Stack gap={40}>
            <Navbar/>
            <Search/>
            <Newest/>
        </Stack>
    )
}

export default App
