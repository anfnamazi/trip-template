import './App.css'
import Navbar from "./components/Navbar/Navbar.tsx";
import {Search} from "./components/Search/Search.tsx";
import {Stack} from "@mantine/core";
import {Newest} from "./components/Newest/Newest.tsx";
import {Question} from "./components/Question/Question.tsx";

function App() {

    return (
        <Stack gap={40}>
            <Navbar/>
            <Stack gap={80}>
                <Search/>
                <Newest/>
                <Question/>
            </Stack>
        </Stack>
    )
}

export default App
