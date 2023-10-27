/* eslint-disable react/jsx-key */
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
const Editor = dynamic(() => import("react-draft-wysiwyg").then((module) => module.Editor), {
    ssr: false,
});
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function TextContainer(props: any) {
    return (
        <>
            <ReactQuill
                className="textEditor textContainer"
                theme="snow"
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
            <Editor
                wrapperClassName="richtext-wrapper"
                editorClassName="richtext-editor"
                toolbarClassName="richtext-toolbar"
                toolbar={{
                    options: ["inline", "blockType", "list", "colorPicker", "link", "remove"],
                    inline: {
                        inDropdown: false,
                        className: undefined,
                        component: undefined,
                        dropdownClassName: undefined,
                        options: ["bold", "italic", "underline", "strikethrough"],
                    },
                    blockType: {
                        inDropdown: true,
                        options: ["Normal", "Blockquote", "Code"],
                    },
                    list: {
                        inDropdown: false,
                        className: undefined,
                        component: undefined,
                        dropdownClassName: undefined,
                        options: ["ordered", "unordered"],
                    },
                    colorPicker: {
                        className: undefined,
                        component: undefined,
                        popupClassName: undefined,
                    },
                }}
                mention={{
                    separator: " ",
                    trigger: "@",
                    suggestions: props.allContributors.map((contributor: any) => {
                        return {
                            text: `${contributor.firstName} ${contributor.lastName}`,
                            value: `${contributor.firstName.toLowerCase()}${contributor.lastName}`,
                        };
                    }),
                }}
            />
        </>
    );
}
