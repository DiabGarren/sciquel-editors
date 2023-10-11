/* eslint-disable react/jsx-key */
"use client";

import { Contributor, Type, User } from "@/utils/types";
import { TrashIcon } from "@heroicons/react/20/solid";
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

export default function Contributors(props: any) {
    const [selectedTypes, setSelectedTypes] = useState(new Set<string>());
    const [selectedAnimators, setSelectedAnimators] = useState(
        new Set<string>()
    );
    const [selectedAuthors, setSelectedAuthors] = useState(new Set<string>());
    const [selectedIllustrators, setSelectedIllustrators] = useState(
        new Set<string>()
    );

    const displayTypes = (
        selectedTypes: Set<string>,
        setSelectedTypes: Dispatch<SetStateAction<Set<string>>> | any,
        selectedAnimators: Set<string>,
        setSelectedAnimators: Dispatch<SetStateAction<Set<string>>> | any,
        selectedAuthors: Set<string>,
        setSelectedAuthors: Dispatch<SetStateAction<Set<string>>> | any,
        selectedIllustrators: Set<string>,
        setSelectedIllustrators: Dispatch<SetStateAction<Set<string>>> | any
    ) => {
        return (
            <div className="mb-[30px]">
                <div
                    className="grid w-[150px] mb-[10px] items-center"
                    style={{ gridTemplateColumns: "125px 1fr" }}
                >
                    <h3>Contributors</h3>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="solid" color="primary">
                                +
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Dynamic Actions"
                            variant="solid"
                            color="primary"
                            closeOnSelect={false}
                            selectionMode="multiple"
                            selectedKeys={selectedTypes}
                            onSelectionChange={setSelectedTypes}
                            items={props.contributors}
                        >
                            {(item: any) => (
                                <DropdownItem
                                    key={item.name}
                                    onClick={() => {
                                        props.setContributors(
                                            props.contributors.map(
                                                (type: Type) => {
                                                    if (
                                                        type.name === item.name
                                                    ) {
                                                        if (type.checked) {
                                                            type.contributors =
                                                                [];
                                                            type.checked =
                                                                false;
                                                            if (
                                                                type.name ===
                                                                "Animator"
                                                            )
                                                                selectedAnimators.clear();
                                                            if (
                                                                type.name ===
                                                                "Author"
                                                            )
                                                                selectedAuthors.clear();
                                                            if (
                                                                type.name ===
                                                                "Illustrator"
                                                            )
                                                                selectedIllustrators.clear();
                                                        } else {
                                                            type.contributors =
                                                                props.allContributors.map(
                                                                    (
                                                                        user: User
                                                                    ): Contributor => {
                                                                        return {
                                                                            name: `${user.firstName} ${user.lastName}`,
                                                                            image: user.image,
                                                                            message:
                                                                                "",
                                                                            checked:
                                                                                false,
                                                                        };
                                                                    }
                                                                );
                                                            type.checked = true;
                                                        }
                                                    }
                                                    return type;
                                                }
                                            )
                                        );
                                    }}
                                >
                                    {item.name}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="mb-[15px]">
                    {displayType(
                        "Author",
                        selectedTypes,
                        selectedAuthors,
                        setSelectedAuthors
                    )}
                </div>
                <div className="mb-[15px]">
                    {displayType(
                        "Animator",
                        selectedTypes,
                        selectedAnimators,
                        setSelectedAnimators
                    )}
                </div>
                <div className="mb-[15px]">
                    {displayType(
                        "Illustrator",
                        selectedTypes,
                        selectedIllustrators,
                        setSelectedIllustrators
                    )}
                </div>
            </div>
        );
    };

    const displayType = (
        title: string,
        selectedTypes: Set<string>,
        selectedContributors: Set<string>,
        setSelectedContributors: Dispatch<SetStateAction<Set<string>>> | any
    ) => {
        const type = props.contributors.map((type: Type) => {
            if (type.name === title && type.checked) {
                return (
                    <>
                        <div
                            className="grid w-[210px] ml-[10px] items-center"
                            style={{ gridTemplateColumns: "125px 60px 25px" }}
                        >
                            <h3>{title}s</h3>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button variant="solid" color="primary">
                                        +
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label="Dynamic Actions"
                                    variant="solid"
                                    color="primary"
                                    closeOnSelect={false}
                                    selectionMode="multiple"
                                    selectedKeys={selectedContributors}
                                    onSelectionChange={setSelectedContributors}
                                    items={type.contributors}
                                >
                                    {(item: Contributor | any) => (
                                        <DropdownItem
                                            key={item.name}
                                            onClick={() => {
                                                props.setContributors(
                                                    props.contributors.map(
                                                        (type: Type) => {
                                                            if (
                                                                type.name ===
                                                                title
                                                            ) {
                                                                const contributors:
                                                                    | Type
                                                                    | any =
                                                                    type.contributors.map(
                                                                        (
                                                                            con: Contributor
                                                                        ) => {
                                                                            if (
                                                                                con.name ===
                                                                                item.name
                                                                            ) {
                                                                                if (
                                                                                    con.checked
                                                                                )
                                                                                    con.checked =
                                                                                        false;
                                                                                else
                                                                                    con.checked =
                                                                                        true;
                                                                            }
                                                                            return con;
                                                                        }
                                                                    );
                                                                return {
                                                                    name: type.name,
                                                                    verb: type.verb,
                                                                    contributors:
                                                                        contributors,
                                                                    checked:
                                                                        true,
                                                                };
                                                            } else return type;
                                                        }
                                                    )
                                                );
                                            }}
                                        >
                                            {item.name}
                                        </DropdownItem>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                            <TrashIcon
                                className="trash-icon"
                                onClick={() => {
                                    props.setContributors(
                                        props.contributors.map((type: Type) => {
                                            if (
                                                type.name === title &&
                                                type.checked
                                            ) {
                                                selectedContributors.clear();
                                                type.contributors = [];
                                                type.checked = false;
                                                selectedTypes.delete(type.name);
                                            }
                                            return type;
                                        })
                                    );
                                }}
                            />
                        </div>
                        <div className="my-[2px] ml-[10px]">
                            {displayContributors(title, selectedContributors)}
                        </div>
                    </>
                );
            } else return <></>;
        });
        return type;
    };

    const displayContributors = (
        title: string,
        selectedContributors: Set<string>
    ) => {
        const type = props.contributors.map((type: Type) => {
            if (type.name === title && type.checked) {
                const contributors = type.contributors.map(
                    (con: Contributor, index: number) => {
                        if (con.checked) {
                            let imageSrc = "default_profile.svg";

                            if (con.image !== "") {
                                imageSrc = con.image;
                            }

                            return (
                                <div
                                    className="grid w-[210px] my-[2px] items-center"
                                    style={{
                                        gridTemplateColumns: "55px 1fr 25px",
                                    }}
                                >
                                    <Image
                                        src={`/images/${imageSrc}`}
                                        alt={`${con.name} profile picture`}
                                        height={50}
                                        width={50}
                                        className="rounded-[50%]"
                                    />
                                    <p>{con.name}</p>
                                    <TrashIcon
                                        className="trash-icon"
                                        onClick={() => {
                                            props.setContributors(
                                                props.contributors.map(
                                                    (type: Type) => {
                                                        if (
                                                            type.name ===
                                                                title &&
                                                            type.checked
                                                        ) {
                                                            const contributors =
                                                                type.contributors.map(
                                                                    (
                                                                        con: Contributor,
                                                                        i: number
                                                                    ) => {
                                                                        if (
                                                                            i ===
                                                                            index
                                                                        ) {
                                                                            con.checked =
                                                                                false;
                                                                            selectedContributors.delete(
                                                                                con.name
                                                                            );
                                                                        }
                                                                        return con;
                                                                    }
                                                                );
                                                            return {
                                                                name: type.name,
                                                                verb: type.verb,
                                                                contributors:
                                                                    contributors,
                                                                checked: true,
                                                            };
                                                        } else return type;
                                                    }
                                                )
                                            );
                                        }}
                                    />
                                </div>
                            );
                        } else return <></>;
                    }
                );
                return contributors;
            } else return <></>;
        });
        return type;
    };

    return displayTypes(
        selectedTypes,
        setSelectedTypes,
        selectedAnimators,
        setSelectedAnimators,
        selectedAuthors,
        setSelectedAuthors,
        selectedIllustrators,
        setSelectedIllustrators
    );
}
