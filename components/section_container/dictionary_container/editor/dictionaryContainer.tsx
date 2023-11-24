/* eslint-disable react/jsx-key */
import { TrashIcon } from "@heroicons/react/20/solid";
import { Button, Select, SelectItem } from "@nextui-org/react";

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
                    <div className="grid grid-cols-[1fr_200px_40px] border border-grey-light-1 rounded-md my-[7px] p-[10px]">
                        <h4>{def.word == "" ? "Word" : "Word"}</h4>
                        <input
                            type="text"
                            className="border border-grey-light rounded px-[5px]"
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
                        <Select
                            className="col-[2] row-[1/3]"
                            color="primary"
                            label="Part of speech"
                            selectedKeys={[def.partOfSpeech.name]}
                            onChange={(event: any) => {
                                props.setDictionary(
                                    props.dictionary.map((def: any, defIndex: number) => {
                                        if (defIndex === index) {
                                            const pos = partsOfSpeech.findIndex(
                                                (i) => i.name === event.target.value
                                            );
                                            def.partOfSpeech.name = partsOfSpeech[pos].name;
                                            def.partOfSpeech.abbr = partsOfSpeech[pos].abbr;
                                        }
                                        return def;
                                    })
                                );
                            }}>
                            {partsOfSpeech.map((part) => (
                                <SelectItem
                                    key={part.name}
                                    value={part.abbr}>
                                    {part.name}
                                </SelectItem>
                            ))}
                        </Select>
                        <TrashIcon
                            className="trash-icon col-[3] row-[1/3] w-[30px] h-[27px] self-center ml-auto"
                            onClick={() => {
                                const defs: any[] = [];
                                props.dictionary.forEach((def: any, defIndex: number) => {
                                    if (defIndex !== index) defs.push(def);
                                });
                                props.setDictionary(defs);
                            }}
                        />
                        <h4>Definition</h4>
                        <input
                            className="col-[1/4] border border-grey-light rounded"
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
