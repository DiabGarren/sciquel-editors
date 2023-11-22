/* eslint-disable react/jsx-key */
import { TrashIcon } from "@heroicons/react/20/solid";
import { Button, Select, SelectItem } from "@nextui-org/react";

const partsOfSpeech = [
    { name: "noun" },
    { name: "adjective" },
    { name: "verb" },
    { name: "adverb" },
    { name: "pronoun" },
    { name: "preposition" },
    { name: "conjunction" },
    { name: "interjection" },
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
                            selectedKeys={[def.partOfSpeech]}>
                            {partsOfSpeech.map((part) => (
                                <SelectItem
                                    key={part.name}
                                    value={part.name}>
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
                        <textarea
                            className="col-[1/4] border border-grey-light rounded min-h-[100px] h-[100px]"
                            cols={30}
                            rows={10}></textarea>
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
                                partOfSpeech: "noun",
                                definition: "",
                            },
                        ]);
                    }}>
                    +
                </Button>
            </div>
        </div>
    );
}
