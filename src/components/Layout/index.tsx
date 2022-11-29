import { ColumnBox } from "../../GlobalStyle";
import {RouterProvider} from "react-router-dom";
import {router} from "../../router/routes";
import Navbar from "../Navbar";

const Layout = () => {
    return(
        <ColumnBox>
            <Navbar/>
            <RouterProvider router={router}/>
        </ColumnBox>
    )
}

export default Layout