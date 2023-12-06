/* eslint-disable react/jsx-key */
import { Button } from "@nextui-org/react";

export default function Publish(props: any) {
    return (
        <>
            <Button
                color="primary"
                onClick={() => {
                    let errors = [];
                    if (!props.heading || props.heading === "<p><br></p>") {
                        errors.push("Heading");
                    }
                    if (!props.subheading || props.subheading === "<p><br></p>") {
                        errors.push("Subheading");
                    }
                    if (!props.keywords) {
                        errors.push("Keywords");
                    }

                    if (errors.length) {
                        props.setError(errors);
                        window.scrollTo({
                            top: 0,
                            behavior: "auto",
                        });
                        return;
                    }

                    let missing = [];
                    if (!props.mediaType) {
                        missing.push("Media type");
                    }
                    if (!props.articleType) {
                        missing.push("Article type");
                    }
                    if (!props.topics.some((topic: any) => topic.checked)) {
                        missing.push("Topics");
                    }
                    if (!props.subtopics.some((subtopic: any) => subtopic.checked)) {
                        missing.push("Subtopics");
                    }
                    if (!props.subjects.some((subject: any) => subject.checked)) {
                        missing.push("Subjects");
                    }

                    if (missing.length) {
                        window.scrollTo({
                            top: 0,
                            behavior: "auto",
                        });
                        props.setMissing(missing);
                        return;
                    }

                    if (props.missing.length === 0 && props.error.length === 0) {
                        // props.submit().then((res: any) => {
                        //     if (res.status === "fail") {
                        //         props.setError(res.error);
                        //     }
                        // });
                    }
                }}>
                {props.method} Article
            </Button>
            {props.error.length ? (
                <div
                    className={`${
                        props.error.length ? "absolute" : "hidden"
                    } w-[100vw] h-[calc(100vh-65px)] left-0 top-[65px] backdrop-blur z-[999]`}>
                    <div
                        className={`${
                            props.error.length ? "absolute" : "hidden"
                        } bg-white w-[300px] rounded p-[10px] pb-[5px] shadow-md border border-grey-light-1 left-[calc(50%-150px)] top-[40%]`}>
                        <h2 className="text-red-dark">Article Incomplete</h2>
                        <p>Your article cannot be published without:</p>
                        <ul className="pl-[40px] list-disc">
                            {props.error.map((error: string, index: number) => (
                                <li>{error}</li>
                            ))}
                        </ul>
                        <Button
                            className="w-[100%] mt-[25px]"
                            color="primary"
                            onClick={() => {
                                props.setError([]);
                                props.setMissing([]);
                            }}>
                            Confirm
                        </Button>
                    </div>
                </div>
            ) : (
                <div
                    className={`${
                        props.missing.length ? "absolute" : "hidden"
                    } w-[100vw] h-[calc(100vh-65px)] left-0 top-[65px] backdrop-blur z-[998]`}>
                    <div
                        className={`${
                            props.missing.length ? "absolute" : "hidden"
                        } bg-white w-[300px] rounded p-[10px] pb-[5px] shadow-md border border-grey-light-1 left-[calc(50%-150px)] top-[40%]`}>
                        <h2 className="text-red-dark">Article Incomplete</h2>
                        <p>Your article cannot be published without:</p>
                        <ul className="pl-[40px] list-disc">
                            {props.missing.map((missing: string, index: number) => (
                                <li>{missing}</li>
                            ))}
                        </ul>
                        <Button
                            className="w-[100%] mt-[25px]"
                            color="primary"
                            onClick={() => {
                                props.setMissing([]);
                                props.setError([]);
                            }}>
                            Confirm
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}
