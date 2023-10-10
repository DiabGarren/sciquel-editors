/* eslint-disable react/jsx-key */
import { alegreya_sans_sc } from "@/utils/fonts";
import { Contributor, Type } from "@/utils/types";
import Image from "next/image";
import { ReactElement } from "react";

export default function AcknowledgementsPreview(props: any) {
    const displayContributors = () => {
        const types = props.contributors.map((type: Type) => {
            if (type.checked) {
                const contributors = type.contributors.map(
                    (con: Contributor): ReactElement<any, any> => {
                        if (con.checked) {
                            let imageSrc = "default_profile.svg";
                            if (con.image !== "") imageSrc = con.image;

                            let message = `Acknowledgement for ${con.name}`;
                            if (con.message !== "") message = con.message;

                            return (
                                <div
                                    className="grid w-article mx-[auto] border border-grey-light rounded-[15px] p-[20px] mb-[15px]"
                                    style={{ gridTemplateColumns: "200px 1fr" }}
                                >
                                    <Image
                                        src={`/images/${imageSrc}`}
                                        alt={`${con.name} profile picture`}
                                        height={150}
                                        width={150}
                                        className="rounded-[50%]"
                                    />
                                    <div>
                                        <div
                                            className="mb-[15px]"
                                            style={{
                                                fontFamily:
                                                    alegreya_sans_sc.style
                                                        .fontFamily,
                                                fontWeight: "700",
                                            }}
                                        >
                                            <h2 className="text-cyan-dark text-[35px] leading-[35px]">
                                                {con.name}
                                            </h2>
                                            <h3 className="text-[23px] leading-[20px]">
                                                {type.name}
                                            </h3>
                                        </div>
                                        <p>{message}</p>
                                    </div>
                                </div>
                            );
                        } else return <></>;
                    }
                );
                return <div className="mb-[30px]">{contributors}</div>;
            } else return <></>;
        });
        return types;
    };
    return displayContributors();
}
