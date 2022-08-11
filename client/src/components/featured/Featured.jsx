import React from "react";
import "./featured.css";

export default function Featured() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                    src="https://www.beaches.com/blog/content/images/2021/03/Beaches-Turks-Caicos-Overview.jpg"
                    className="featuredImg"
                    alt="hotel"
                />
                <div className="featuredTitles">
                    <h1>RICHMOND</h1>
                    <h2>57 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://www.beaches.com/blog/content/images/2021/03/Beaches-Turks-Caicos-Overview.jpg"
                    className="featuredImg"
                    alt="hotel"
                />
                <div className="featuredTitles">
                    <h1>RICHMOND</h1>
                    <h2>1 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://www.beaches.com/blog/content/images/2021/03/Beaches-Turks-Caicos-Overview.jpg"
                    className="featuredImg"
                    alt="hotel"
                />
                <div className="featuredTitles">
                    <h1>RICHMOND</h1>
                    <h2>1 properties</h2>
                </div>
            </div>
        </div>
    );
}
