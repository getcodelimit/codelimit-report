import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {createHashRouter, RouterProvider} from "react-router-dom";
import Measurements from "./pages/Measurements.tsx";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: 'rgb(255, 255, 255)'
        },
        secondary: {
            main: 'rgb(241, 158, 49)'
        }
    },
});

const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "measurements",
                element: <Measurements/>,
            }
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </StrictMode>,
);
