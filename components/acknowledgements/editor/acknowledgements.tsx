/* eslint-disable react/jsx-key */
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
        props.contributors.forEach((type: any) => {
            if (type.checked) {
                type.contributors.forEach((con: any) => {
                    if (!contributors.some((e: any) => e.id === con.id)) {
                        contributors.push(con);
                        let imageSrc = "default_profile.svg";
                        if (con.image !== "") imageSrc = con.image;
                        types.push(
                            <div className="acknowledgements">
                                <div className="flex items-center mb-[2px]">
                                    <Image
                                        src={`/images/${imageSrc}`}
                                        alt={`${con.name} profile picture`}
                                        height={40}
                                        width={40}
                                        className="rounded-[50%] mr-[5px]"
                                    />
                                    {con.name}
                                </div>
                                <ReactQuill
                                    className="text-editor"
                                    theme="snow"
                                    modules={modules}
                                    value={con.message}
                                    onChange={(event) => {
                                        props.setContributors(
                                            props.contributors.map((t: any) => {
                                                const contributors = t.contributors.map(
                                                    (c: any) => {
                                                        if (c.name === con.name) {
                                                            c.message = event;
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
                <div className="border border-grey-light-1 p-[7px] rounded-lr">
                    <h3 className="border border-grey-light-1 p-[15px] rounded-box mb-[10px]">
                        Acknowledgements
                    </h3>
                    <div className="border border-grey-light-1 rounded-box">{types}</div>
                </div>
            );
        } else return <></>;
    };

    return displayContributors();
}
