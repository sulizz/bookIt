import React from "react";
import "./options.css";
export default function Options({ options, handleOption }) {
    return (
        <>
            <div className="options">
                <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                        <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "d")}
                        >
                            -
                        </button>
                        <span className="optionCounterNumber">
                            {options.adult}
                        </span>
                        <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                        <button
                            className="optionCounterButton"
                            disabled={options.children <= 1}
                            onClick={() => handleOption("children", "d")}
                        >
                            -
                        </button>
                        <span className="optionCounterNumber">
                            {options.children}
                        </span>
                        <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "i")}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                        <button
                            className="optionCounterButton"
                            disabled={options.room <= 1}
                            onClick={() => handleOption("roomNo", "d")}
                        >
                            -
                        </button>
                        <span className="optionCounterNumber">
                            {options.roomNo}
                        </span>
                        <button
                            className="optionCounterButton"
                            onClick={() => handleOption("roomNo", "i")}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
