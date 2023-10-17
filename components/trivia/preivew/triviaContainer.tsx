/* eslint-disable react/jsx-key */
import { Question, Trivia, TriviaProps } from "@/utils/types";
import { Radio, RadioGroup, Select, SelectItem } from "@nextui-org/react";

export default function TriviaContainerPreview(props: TriviaProps) {
    const trivia = props.trivia.map((trivia: Trivia, triviaIndex: number) => {
        if (trivia.name === props.triviaPosition) {
            if (trivia.questions.length > 0) {
                const quests = trivia.questions.map((question: any, questionIndex: number) => {
                    let content;
                    switch (question.type) {
                        case "True/False":
                            content = question.content.map((content: any, index: number) => {
                                return (
                                    <div className="grid grid-cols-[2fr_1fr] mt-[10px]">
                                        <input
                                            className="border-grey-light border-b-2 pl-[3px] w-[90%] bg-[transparent]"
                                            placeholder="True or false statement"
                                            value={content.statement}
                                            disabled
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
                                                                (q: any, questIndex: number) => {
                                                                    if (
                                                                        questIndex === questionIndex
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
                            break;
                        case "Multiple Choice":
                            content = question.content.map((content: any, index: number) => {
                                const radios = content.answers.map((answer: any, index: number) => {
                                    return (
                                        <Radio value={answer}>
                                            <input
                                                className="border-b-2 border-grey-light bg-[transparent]"
                                                value={answer}
                                                placeholder={`Answer ${index + 1}`}
                                                disabled
                                                readOnly
                                            />
                                        </Radio>
                                    );
                                });
                                return (
                                    <div className="mt-[10px]">
                                        <input
                                            className="border-grey-light border-b-2 pl-[3px] w-[90%] mb-[10px] bg-[transparent] "
                                            placeholder="Multiple choice question"
                                            value={content.question}
                                            disabled
                                            readOnly
                                        />
                                        <RadioGroup
                                            color={
                                                content.guess === content.value
                                                    ? "primary"
                                                    : "warning"
                                            }
                                            onValueChange={(event) => {
                                                props.setTrivia(
                                                    props.trivia.map((trivia: any, ti: number) => {
                                                        if (ti === triviaIndex) {
                                                            const questions = trivia.questions.map(
                                                                (q: any, questIndex: number) => {
                                                                    if (
                                                                        questIndex === questionIndex
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
                                            {radios}
                                        </RadioGroup>
                                    </div>
                                );
                            });
                            break;
                        case "Single Matching":
                            content = question.content.map((content: any, contentIndex: number) => {
                                const randomAnswers = question.content
                                    .map((a: any) => ({ sort: Math.random(), value: a }))
                                    .sort((a: any, b: any) => a.sort - b.sort)
                                    .map((a: any) => a.value);
                                return (
                                    <div className="grid grid-cols-[1fr_1fr] items-center">
                                        <div>
                                            <p className="inline-block mr-[5px]">
                                                {contentIndex + 1}.
                                            </p>
                                            <input
                                                className="border-b-2 border-grey-light w-[80%] bg-[transparent]"
                                                value={content.question}
                                                disabled
                                                readOnly
                                            />
                                        </div>
                                        <div>
                                            <Select
                                                color={
                                                    content.guess === content.answer
                                                        ? "default"
                                                        : "warning"
                                                }
                                                size="sm"
                                                radius="lg"
                                                onChange={(event) => {
                                                    props.setTrivia(
                                                        props.trivia.map(
                                                            (trivia: any, tIndex: number) => {
                                                                if (tIndex === triviaIndex) {
                                                                    const questions =
                                                                        trivia.questions.map(
                                                                            (
                                                                                question: any,
                                                                                questIndex: number
                                                                            ) => {
                                                                                if (
                                                                                    questIndex ===
                                                                                    questionIndex
                                                                                ) {
                                                                                    const content =
                                                                                        question.content.map(
                                                                                            (
                                                                                                c: any,
                                                                                                cIndex: number
                                                                                            ) => {
                                                                                                if (
                                                                                                    cIndex ===
                                                                                                    contentIndex
                                                                                                ) {
                                                                                                    c.guess =
                                                                                                        event.target.value;
                                                                                                }
                                                                                                return c;
                                                                                            }
                                                                                        );

                                                                                    return {
                                                                                        type: question.type,
                                                                                        content:
                                                                                            content,
                                                                                    };
                                                                                }
                                                                                return question;
                                                                            }
                                                                        );
                                                                    return {
                                                                        name: trivia.name,
                                                                        questions: questions,
                                                                    };
                                                                } else return trivia;
                                                            }
                                                        )
                                                    );
                                                }}>
                                                {randomAnswers.map((content: any) => (
                                                    <SelectItem
                                                        key={content.answer}
                                                        value={content.answer}>
                                                        {content.answer}
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                        </div>
                                    </div>
                                );
                            });
                            content = (
                                <div className="border border-grey-light-1 rounded-md p-[7px]">
                                    {content}
                                </div>
                            );
                            break;
                        default:
                            content = "";
                    }
                    return (
                        <div className="border border-grey-light-1 rounded-md p-[12px]">
                            <h3 className="text-center">Question {questionIndex + 1}</h3>
                            {content}
                        </div>
                    );
                });

                return (
                    <div className="border border-grey-light-1 rounded-lr p-[7px]">
                        <div className="border border-grey-light-1 rounded-md p-[12px] mb-[5px]">
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
