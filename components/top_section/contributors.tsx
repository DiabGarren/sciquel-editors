/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
"use client";

import { TrashIcon } from "@heroicons/react/20/solid";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

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
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        variant="solid"
                                        color="primary">
                                        +
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                    closeOnSelect={false}
                                    selectionMode="multiple"
                                    selectedKeys={selected}
                                    onSelectionChange={setSelected}
                                    onAction={(event) => {
                                        props.setContributors(
                                            props.contributors.map(
                                                (type: any, typeIndex: number) => {
                                                    if (typeIndex === index) {
                                                        props.allContributors.forEach(
                                                            (con: any) => {
                                                                if (con._id === event) {
                                                                    const selected = {
                                                                        id: con._id,
                                                                        name: `${con.firstName} ${con.lastName}`,
                                                                        image: con.image,
                                                                        message: "",
                                                                    };
                                                                    if (
                                                                        type.contributors.some(
                                                                            (e: any) =>
                                                                                e.id === event
                                                                        )
                                                                    ) {
                                                                        type.contributors.splice(
                                                                            type.contributors.indexOf(
                                                                                selected
                                                                            ),
                                                                            1
                                                                        );
                                                                    } else
                                                                        type.contributors.push(
                                                                            selected
                                                                        );
                                                                }
                                                            }
                                                        );
                                                    }
                                                    return type;
                                                }
                                            )
                                        );
                                    }}
                                    items={props.allContributors}>
                                    {(item: any) => (
                                        <DropdownItem key={item._id}>
                                            <div className="flex items-center">
                                                <Image
                                                    className="rounded-[50%] mr-[5px]"
                                                    src={
                                                        item.image === ""
                                                            ? "/images/default_profile.svg"
                                                            : `/images/${item.image}`
                                                    }
                                                    alt={`${item.firstName} ${item.lastName}`}
                                                    width={25}
                                                    height={25}
                                                />
                                                {`${item.firstName} ${item.lastName}`}
                                            </div>
                                        </DropdownItem>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
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
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant="solid"
                                color="primary">
                                +
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            closeOnSelect={false}
                            selectionMode="multiple"
                            selectedKeys={selectedTypes}
                            onSelectionChange={setSelectedTypes}
                            onAction={(event) => {
                                props.setContributors(
                                    props.contributors.map((type: any, index: number) => {
                                        if (type.name === event) {
                                            if (!type.checked) type.checked = true;
                                            else {
                                                type.checked = false;
                                                type.contributors = [];
                                                selections[index].selected.clear();
                                            }
                                        }
                                        return type;
                                    })
                                );
                            }}
                            items={props.contributors}>
                            {(item: any) => (
                                <DropdownItem key={item.name}>{item.name}</DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="w-[185px] ml-[10px]">{contributors}</div>
            </>
        );
    };
    return displayDrp(selectedTypes, setSelectedTypes);
}
