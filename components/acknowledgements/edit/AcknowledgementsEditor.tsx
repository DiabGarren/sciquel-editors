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
        let contributors: any[] = [];
        props.contributors.forEach((type: Type) => {
            if (type.checked) {
                type.contributors.forEach((con: Contributor) => {
                    if (con.checked && !contributors.includes(con.name)) {
                        contributors.push(con.name);
                        let imageSrc = "default_profile.svg";
                        if (con.image !== "") imageSrc = con.image;
                        types.push(
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
                                                const contributors =
                                                    t.contributors.map(
                                                        (c: Contributor) => {
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
                                                    verb: t.verb,
                                                    contributors: contributors,
                                                    checked: t.checked,
                                                };
                                            })
                                        );
                                    }}
                                />
                            </div>
                        );
                    }
                });
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
