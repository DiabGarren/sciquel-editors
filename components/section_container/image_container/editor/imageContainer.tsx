import { UploadButton } from "@/utils/uploadthing";
import { TrashIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@nextui-org/react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function ImageContainerEditor(props: any) {
    return (
        <div className="border border-grey-light-1 rounded-box p-[7px] mb-[7px]">
            <div className="flex p-[10px]">
                <h3>Image</h3>
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
            <div className="flex space-x-3 mb-[7px] justify-center">
                <button
                    className={`p-[5px] rounded ${
                        props.section[props.index].pos === "left" ? "bg-white" : "bg-teal"
                    }`}
                    onClick={() => {
                        props.setSection(
                            props.section.map((section: any, index: number) => {
                                if (index === props.index) {
                                    section.pos = "left";
                                }
                                return section;
                            })
                        );
                    }}>
                    <svg
                        className="w-[50px] h-[36px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="81"
                        height="59"
                        viewBox="0 0 81 59"
                        fill="none">
                        <path
                            d="M79 15.5H50C48.8954 15.5 48 16.3954 48 17.5V26.5C48 27.6046 48.8954 28.5 50 28.5H79C80.1046 28.5 81 27.6046 81 26.5V17.5C81 16.3954 80.1046 15.5 79 15.5Z"
                            fill="black"
                        />
                        <path
                            d="M79 0H50C48.8954 0 48 0.895431 48 2V11C48 12.1046 48.8954 13 50 13H79C80.1046 13 81 12.1046 81 11V2C81 0.895431 80.1046 0 79 0Z"
                            fill="black"
                        />
                        <path
                            d="M79 46H50C48.8954 46 48 46.8954 48 48V57C48 58.1046 48.8954 59 50 59H79C80.1046 59 81 58.1046 81 57V48C81 46.8954 80.1046 46 79 46Z"
                            fill="black"
                        />
                        <path
                            d="M78.937 31H49.937C48.8324 31 47.937 31.8954 47.937 33V42C47.937 43.1046 48.8324 44 49.937 44H78.937C80.0416 44 80.937 43.1046 80.937 42V33C80.937 31.8954 80.0416 31 78.937 31Z"
                            fill="black"
                        />
                        <path
                            d="M0 2C0 0.89543 0.895431 0 2 0H42C43.1046 0 44 0.895431 44 2V57C44 58.1046 43.1046 59 42 59H2C0.895431 59 0 58.1046 0 57V2Z"
                            fill="black"
                        />
                    </svg>
                </button>
                <button
                    className={`p-[5px] rounded ${
                        props.section[props.index].pos === "center" ? "bg-white" : "bg-teal"
                    }`}
                    onClick={() => {
                        props.setSection(
                            props.section.map((section: any, index: number) => {
                                if (index === props.index) {
                                    section.pos = "center";
                                }
                                return section;
                            })
                        );
                    }}>
                    <svg
                        className="w-[50px] h-[36px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="81"
                        height="59"
                        viewBox="0 0 81 59"
                        fill="none">
                        <path
                            d="M79 0H2C0.895431 0 0 0.895431 0 2V27.5C0 28.6046 0.895431 29.5 2 29.5H79C80.1046 29.5 81 28.6046 81 27.5V2C81 0.89543 80.1046 0 79 0Z"
                            fill="black"
                        />
                        <path
                            d="M79 59H2C0.895431 59 0 58.1046 0 57V50C0 48.8954 0.895429 48 2 48H79C80.1046 48 81 48.8954 81 50V57C81 58.1046 80.1046 59 79 59Z"
                            fill="black"
                        />
                        <path
                            d="M79 33.5H2C0.895431 33.5 0 34.3954 0 35.5V43C0 44.1046 0.895431 45 2 45H79C80.1046 45 81 44.1046 81 43V35.5C81 34.3954 80.1046 33.5 79 33.5Z"
                            fill="black"
                        />
                    </svg>
                </button>
                <button
                    className={`p-[5px] rounded ${
                        props.section[props.index].pos === "right" ? "bg-white" : "bg-teal"
                    }`}
                    onClick={() => {
                        props.setSection(
                            props.section.map((section: any, index: number) => {
                                if (index === props.index) {
                                    section.pos = "right";
                                }
                                return section;
                            })
                        );
                    }}>
                    <svg
                        className="w-[50px] h-[36px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="81"
                        height="59"
                        viewBox="0 0 81 59"
                        fill="none">
                        <path
                            d="M2 15.5H31C32.1046 15.5 33 16.3954 33 17.5V26.5C33 27.6046 32.1046 28.5 31 28.5H2C0.895432 28.5 0 27.6046 0 26.5V17.5C0 16.3954 0.895432 15.5 2 15.5Z"
                            fill="black"
                        />
                        <path
                            d="M2 0H31C32.1046 0 33 0.895431 33 2V11C33 12.1046 32.1046 13 31 13H2C0.895432 13 0 12.1046 0 11V2C0 0.895431 0.895432 0 2 0Z"
                            fill="black"
                        />
                        <path
                            d="M2 46H31C32.1046 46 33 46.8954 33 48V57C33 58.1046 32.1046 59 31 59H2C0.895432 59 0 58.1046 0 57V48C0 46.8954 0.895432 46 2 46Z"
                            fill="black"
                        />
                        <path
                            d="M2.06301 31H31.063C32.1676 31 33.063 31.8954 33.063 33V42C33.063 43.1046 32.1676 44 31.063 44H2.06301C0.958443 44 0.0630112 43.1046 0.0630112 42V33C0.0630112 31.8954 0.958443 31 2.06301 31Z"
                            fill="black"
                        />
                        <path
                            d="M81 2C81 0.89543 80.1046 0 79 0H39C37.8954 0 37 0.895431 37 2V57C37 58.1046 37.8954 59 39 59H79C80.1046 59 81 58.1046 81 57V2Z"
                            fill="black"
                        />
                    </svg>
                </button>
            </div>
            {(() => {
                switch (props.section[props.index].pos) {
                    case "left":
                        return (
                            <div className="md:grid md:grid-cols-2 md:gap-[7px]">
                                <div className="border border-grey-light-1 rounded-box p-[7px] mb-[7px] md:mb-0">
                                    <h4 className="text-[18px] w-[100%] p-[10px]">Image</h4>
                                    <UploadButton
                                        appearance={{
                                            button: "border-2 border-teal bg-teal rounded-[10px] hover:bg-white hover:text-teal",
                                            container: "block w-fit mt-[7px]",
                                            allowedContent: "text-center",
                                        }}
                                        endpoint="imageUploader"
                                        onClientUploadComplete={(res) => {
                                            console.log("Files: ", res);
                                            if (res) {
                                                props.setSection(
                                                    props.section.map(
                                                        (section: any, index: number) => {
                                                            if (index === props.index) {
                                                                section.imageUrl = res[0].url;
                                                            }
                                                            return section;
                                                        }
                                                    )
                                                );
                                            }
                                            alert("Upload Completed");
                                        }}
                                        onUploadError={(error: Error) => {
                                            alert(`Error: ${error.message}`);
                                        }}
                                    />
                                    <h4>Alt text</h4>
                                    <input
                                        className="border border-grey-light rounded w-[100%] mb-[2px]"
                                        placeholder="Image Alt Text"
                                        value={props.section[props.index].altText}
                                        onChange={(event) => {
                                            props.setSection(
                                                props.section.map((section: any, index: number) => {
                                                    if (index === props.index) {
                                                        section.altText = event.target.value;
                                                    }
                                                    return section;
                                                })
                                            );
                                        }}
                                    />
                                    <h4>Width</h4>
                                    <input
                                        className="border border-grey-light rounded w-[100%] mb-[2px]"
                                        type="number"
                                        placeholder="300"
                                        value={props.section[props.index].width || ""}
                                        onChange={(event) => {
                                            props.setSection(
                                                props.section.map((section: any, index: number) => {
                                                    if (index === props.index) {
                                                        section.width = event.target.value;
                                                    }
                                                    return section;
                                                })
                                            );
                                        }}
                                    />
                                    <h4>Credit</h4>
                                    <input
                                        className="border border-grey-light rounded w-[100%]"
                                        placeholder="Image Credit"
                                        value={props.section[props.index].credit}
                                        onChange={(event) => {
                                            props.setSection(
                                                props.section.map((section: any, index: number) => {
                                                    if (index === props.index) {
                                                        section.credit = event.target.value;
                                                    }
                                                    return section;
                                                })
                                            );
                                        }}
                                    />
                                </div>
                                <div className="border border-grey-light-1 rounded-box p-[7px]">
                                    <h4 className="text-[18px] w-[100%] p-[10px]">Caption</h4>
                                    <ReactQuill
                                        className="text-editor image-text-editor mb-[2px]"
                                        theme="snow"
                                        value={props.section[props.index].caption}
                                        onChange={(event) => {
                                            props.setSection(
                                                props.section.map(
                                                    (section: any, sIndex: number) => {
                                                        if (sIndex === props.index) {
                                                            section.caption = event;
                                                        }
                                                        return section;
                                                    }
                                                )
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
                                    <h4>Wrap Text</h4>
                                    <RadioGroup
                                        orientation="horizontal"
                                        value={props.section[props.index].wrap}
                                        onValueChange={(event) => {
                                            props.setSection(
                                                props.section.map((section: any, index: number) => {
                                                    if (index === props.index) {
                                                        section.wrap = event;
                                                    }
                                                    return section;
                                                })
                                            );
                                        }}>
                                        <Radio value={"true"}>True</Radio>
                                        <Radio value={"false"}>False</Radio>
                                    </RadioGroup>
                                </div>
                            </div>
                        );
                    case "center":
                        return (
                            <div className="border border-grey-light-1 rounded-box p-[7px]">
                                <UploadButton
                                    appearance={{
                                        button: "border-2 border-teal bg-teal rounded-[10px] hover:bg-white hover:text-teal",
                                        container: "block w-fit mt-[7px] mx-auto",
                                        allowedContent: "text-center",
                                    }}
                                    endpoint="imageUploader"
                                    onClientUploadComplete={(res) => {
                                        console.log("Files: ", res);
                                        if (res) {
                                            props.setSection(
                                                props.section.map((section: any, index: number) => {
                                                    if (index === props.index) {
                                                        section.imageUrl = res[0].url;
                                                    }
                                                    return section;
                                                })
                                            );
                                        }
                                        alert("Upload Completed");
                                    }}
                                    onUploadError={(error: Error) => {
                                        alert(`Error: ${error.message}`);
                                    }}
                                />
                                <h4>Alt text</h4>
                                <input
                                    className="border border-grey-light rounded w-[100%] mb-[2px]"
                                    placeholder="Image Alt Text"
                                    value={props.section[props.index].altText}
                                    onChange={(event) => {
                                        props.setSection(
                                            props.section.map((section: any, index: number) => {
                                                if (index === props.index) {
                                                    section.altText = event.target.value;
                                                }
                                                return section;
                                            })
                                        );
                                    }}
                                />
                                <h4>Caption</h4>
                                <ReactQuill
                                    className="text-editor mb-[2px]"
                                    theme="snow"
                                    value={props.section[props.index].caption}
                                    onChange={(event) => {
                                        props.setSection(
                                            props.section.map((section: any, sIndex: number) => {
                                                if (sIndex === props.index) {
                                                    section.caption = event;
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
                                <h4>Credit</h4>
                                <input
                                    className="border border-grey-light rounded w-[100%]"
                                    placeholder="Image Credit"
                                    value={props.section[props.index].crefit}
                                    onChange={(event) => {
                                        props.setSection(
                                            props.section.map((section: any, index: number) => {
                                                if (index === props.index) {
                                                    section.credit = event.target.value;
                                                }
                                                return section;
                                            })
                                        );
                                    }}
                                />
                            </div>
                        );
                    case "right":
                        return (
                            <div className="md:grid md:grid-cols-2 md:gap-[7px]">
                                <div className="border border-grey-light-1 rounded-box p-[7px] mb-[7px] md:mb-0">
                                    <h4 className="text-[18px] w-[100%] p-[10px]">Caption</h4>
                                    <ReactQuill
                                        className="text-editor image-text-editor mb-[2px]"
                                        theme="snow"
                                        value={props.section[props.index].caption}
                                        onChange={(event) => {
                                            props.setSection(
                                                props.section.map(
                                                    (section: any, sIndex: number) => {
                                                        if (sIndex === props.index) {
                                                            section.caption = event;
                                                        }
                                                        return section;
                                                    }
                                                )
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
                                    <h4>Wrap Text</h4>
                                    <RadioGroup
                                        orientation="horizontal"
                                        value={props.section[props.index].wrap}
                                        onValueChange={(event) => {
                                            props.setSection(
                                                props.section.map((section: any, index: number) => {
                                                    if (index === props.index) {
                                                        section.wrap = event;
                                                    }
                                                    return section;
                                                })
                                            );
                                        }}>
                                        <Radio value={"true"}>True</Radio>
                                        <Radio value={"false"}>False</Radio>
                                    </RadioGroup>
                                </div>
                                <div className="border border-grey-light-1 rounded-box p-[7px]">
                                    <h4 className="text-[18px] w-[100%] p-[10px]">Image</h4>
                                    <UploadButton
                                        appearance={{
                                            button: "border-2 border-teal bg-teal rounded-[10px] hover:bg-white hover:text-teal",
                                            container: "block w-fit mt-[7px]",
                                            allowedContent: "text-center",
                                        }}
                                        endpoint="imageUploader"
                                        onClientUploadComplete={(res) => {
                                            console.log("Files: ", res);
                                            if (res) {
                                                props.setSection(
                                                    props.section.map(
                                                        (section: any, index: number) => {
                                                            if (index === props.index) {
                                                                section.imageUrl = res[0].url;
                                                            }
                                                            return section;
                                                        }
                                                    )
                                                );
                                            }
                                            alert("Upload Completed");
                                        }}
                                        onUploadError={(error: Error) => {
                                            alert(`Error: ${error.message}`);
                                        }}
                                    />
                                    <h4>Alt text</h4>
                                    <input
                                        className="border border-grey-light rounded w-[100%] mb-[2px]"
                                        placeholder="Image Alt Text"
                                        value={props.section[props.index].altText}
                                        onChange={(event) => {
                                            props.setSection(
                                                props.section.map((section: any, index: number) => {
                                                    if (index === props.index) {
                                                        section.altText = event.target.value;
                                                    }
                                                    return section;
                                                })
                                            );
                                        }}
                                    />
                                    <h4>Width</h4>
                                    <input
                                        className="border border-grey-light rounded w-[100%] mb-[2px]"
                                        type="number"
                                        placeholder="300"
                                        value={props.section[props.index].width || ""}
                                        onChange={(event) => {
                                            props.setSection(
                                                props.section.map((section: any, index: number) => {
                                                    if (index === props.index) {
                                                        section.width = event.target.value;
                                                    }
                                                    return section;
                                                })
                                            );
                                        }}
                                    />
                                    <h4>Credit</h4>
                                    <input
                                        className="border border-grey-light rounded w-[100%]"
                                        placeholder="Image Credit"
                                        value={props.section[props.index].credit}
                                        onChange={(event) => {
                                            props.setSection(
                                                props.section.map((section: any, index: number) => {
                                                    if (index === props.index) {
                                                        section.credit = event.target.value;
                                                    }
                                                    return section;
                                                })
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        );
                }
            })()}
        </div>
    );
}
