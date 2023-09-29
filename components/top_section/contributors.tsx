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
                                                (T: any, I: number) => {
                                                    if (I === i) {
                                                        if (T.checked)
                                                            T.checked = false;
                                                        else T.checked = true;

                                                        return T;
                                                    } else return T;
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
            if (type.contributors.length > 0) {
                return (
                    <div className="relative my-[10px]">
                        <div
                            className="grid w-[130px]"
                            style={{ gridTemplateColumns: "1fr 25px" }}
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
                    </div>
                );
            } else {
                return <></>;
            }
        });

        return <>{types}</>;
    };

    return (
        <div className="relative my-[10px] w-[250px]">
            <div
                className="grid w-[130px]"
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
