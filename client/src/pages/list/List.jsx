import React from "react";
import Header from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
const List = () => {
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <Featured />
        </div>
    );
};

export default List;
