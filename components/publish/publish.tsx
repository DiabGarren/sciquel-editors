/* eslint-disable react/jsx-key */
import { Button } from "@nextui-org/react";

export default function Publish(props: any) {
    const errorBox = (errors: string[], type: string) => {
        return (
            <div
                className={`${
                    errors.length ? "absolute" : "hidden"
                } w-[100vw] h-[calc(100vh-65px)] left-0 top-[65px] backdrop-blur z-[999]`}>
                <div
                    className={`${
                        errors.length ? "absolute" : "hidden"
                    } bg-white w-[300px] rounded-box p-[10px] shadow-md border border-grey-light-1 left-[calc(50%-150px)] top-[calc(40%-65px)]`}>
                    <h2 className="text-red-dark">
                        {type === "warning" ? "Missing Information" : "Article Incomplete"}
                    </h2>

                    <p>Your article cannot be published without:</p>
                    <ul className="pl-[40px] list-disc mb-[25px]">
                        {errors.map((error: string) => (
                            <li>{error}</li>
                        ))}
                    </ul>
                    <div className="md:grid md:grid-cols-2 md:gap-[7px]">
                        {type === "warning" ? (
                            <Button
                                className="w-[100%] mb-[7px]"
                                color="primary"
                                onClick={() => {
                                    props.submit();
                                    window.location.href = "/";
                                }}>
                                Publish Anyway
                            </Button>
                        ) : (
                            <></>
                        )}
                        <Button
                            className={`${
                                type === "warning" ? "md:col-[2]" : "md:col-[1/3]"
                            } w-[100%] border-red-dark hover:text-red-dark`}
                            color="warning"
                            onClick={() => {
                                props.setError([]);
                                props.setMissing([]);
                            }}>
                            Go Back
                        </Button>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <>
            <Button
                className="w-[100%] md:w-fit"
                color="primary"
                onClick={() => {
                    let errors = [];
                    if (!props.heading || props.heading === "<p><br></p>") errors.push("Heading");
                    if (!props.subheading || props.subheading === "<p><br></p>")
                        errors.push("Subheading");
                    if (!props.keywords) errors.push("Keywords");
                    if (!props.date) errors.push("Publish Date");
                    if (!props.section.length) errors.push("Article Content");

                    if (errors.length) {
                        props.setError(errors);
                        window.scrollTo({
                            top: 0,
                            behavior: "auto",
                        });
                        return;
                    }

                    let missing = [];
                    if (!props.finalImage) missing.push("Cover Image");
                    if (!props.mediaType) missing.push("Media Type");
                    if (!props.articleType) missing.push("Article Type");
                    if (!props.topics.some((topic: any) => topic.checked)) missing.push("Topics");
                    if (!props.subtopics.some((subtopic: any) => subtopic.checked))
                        missing.push("Subtopics");
                    if (!props.subjects.some((subject: any) => subject.checked))
                        missing.push("Subjects");
                    if (!props.contributors.some((contributor: any) => contributor.checked))
                        missing.push("Contributors");
                    if (!props.trivia[0].questions.length) missing.push("Trivia");
                    if (!props.dictionary.length) missing.push("Dictionary");

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
            {props.error.length
                ? errorBox(props.error, "error")
                : errorBox(props.missing, "warning")}
        </>
    );
}
