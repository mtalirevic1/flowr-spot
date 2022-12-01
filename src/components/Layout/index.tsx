import { ColumnBox } from "../../GlobalStyle";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
    return(
        <ColumnBox>
            <Navbar/>
            <Outlet/>
        </ColumnBox>
    )
}

export default Layout