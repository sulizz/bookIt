import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faPlane,
    faCar,
    faTaxi,
    faCalendarDays,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Header = () => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 2,
        roomNo: 1,
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]:
                    operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle">Find deals for any season</h1>
                <p className="headerDesc">
                    From cozy bed & breakfasts to luxury hotels
                </p>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input
                            type="text"
                            placeholder="Where are you going"
                            className="headerSearchInput"
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="headerIcon"
                        />
                        <span
                            className="headerSearchText"
                            onClick={() => setOpenDate(!openDate)}
                        >
                            {`${format(date[0].startDate, "MM/dd/yyyy")}`} to
                            {` ${format(date[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        {openDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                            />
                        )}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faUser} className="headerIcon" />
                        <span
                            className="headerSearchText"
                            onClick={() => setOpenOptions(!openOptions)}
                        >
                            {`${options.adult} adult · ${options.children} children ·
                             ${options.roomNo} room`}
                        </span>
                        {openOptions && (
                            <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">
                                        <button
                                            disabled={options.adult <= 1}
                                            className="optionCounterButton"
                                            onClick={() =>
                                                handleOption("adult", "d")
                                            }
                                        >
                                            -
                                        </button>
                                        <span className="optionCounterNumber">
                                            {options.adult}
                                        </span>
                                        <button
                                            className="optionCounterButton"
                                            onClick={() =>
                                                handleOption("adult", "i")
                                            }
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
                                            disabled={options.adult <= 1}
                                            onClick={() =>
                                                handleOption("children", "d")
                                            }
                                        >
                                            -
                                        </button>
                                        <span className="optionCounterNumber">
                                            {options.children}
                                        </span>
                                        <button
                                            className="optionCounterButton"
                                            onClick={() =>
                                                handleOption("children", "i")
                                            }
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
                                            disabled={options.adult <= 1}
                                            onClick={() =>
                                                handleOption("roomNo", "d")
                                            }
                                        >
                                            -
                                        </button>
                                        <span className="optionCounterNumber">
                                            {options.roomNo}
                                        </span>
                                        <button
                                            className="optionCounterButton"
                                            onClick={() =>
                                                handleOption("roomNo", "i")
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
