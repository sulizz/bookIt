import React from "react";
import "./featured.css";

export default function Featured() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                    src="https://www.worldatlas.com/upload/3c/86/c8/shutterstock-1579415920.jpg"
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
                    src="https://vastphotos.com/files/uploads/photos/10884/high-resolution-yosemite-photo-l.jpg?v=20220712073521"
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
                    src="https://vastphotos.com/files/uploads/photos/10884/high-resolution-yosemite-photo-l.jpg?v=20220712073521"
                    className="featuredImg"
                    alt="hotel"
                />
                <div className="featuredTitles">
                    <h1>Yosemite</h1>
                    <h2>1 properties</h2>
                </div>
            </div>
        </div>
    );
}
