/* eslint-disable react/jsx-key */
import { TrashIcon } from "@heroicons/react/20/solid";
import { Button } from "@nextui-org/react";
import Popup from "reactjs-popup";

const partsOfSpeech = [
    { name: "noun", abbr: "n." },
    { name: "adjective", abbr: "adj." },
    { name: "verb", abbr: "v." },
    { name: "adverb", abbr: "adv." },
    { name: "pronoun", abbr: "pron." },
    { name: "preposition", abbr: "prep." },
    { name: "conjunction", abbr: "conj." },
    { name: "interjection", abbr: "interj." },
];
export default function DictionaryContainerEditor(props: any) {
    return (
        <div className="border border-grey-light-1 rounded-lr p-[7px]">
            <h3 className="border border-grey-light-1 rounded-box p-[15px] mb-[10px]">
                Dictionary
            </h3>

            {props.dictionary.map((def: any, index: number) => {
                return (
                    <div className="grid grid-cols-[1fr_40px] md:grid-cols-[1fr_200px_40px] border border-grey-light-1 rounded-md my-[7px] p-[7px]">
                        <h4 className="col-[1] text-[18px] p-[10px]">
                            {def.word == "" ? "Word" : def.word}
                        </h4>
                        <input
                            type="text"
                            className="col-[1/3] md:col-[1] border border-grey-light rounded w-[100%] md:w-[90%] mb-[5px]"
                            placeholder="Word"
                            value={def.word}
                            onChange={(event) => {
                                props.setDictionary(
                                    props.dictionary.map((def: any, defIndex: number) => {
                                        if (defIndex === index) {
                                            def.word = event.target.value;
                                        }
                                        return def;
                                    })
                                );
                            }}
                        />
                        <Popup
                            trigger={
                                <div className="popup-select col-[1/3] md:col-[2] md:row-[1/3] mb-[5px]">
                                    <p className="text-[16px]">Part of Speech</p>
                                    <div className="flex">
                                        <p className="text-teal">{def.partOfSpeech.name}</p>
                                        <input
                                            type="checkbox"
                                            className="hidden first:[&~svg_path]:checked:hidden last:[&~svg_path]:checked:inline"
                                        />
                                        <svg
                                            className="ml-auto mr-[5px]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="15"
                                            height="9"
                                            viewBox="0 0 14 8"
                                            fill="none">
                                            <path
                                                className=""
                                                d="M1 1L7 7L13 1"
                                                stroke="#109191"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                            <path
                                                className="hidden"
                                                d="M13 7L7 1L1 7"
                                                stroke="#109191"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            }
                            position="bottom right"
                            closeOnDocumentClick={false}
                            closeOnEscape={false}
                            onOpen={(event: any) => {
                                let parent = event.target;
                                if (parent.classList.contains("popup-select")) {
                                    parent.childNodes[1].childNodes[1].checked = true;
                                } else {
                                    parent = event.target.parentNode;
                                    if (parent.classList.contains("popup-select")) {
                                        parent.childNodes[1].childNodes[1].checked = true;
                                    } else {
                                        parent = event.target.parentNode.parentNode;
                                        if (parent.classList.contains("popup-select")) {
                                            parent.childNodes[1].childNodes[1].checked = true;
                                        } else {
                                            parent = event.target.parentNode.parentNode.parentNode;
                                            if (parent.classList.contains("popup-select")) {
                                                parent.childNodes[1].childNodes[1].checked = true;
                                            }
                                        }
                                    }
                                }
                            }}
                            onClose={(event: any) => {
                                let parent = event.target;
                                if (parent.classList.contains("popup-select")) {
                                    parent.childNodes[1].childNodes[1].checked = false;
                                } else {
                                    parent = event.target.parentNode;
                                    if (parent.classList.contains("popup-select")) {
                                        parent.childNodes[1].childNodes[1].checked = false;
                                    } else {
                                        parent = event.target.parentNode.parentNode;
                                        if (parent.classList.contains("popup-select")) {
                                            parent.childNodes[1].childNodes[1].checked = false;
                                        } else {
                                            parent = event.target.parentNode.parentNode.parentNode;
                                            if (parent.classList.contains("popup-select")) {
                                                parent.childNodes[1].childNodes[1].checked = false;
                                            }
                                        }
                                    }
                                }
                            }}>
                            <div className="popup">
                                {partsOfSpeech.map((part: any) => {
                                    return (
                                        <div
                                            className="popup-item"
                                            onClick={() => {
                                                props.setDictionary(
                                                    props.dictionary.map(
                                                        (def: any, defIndex: number) => {
                                                            if (defIndex === index) {
                                                                def.partOfSpeech.name = part.name;
                                                                def.partOfSpeech.abbr = part.abbr;
                                                            }
                                                            return def;
                                                        }
                                                    )
                                                );
                                            }}>
                                            {part.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </Popup>
                        <TrashIcon
                            className="trash-icon col-[2] md:col-[3] row-[1] md:row-[1/3] w-[30px] h-[27px] self-center ml-auto"
                            onClick={() => {
                                const defs: any[] = [];
                                props.dictionary.forEach((def: any, defIndex: number) => {
                                    if (defIndex !== index) defs.push(def);
                                });
                                props.setDictionary(defs);
                            }}
                        />
                        <h4 className="col-[1/2] md:col-[1]">Definition</h4>
                        <input
                            className="col-[1/4] border border-grey-light rounded mb-[5px]"
                            value={def.definition}
                            onChange={(event) => {
                                props.setDictionary(
                                    props.dictionary.map((def: any, defIndex: number) => {
                                        if (defIndex === index) {
                                            def.definition = event.target.value;
                                        }
                                        return def;
                                    })
                                );
                            }}
                        />
                        <h4>Example</h4>
                        <input
                            className="col-[1/4] border border-grey-light rounded"
                            value={def.example}
                            onChange={(event) => {
                                props.setDictionary(
                                    props.dictionary.map((def: any, defIndex: number) => {
                                        if (defIndex === index) {
                                            def.example = event.target.value;
                                        }
                                        return def;
                                    })
                                );
                            }}
                        />
                    </div>
                );
            })}
            <div className="md:w-[65px] mx-[auto]">
                <Button
                    className="w-[100%] text-[1.25rem] md:text-[1.1rem]"
                    variant="solid"
                    color="primary"
                    onClick={() => {
                        props.setDictionary([
                            ...props.dictionary,
                            {
                                word: "",
                                partOfSpeech: { name: "noun", abbr: "n." },
                                definition: "",
                                example: "",
                            },
                        ]);
                    }}>
                    +
                </Button>
            </div>
        </div>
    );
}
