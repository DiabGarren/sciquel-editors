/* eslint-disable react/jsx-key */
import { Question, Trivia, TriviaProps } from "@/utils/types";
import { Radio, RadioGroup } from "@nextui-org/react";

export default function TriviaContainerPreview(props: TriviaProps) {
    const trivia = props.trivia.map((trivia: Trivia, triviaIndex: number) => {
        if (trivia.name === props.triviaPosition) {
            let questions: any[] = [];
            trivia.questions.forEach((question: Question) => {
                questions.push(
                    <div>
                        <h3>Question {question.number}</h3>
                    </div>
                );
            });
            if (questions.length > 0) {
                const quests = trivia.questions.map((question: any, questionIndex: number) => {
                    switch (question.type) {
                        case "True/False":
                            const content = question.content.map((content: any, index: number) => {
                                return (
                                    <div
                                        className="grid mt-[10px]"
                                        style={{
                                            gridTemplateColumns: "2fr 1fr",
                                        }}>
                                        <input
                                            className="border-grey-light pl-[3px] w-[90%]"
                                            style={{
                                                borderBottomWidth: "2px",
                                            }}
                                            placeholder="True or false statement"
                                            value={content.statement}
                                            readOnly
                                        />
                                        <RadioGroup
                                            color={
                                                content.guess === content.value
                                                    ? "primary"
                                                    : "warning"
                                            }
                                            orientation="horizontal"
                                            onValueChange={(event) => {
                                                props.setTrivia(
                                                    props.trivia.map((trivia: any, ti: number) => {
                                                        if (ti === triviaIndex) {
                                                            const questions = trivia.questions.map(
                                                                (q: any) => {
                                                                    if (
                                                                        q.number === question.number
                                                                    ) {
                                                                        const content =
                                                                            q.content.map(
                                                                                (
                                                                                    c: any,
                                                                                    i: number
                                                                                ) => {
                                                                                    if (
                                                                                        i === index
                                                                                    ) {
                                                                                        c.guess =
                                                                                            event;
                                                                                    }
                                                                                    return c;
                                                                                }
                                                                            );
                                                                        return {
                                                                            number: q.number,
                                                                            type: q.type,
                                                                            content: content,
                                                                        };
                                                                    }
                                                                    return q;
                                                                }
                                                            );
                                                            return {
                                                                name: trivia.name,
                                                                questions: questions,
                                                            };
                                                        } else return trivia;
                                                    })
                                                );
                                            }}>
                                            <Radio value="true">True</Radio>
                                            <Radio value="false">False</Radio>
                                        </RadioGroup>
                                    </div>
                                );
                            });
                            return (
                                <div className="border border-grey-light-1 rounded-[10px] p-[12px]">
                                    <h3 className="text-center">Question {questionIndex + 1}</h3>
                                    {content}
                                </div>
                            );
                        default:
                            return (
                                <div className="border border-grey-light-1 rounded-[10px] p-[12px]">
                                    <h3 className="text-center">Question {questionIndex + 1}</h3>
                                </div>
                            );
                    }
                });

                return (
                    <div className="border border-grey-light-1 rounded-[15px] p-[7px]">
                        <div className="border border-grey-light-1 rounded-[10px] p-[12px] mb-[5px]">
                            <h3>
                                {trivia.name[0].toUpperCase()}
                                {trivia.name.substring(1)}-read Trivia
                            </h3>
                            <p className="text-grey-light">
                                {trivia.questions.length} question
                                {trivia.questions.length > 1 ? "s" : ""}
                            </p>
                        </div>
                        {quests}
                    </div>
                );
            } else return <></>;
        } else return <></>;
    });
    return trivia;
}
