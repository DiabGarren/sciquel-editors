import parse from "html-react-parser";

export default function TextContainerPreview(props: any) {
    if (props.section[props.index].type === "sectionHeader") {
        return (
            <h3 className="text-container break-words">{parse(props.section[props.index].text)}</h3>
        );
    } else {
        if (props.dictionary.length > 0) {
            let text = props.section[props.index].text;
            const tags = [...text.matchAll(/<[^>]+>/g)];
            let plainText = text.replace(/<[^>]+>/g, "†");

            const defIndexs = props.dictionary.map((def: any, index: number) => {
                if (def.word === "") {
                    return [-1, ""];
                }
                return [plainText.indexOf(def.word), def.word];
            });
            defIndexs.sort();

            let newIndex = 0;
            defIndexs.forEach((defIndex: any[], index: number) => {
                if (defIndex[0] !== -1) {
                    if (index > 0) {
                        for (let i = 0; i < index; i++) {
                            if (defIndexs[i][1].length > 0) {
                                // Length of inserted span
                                newIndex += 113 + i.toString().length;
                            }
                        }
                    }
                    plainText =
                        plainText.substring(0, defIndex[0] + newIndex) +
                        `<span className="text-teal-dark bg-teal-light-2 border border-teal-light-1 px-[2px] rounded">${
                            defIndex[1]
                        }<sup>[${index + 1}]</sup></span>` +
                        plainText.substring(defIndex[0] + newIndex + defIndex[1].length);
                }
            });

            tags.forEach((tag: any) => {
                plainText = plainText.replace("†", tag[0]);
            });

            return (
                <div className="text-container break-words w-[500px] mx-auto ">
                    {parse(plainText)}
                </div>
            );
        }
        return (
            <div className="text-container break-words w-[500px] mx-auto">
                {parse(props.section[props.index].text)}
            </div>
        );
    }
}
