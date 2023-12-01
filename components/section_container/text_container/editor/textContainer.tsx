/* eslint-disable react/jsx-key */
import { TrashIcon } from "@heroicons/react/20/solid";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function TextContainerEditor(props: any) {
    if (props.section[props.index].type === "sectionHeader") {
        return (
            <div className="border border-grey-light-1 rounded-box p-[7px] my-[7px]">
                <div className="flex p-[10px]">
                    <h3>Section Header</h3>
                    <TrashIcon
                        className="trash-icon ml-auto md:ml-[15px]"
                        onClick={() => {
                            const sections: any[] = [];
                            props.section.forEach((section: any, index: number) => {
                                if (index !== props.index) sections.push(section);
                            });
                            props.setSection(sections);
                        }}
                    />
                </div>
                <ReactQuill
                    className="text-editor"
                    theme="snow"
                    value={props.section[props.index].text}
                    onChange={(event) => {
                        props.setSection(
                            props.section.map((section: any, sIndex: number) => {
                                if (sIndex === props.index) {
                                    section.text = event;
                                }
                                return section;
                            })
                        );
                    }}
                    modules={{
                        toolbar: [
                            ["bold", "italic", "underline", "strike"],
                            // ["blockquote", "code-block"],
                            [{ list: "bullet" }],
                            [{ color: [] }, { background: [] }],
                            // ["link"],
                            ["clean"],
                        ],
                    }}
                />
            </div>
        );
    } else {
        return (
            <div className="border border-grey-light-1 rounded-box p-[7px] my-[7px]">
                <div className="flex p-[10px]">
                    <h3>Text</h3>
                    <TrashIcon
                        className="trash-icon ml-auto md:ml-[15px]"
                        onClick={() => {
                            const sections: any[] = [];
                            props.section.forEach((section: any, index: number) => {
                                if (index !== props.index) sections.push(section);
                            });
                            props.setSection(sections);
                        }}
                    />
                </div>
                <ReactQuill
                    className="text-editor"
                    theme="snow"
                    value={props.section[props.index].text}
                    onChange={(event) => {
                        props.setSection(
                            props.section.map((section: any, sIndex: number) => {
                                if (sIndex === props.index) {
                                    section.text = event;
                                }
                                return section;
                            })
                        );
                    }}
                    modules={{
                        toolbar: [
                            ["bold", "italic", "underline", "strike"],
                            ["blockquote", "code-block"],
                            [{ list: "bullet" }, { list: "ordered" }],
                            [{ color: [] }, { background: [] }],
                            ["link"],
                            ["clean"],
                        ],
                    }}
                />
            </div>
        );
    }
}
