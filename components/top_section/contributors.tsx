import { TrashIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

/* eslint-disable react/jsx-key */
export default function Contributors(props: any) {
    const displayTypesDrp = () => {
        let input = (
            <div
                className="relative grid"
                style={{ gridTemplateColumns: "1fr 30px" }}
            >
                <input
                    className="Drp border w-[100%]"
                    placeholder="Contributor Type"
                />
                <button className="Drp plus-icon">+</button>
            </div>
        );

        let types = props.contributors.map((type: any, index: number) => {
            return (
                <div
                    className="Drp flex cursor-pointer hover:bg-blue-light"
                    onClick={() => {
                        props.setContributors(
                            props.contributors.map((t: any, i: number) => {
                                if (i === index) {
                                    if (t.checked) {
                                        t.checked = false;
                                        t.contributors = [];
                                    } else {
                                        t.checked = true;
                                        t.contributors =
                                            props.allContributors.map(
                                                (user: any) => {
                                                    return {
                                                        name: `${user.firstName} ${user.lastName}`,
                                                        image: user.image,
                                                        checked: false,
                                                    };
                                                }
                                            );
                                    }

                                    return t;
                                } else {
                                    return t;
                                }
                            })
                        );
                    }}
                >
                    <input
                        className="Drp switch"
                        type="checkbox"
                        checked={type.checked}
                    />
                    <p className="Drp">{type.name}</p>
                </div>
            );
        });

        return (
            <div className="drp conType-drp flex-col absolute w-[250px] rounded border bg-white z-10 hidden">
                {input}
                {types}
            </div>
        );
    };

    const displayTypeHolders = () => {
        const types = props.contributors.map((type: any, index: number) => {
            let cons = type.contributors.map((t: any, i: number) => {
                return (
                    <div
                        className="Drp flex cursor-pointer hover:bg-blue-light"
                        onClick={() => {
                            props.setContributors(
                                props.contributors.map(
                                    (Type: any, Index: number) => {
                                        if (Index === index) {
                                            let newCon = Type.contributors.map(
                                                (con: any, I: number) => {
                                                    if (I === i) {
                                                        if (con.checked)
                                                            con.checked = false;
                                                        else con.checked = true;
                                                    }
                                                    return con;
                                                }
                                            );

                                            return {
                                                name: Type.name,
                                                contributors: newCon,
                                                checked: Type.checked,
                                            };
                                        } else return Type;
                                    }
                                )
                            );
                        }}
                    >
                        <input
                            className="Drp switch"
                            type="checkbox"
                            checked={t.checked}
                        />
                        <p className="Drp">{t.name}</p>
                    </div>
                );
            });
            let tags = type.contributors.map((t: any, i: number) => {
                if (t.checked) {
                    let imageSrc = "default_profile.svg";
                    if (t.image !== "") {
                        imageSrc = `/images/${t.image}`;
                    }
                    return (
                        <div className="grid items-center my-[2px]" style={{gridTemplateColumns: "50px 1fr 25px"}}>
                            <Image
                                className="rounded-[50%]"
                                src={imageSrc}
                                alt={`${t.name} profile`}
                                width={50}
                                height={50}
                            />
                            <p className="mx-[5px]">{t.name}</p>
                            <TrashIcon
                                className="trash-icon"
                                aria-hidden="true"
                                onClick={() => {
                                    props.setContributors(
                                        props.contributors.map((Type: any) => {
                                            if (Type.name === type.name) {
                                                let newCon =
                                                    Type.contributors.map(
                                                        (
                                                            con: any,
                                                            index: any
                                                        ) => {
                                                            if (index === i) {
                                                                con.checked =
                                                                    false;
                                                            }
                                                            return con;
                                                        }
                                                    );
                                                return {
                                                    name: Type.name,
                                                    contributors: newCon,
                                                    checked: Type.checked,
                                                };
                                            } else return Type;
                                        })
                                    );
                                }}
                            />
                        </div>
                    );
                } else return <></>;
            });
            if (type.contributors.length > 0) {
                return (
                    <div className="relative mt-[20px] ml-[10px]">
                        <div
                            className="grid w-[165px]"
                            style={{ gridTemplateColumns: "1fr 25px 25px" }}
                        >
                            <h3 className="inline-block">{type.name}s</h3>
                            <button
                                className="plus-icon inline-block justify-right"
                                onClick={() =>
                                    props.handleDrp(`.${type.name}-drp`)
                                }
                            >
                                +
                            </button>
                            <TrashIcon
                                className="trash-icon"
                                aria-hidden="true"
                                onClick={() => {
                                    props.setContributors(
                                        props.contributors.map((Type: any) => {
                                            if (Type.name === type.name) {
                                                Type.checked = false;
                                                Type.contributors = [];
                                                return Type;
                                            } else return Type;
                                        })
                                    );
                                }}
                            />
                        </div>
                        <div
                            className={`drp ${type.name}-drp flex-col absolute w-[250px] rounded border bg-white z-10 hidden`}
                        >
                            <div
                                className="relative grid"
                                style={{ gridTemplateColumns: "1fr 30px" }}
                            >
                                <input
                                    className="Drp border w-[100%]"
                                    placeholder="Contributor Type"
                                />
                                <button className="Drp plus-icon">+</button>
                            </div>
                            {cons}
                        </div>
                        <div className="w-[200px]">{tags}</div>
                    </div>
                );
            } else {
                return <></>;
            }
        });

        return <>{types}</>;
    };

    return (
        <div className="relative w-[250px]">
            <div
                className="grid w-[150px]"
                style={{ gridTemplateColumns: "1fr 25px" }}
            >
                <h3 className="inline-block">Contributors</h3>
                <button
                    className="plus-icon inline-block justify-right"
                    onClick={() => props.handleDrp(`.conType-drp`)}
                >
                    +
                </button>
            </div>
            {displayTypesDrp()}
            {displayTypeHolders()}
        </div>
    );
}
