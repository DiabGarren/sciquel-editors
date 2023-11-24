/* eslint-disable react/jsx-key */

export default function DictionaryContainerPreview(props: any) {
    if (props.dictionary.length > 0) {
        return (
            <div className="border border-grey-light-1 rounded-lr p-[7px]">
                <div className="border border-grey-light-1 rounded-md mb-[10px] p-[15px]">
                    <h3>Dictionary</h3>
                </div>
                {props.dictionary.map((def: any, index: number) => {
                    if (def.word !== "") {
                        return (
                            <div className="border border-grey-light-1 rounded-md mb-[10px] p-[15px]">
                                <h4>
                                    {def.word}
                                    <sup className="">{`[${index + 1}]`}</sup>
                                </h4>
                                <p>
                                    <i>{def.partOfSpeech.abbr}</i> {def.definition}
                                </p>
                                <p className="text-grey">ex. {`"${def.example}"`}</p>
                            </div>
                        );
                    }
                    return <></>;
                })}
            </div>
        );
    }
    return <></>;
}
