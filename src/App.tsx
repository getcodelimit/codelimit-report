import {Tab, Tabs} from "@mui/material";
import {useEffect, useState} from "react";
import {Link, Outlet, useLocation} from "react-router-dom";
import {Main} from "./App.style.ts";


export default function App() {
    const [currentTab, setCurrentTabe] = useState(0);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/measurements') {
            setCurrentTabe(1);
        } else if (location.pathname === '/tree') {
            setCurrentTabe(2);
        } else {
            setCurrentTabe(0);
        }
    }, [location]);

    return (
        <Main>
            <Tabs value={currentTab}>
                <Tab label="Overview" to="/" component={Link} disabled={currentTab === 0}/>
                <Tab label="Measurements" to="/measurements" component={Link} disabled={currentTab === 1}/>
                <Tab label="File tree" to="/tree" component={Link} disabled={currentTab === 2}/>
            </Tabs>
            <Outlet/>
        </Main>
    )
}