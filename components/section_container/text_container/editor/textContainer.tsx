/* eslint-disable react/jsx-key */
import { TrashIcon } from "@heroicons/react/20/solid";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function TextContainerEditor(props: any) {
    return (
        <div className="border border-grey-light-1 rounded-md p-[10px]">
            <div className="flex">
                <h3>Text</h3>
                <TrashIcon
                    className="trash-icon ml-[10px]"
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
                className="text-editor w-[100%]"
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
