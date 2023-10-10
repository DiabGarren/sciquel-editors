/* eslint-disable react/jsx-key */
import { Contributor, Type } from "@/utils/types";
import dynamic from "next/dynamic";
import Image from "next/image";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function AcknowledgementsEditor(props: any) {
    const toolbarOptions = ["bold", "italic", "underline", "strike"];
    const modules = { toolbar: toolbarOptions };

    const displayContributors = () => {
        const types: any[] = [];
        props.contributors.forEach((type: Type) => {
            if (type.checked) {
                let contributors: any[] = [];
                type.contributors.forEach((con: Contributor) => {
                    if (con.checked) {
                        let imageSrc = "default_profile.svg";
                        if (con.image !== "") imageSrc = con.image;
                        contributors.push(
                            <div className="mb-[10px]">
                                <div className="flex items-center my-[2px]">
                                    <Image
                                        src={`/images/${imageSrc}`}
                                        alt={`${con.name} profile picture`}
                                        height={40}
                                        width={40}
                                        className="rounded-[50%] mr-[5px]"
                                    />
                                    {con.name}:
                                </div>
                                <ReactQuill
                                    className="textEditor"
                                    theme="snow"
                                    modules={modules}
                                    value={con.message}
                                    onChange={(event) => {
                                        props.setContributors(
                                            props.contributors.map((t: any) => {
                                                if (t.name === type.name) {
                                                    const contributors =
                                                        t.contributors.map(
                                                            (
                                                                c: Contributor
                                                            ) => {
                                                                if (
                                                                    c.name ===
                                                                    con.name
                                                                ) {
                                                                    c.message =
                                                                        event;
                                                                }
                                                                return c;
                                                            }
                                                        );
                                                    return {
                                                        name: t.name,
                                                        contributors:
                                                            contributors,
                                                        checked: t.checked,
                                                    };
                                                }
                                                return t;
                                            })
                                        );
                                    }}
                                />
                            </div>
                        );
                    }
                });
                if (contributors.length > 0) {
                    types.push(
                        <div className="ml-[10px] mb-[15px]">
                            <h3>{type.name}s</h3>
                            {contributors}
                        </div>
                    );
                }
            }
        });
        if (types.length > 0) {
            return (
                <>
                    <h3>Acknowledgements</h3>
                    {types}
                </>
            );
        } else return <></>;
    };

    return displayContributors();
}
