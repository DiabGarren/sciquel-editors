/* eslint-disable react/jsx-key */
import { TrashIcon } from "@heroicons/react/20/solid";
import { Button, Select, SelectItem } from "@nextui-org/react";
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
            <h3 className="border border-grey-light-1 rounded-md p-[15px]">Dictionary</h3>

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
                                    <p className="text-[16px]">Part of speech</p>
                                    <div className="flex">
                                        <p className="text-teal">{def.partOfSpeech.name}</p>
                                        <svg
                                            className="text-teal ml-auto mr-[5px]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="15"
                                            height="9"
                                            viewBox="0 0 14 8"
                                            fill="none">
                                            <path
                                                d="M1 1L7 7L13 1"
                                                stroke="#109191"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            }
                            position="bottom left">
                            <div className="popup w-[268px] xsm:w-[323px] sm:mx-[12%] sm:w-[300px]">
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
            <div className="w-[60px] mx-[auto] mt-[7px]">
                <Button
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
