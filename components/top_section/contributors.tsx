/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
"use client";

import { TrashIcon } from "@heroicons/react/20/solid";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import Popup from "reactjs-popup";

export default function Contributors(props: any) {
    const [selectedTypes, setSelectedTypes] = useState(new Set(["text"]));
    const selections = props.contributors.map(() => {
        const [selectedCons, setSelectedCons] = useState(new Set(["text"]));
        return { selected: selectedCons, setSelected: setSelectedCons };
    });

    const contributors = props.contributors.map((type: any, index: number) => {
        if (type.checked) {
            const displayCons = (selected: any) => {
                return type.contributors.map((con: any, conIndex: number) => {
                    return (
                        <div className="grid grid-cols-[45px_1fr_25px] items-center my-[5px]">
                            <Image
                                className="rounded-[50%]"
                                src={
                                    con.image === ""
                                        ? "/images/default_profile.svg"
                                        : `/images/${con.image}`
                                }
                                alt={`${con.name} profile picture`}
                                width={40}
                                height={40}
                            />
                            <p>{con.name}</p>
                            <TrashIcon
                                className="trash-icon"
                                onClick={() => {
                                    props.setContributors(
                                        props.contributors.map((type: any, typeIndex: number) => {
                                            if (typeIndex === index) {
                                                type.contributors.splice(conIndex, 1);
                                                selected.delete(con.id);
                                            }
                                            return type;
                                        })
                                    );
                                }}
                            />
                        </div>
                    );
                });
            };
            const cons = (selected: any, setSelected: any) => {
                return (
                    <>
                        <div className="grid grid-cols-[150px_1fr] my-[15px]">
                            <h3 className="inline-block">{type.name}</h3>
                            <Popup
                                trigger={
                                    <Button
                                        className="w-[80px] md:w-[65px] text-[1.25rem] md:text-[1.1rem]"
                                        color="primary">
                                        +
                                    </Button>
                                }
                                position={"bottom center"}>
                                <div className="popup">
                                    {props.allContributors.map((con: any, conIndex: number) => {
                                        return (
                                            <div
                                                className="popup-item grid grid-cols-[1fr_15px] items-center"
                                                onClick={(event) => {
                                                    props.setContributors(
                                                        props.contributors.map(
                                                            (type: any, typeIndex: number) => {
                                                                if (typeIndex === index) {
                                                                    const selected = {
                                                                        id: con._id,
                                                                        name: `${con.firstName} ${con.lastName}`,
                                                                        image: con.image,
                                                                        message: "",
                                                                    };

                                                                    if (
                                                                        type.contributors.some(
                                                                            (e: any) => {
                                                                                return (
                                                                                    e.id ===
                                                                                    selected.id
                                                                                );
                                                                            }
                                                                        )
                                                                    ) {
                                                                        type.contributors.splice(
                                                                            type.contributors.findIndex(
                                                                                (e: any) => {
                                                                                    return (
                                                                                        e.id ===
                                                                                        selected.id
                                                                                    );
                                                                                }
                                                                            ),
                                                                            1
                                                                        );
                                                                    } else {
                                                                        type.contributors.push(
                                                                            selected
                                                                        );
                                                                    }
                                                                }

                                                                return type;
                                                            }
                                                        )
                                                    );
                                                }}>
                                                <input
                                                    type="checkbox"
                                                    className="switch"
                                                    checked={type.contributors.some((e: any) => {
                                                        return e.id === con._id;
                                                    })}
                                                />
                                                <div className="flex">
                                                    <Image
                                                        className="rounded-[50%] mr-[5px]"
                                                        src={
                                                            con.image === ""
                                                                ? "/images/default_profile.svg"
                                                                : `/images/${con.image}`
                                                        }
                                                        alt={`${con.firstName} ${con.lastName}`}
                                                        width={25}
                                                        height={25}
                                                    />
                                                    <p className="pl-[4px]">
                                                        {con.firstName} {con.lastName}
                                                    </p>
                                                </div>

                                                <svg
                                                    className="check ml-[8px] justify-self-end"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="12"
                                                    height="8"
                                                    viewBox="0 0 11 7"
                                                    fill="none">
                                                    <path
                                                        d="M1 3.5L4 6.5L10 0.5"
                                                        stroke="#0a5757"
                                                        strokeWidth="1"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Popup>
                        </div>
                        <div>{displayCons(selected)}</div>
                    </>
                );
            };
            return cons(selections[index].selected, selections[index].setSelected);
        }
    });

    const displayDrp = (selectedTypes: any, setSelectedTypes: any) => {
        return (
            <>
                <div className="grid grid-cols-[125px_1fr] w-[150px]">
                    <h3 className="inline-block">Contributors</h3>
                    <Popup
                        trigger={
                            <Button
                                className="w-[80px] md:w-[65px] text-[1.25rem] md:text-[1.1rem]"
                                color="primary">
                                +
                            </Button>
                        }
                        position={"bottom center"}>
                        <div className="popup">
                            {props.contributors.map((type: any, index: number) => {
                                return (
                                    <div
                                        className="popup-item grid grid-cols-[1fr_15px] items-center"
                                        onClick={(event) => {
                                            props.setContributors(
                                                props.contributors.map(
                                                    (con: any, tagIndex: number) => {
                                                        if (tagIndex === index) {
                                                            if (con.checked) {
                                                                con.checked = false;
                                                            } else con.checked = true;
                                                        }
                                                        return con;
                                                    }
                                                )
                                            );
                                        }}>
                                        <input
                                            type="checkbox"
                                            className="switch"
                                            checked={type.checked}
                                        />
                                        <p className="inline pl-[4px]">{type.name}</p>
                                        <svg
                                            className="check ml-[8px] justify-self-end"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="8"
                                            viewBox="0 0 11 7"
                                            fill="none">
                                            <path
                                                d="M1 3.5L4 6.5L10 0.5"
                                                stroke="#0a5757"
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                );
                            })}
                        </div>
                    </Popup>
                </div>
                <div className="w-[185px] ml-[10px]">{contributors}</div>
            </>
        );
    };
    return displayDrp(selectedTypes, setSelectedTypes);
}
