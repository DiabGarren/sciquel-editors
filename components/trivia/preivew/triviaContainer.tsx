/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */

import { getItemStyle, getListStyle, reorderList } from "@/components/drag_drop/dragDrop";
import { Radio, RadioGroup, Select, SelectItem } from "@nextui-org/react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function TriviaContainerPreview(props: any) {
    const trivia = props.trivia.map((trivia: any, triviaIndex: number) => {
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
                            const randomAnswers = question.content
                                .map((a: any) => ({ sort: Math.random(), value: a }))
                                .sort((a: any, b: any) => a.sort - b.sort)
                                .map((a: any) => a.value);
                            content = question.content.map((content: any, contentIndex: number) => {
                                return (
                                    <>
                                        <div className="my-[5px] h-[30px]">
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
                                        {/* 
                                        <div>
                                            <Select
                                                aria-label="Answer"
                                                color={
                                                    content.guess === "" &&
                                                    content.guess !== content.answer
                                                        ? "default"
                                                        : content.guess === content.answer
                                                        ? "primary"
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
                                            */}
                                    </>
                                );
                            });

                            content = (
                                <div className="grid grid-cols-2 border border-grey-light-1 rounded-md p-[7px]">
                                    <div>{content}</div>
                                    <DragDropContext
                                        onDragEnd={(event) => {
                                            reorderList(randomAnswers, event);
                                            // props.setTrivia(
                                            //     props.trivia.map((trivia: any, tIndex: number) => {
                                            //         if (tIndex === triviaIndex) {
                                            //             const questions = trivia.questions.map(
                                            //                 (question: any, qIndex: number) => {
                                            //                     if (qIndex === questionIndex) {
                                            //                         const content =
                                            //                             question.content.map(
                                            //                                 (
                                            //                                     content: any,
                                            //                                     cIndex: number
                                            //                                 ) => {
                                            //                                     content.guess =
                                            //                                         randomAnswers[
                                            //                                             cIndex
                                            //                                         ].answer;
                                            //                                     return content;
                                            //                                 }
                                            //                             );
                                            //                         return {
                                            //                             type: question.type,
                                            //                             content: content,
                                            //                         };
                                            //                     }
                                            //                     return question;
                                            //                 }
                                            //             );
                                            //             return {
                                            //                 name: trivia.name,
                                            //                 questions: questions,
                                            //             };
                                            //         }
                                            //         return trivia;
                                            //     })
                                            // );
                                            console.log(props.trivia);
                                        }}>
                                        <Droppable droppableId="droppable">
                                            {(provided, snapshot) => (
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}>
                                                    {randomAnswers.map(
                                                        (item: any, index: number) => (
                                                            <Draggable
                                                                key={item.answer}
                                                                draggableId={item.answer}
                                                                index={index}>
                                                                {(provided, snapshot) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={getItemStyle(
                                                                            snapshot.isDragging,
                                                                            provided.draggableProps
                                                                                .style
                                                                        )}>
                                                                        <div className="flex items-center">
                                                                            <svg
                                                                                className="bg-teal-light-1 p-[5px] rounded-tl rounded-bl"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="29"
                                                                                height="30"
                                                                                viewBox="0 0 40 27"
                                                                                fill="none">
                                                                                <rect
                                                                                    width="40"
                                                                                    height="4"
                                                                                    rx="1.5"
                                                                                    fill="#7B6D6D"
                                                                                />
                                                                                <rect
                                                                                    y="12"
                                                                                    width="40"
                                                                                    height="4"
                                                                                    rx="1.5"
                                                                                    fill="#7B6D6D"
                                                                                />
                                                                                <rect
                                                                                    y="24"
                                                                                    width="40"
                                                                                    height="4"
                                                                                    rx="1.5"
                                                                                    fill="#7B6D6D"
                                                                                />
                                                                            </svg>
                                                                            <p className="px-[5px]">
                                                                                {item.answer}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        )
                                                    )}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </DragDropContext>
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
