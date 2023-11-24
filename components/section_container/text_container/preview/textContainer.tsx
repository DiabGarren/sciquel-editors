import parse from "html-react-parser";
import Popup from "reactjs-popup";

export default function TextContainerPreview(props: any) {
    if (props.section[props.index].type === "sectionHeader") {
        return (
            <h3 className="text-container break-words">{parse(props.section[props.index].text)}</h3>
        );
    } else {
        if (props.dictionary.length > 0) {
            // let text = <></>;

            // props.dictionary.map((def: any) => {
            //     if (def.word !== "") {
            //         text = (
            //             <>
            //                 {parse(
            //                     props.section[props.index].text.substring(
            //                         0,
            //                         props.section[props.index].text.indexOf(def.word)
            //                     )
            //                 )}
            //                 <Popup
            //                     trigger={
            //                         <button className="text-teal-dark bg-teal-light-2 border border-teal-light-1 px-[2px] rounded">
            //                             {def.word}
            //                         </button>
            //                     }>
            //                     {def.word}
            //                 </Popup>
            //                 {parse(
            //                     props.section[props.index].text.substring(
            //                         props.section[props.index].text.indexOf(def.word) +
            //                             def.word.length
            //                     )
            //                 )}
            //             </>
            //         );
            //     }
            // });

            // return (
            //     <div className="text-container break-words w-[500px] mx-auto ">{text}</div>
            // );

            let text = props.section[props.index].text;
            const tags = [...text.matchAll(/<[^>]+>/g)];
            console.log(tags);

            props.dictionary.map((def: any, index: number) => {
                if (def.word !== "" && text.indexOf(def.word) !== -1) {
                    if (
                        text.indexOf(def.word) >= tags[0].index &&
                        text.indexOf(def.word) <= tags[0].index + tags[0][0].length
                    ) {
                        text = `${text.substring(
                            0,
                            text.indexOf(def.word, tags[1].index + tags[1][0].length)
                        )}<span className="text-teal-dark bg-teal-light-2 border border-teal-light-1 px-[2px] rounded">${
                            def.word
                        }
                    <sup className="">[${index + 1}]</sup></span>${text.substring(
                            text.indexOf(def.word, tags[1].index + tags[1][0].length) +
                                def.word.length
                        )}`;
                    } else {
                        text = `${text.substring(
                            0,
                            text.indexOf(def.word)
                        )}<span className="text-teal-dark bg-teal-light-2 border border-teal-light-1 px-[2px] rounded">${
                            def.word
                        }
                    <sup className="">[${index + 1}]</sup></span>${text.substring(
                            text.indexOf(def.word) + def.word.length
                        )}`;
                    }
                }
            });

            return (
                <div className="text-container break-words w-[500px] mx-auto ">{parse(text)}</div>
            );
        }
        return (
            <div className="text-container break-words w-[500px] mx-auto">
                {parse(props.section[props.index].text)}
            </div>
        );
    }
}
