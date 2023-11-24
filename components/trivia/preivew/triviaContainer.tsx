/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */

import { getItemStyle, getListStyle } from "@/components/drag_drop/dragDrop";
import { Radio, RadioGroup } from "@nextui-org/react";
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
                                    </>
                                );
                            });

                            const reorderList = (event: any) => {
                                props.setTrivia(
                                    props.trivia.map((trivia: any, tIndex: number) => {
                                        if (tIndex === triviaIndex) {
                                            const questions = trivia.questions.map(
                                                (question: any, qIndex: number) => {
                                                    if (qIndex === questionIndex) {
                                                        let new_index = event.destination.index;
                                                        let old_index = event.source.index;
                                                        const answers: {
                                                            guess: string;
                                                            key: string;
                                                        }[] = [];
                                                        question.content.forEach((content: any) => {
                                                            answers.push({
                                                                guess:
                                                                    content.guess === ""
                                                                        ? content.answer
                                                                        : content.guess,
                                                                key: content.key,
                                                            });
                                                        });

                                                        if (new_index >= question.content.length) {
                                                            var k = new_index - answers.length + 1;
                                                            while (k--) {
                                                                answers.push({
                                                                    guess: "",
                                                                    key: "",
                                                                });
                                                            }
                                                        }
                                                        answers.splice(
                                                            new_index,
                                                            0,
                                                            answers.splice(old_index, 1)[0]
                                                        );

                                                        question.content.forEach(
                                                            (content: any, index: number) => {
                                                                content.guess =
                                                                    answers[index].guess;
                                                                content.key = answers[index].key;
                                                            }
                                                        );

                                                        return {
                                                            type: question.type,
                                                            content: question.content,
                                                        };
                                                    }
                                                    return question;
                                                }
                                            );
                                            return {
                                                name: trivia.name,
                                                questions: questions,
                                            };
                                        }
                                        return trivia;
                                    })
                                );
                            };

                            content = (
                                <div className="grid grid-cols-2 border border-grey-light-1 rounded-md p-[7px]">
                                    <div>{content}</div>
                                    <DragDropContext
                                        onDragEnd={(event) => {
                                            if (event.destination) {
                                                reorderList(event);
                                            }
                                        }}>
                                        <Droppable droppableId="droppable">
                                            {(provided, snapshot) => (
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}>
                                                    {question.content.map(
                                                        (item: any, index: number) => (
                                                            <Draggable
                                                                key={item.key}
                                                                draggableId={item.key}
                                                                index={index}>
                                                                {(provided, snapshot) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={getItemStyle(
                                                                            snapshot.isDragging,
                                                                            provided.draggableProps
                                                                                .style,
                                                                            item.guess ===
                                                                                item.answer,
                                                                            trivia.name == "post"
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
                                                                                {item.guess === ""
                                                                                    ? randomAnswers[
                                                                                          index
                                                                                      ].answer
                                                                                    : item.guess}
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
                        case "Multiple Matching":
                            const answers: string[] = [];
                            question.content.forEach((content: any) => {
                                content.answers.forEach((answer: string) => {
                                    answers.push(answer);
                                });
                            });
                            const randomiseAnswers = answers
                                .map((a: any) => ({ sort: Math.random(), value: a }))
                                .sort((a: any, b: any) => a.sort - b.sort)
                                .map((a: any) => a.value);

                            let randomPos = -1;

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
                                    </>
                                );
                            });
                            const reorderLists = (source: any, destination: any) => {
                                props.setTrivia(
                                    props.trivia.map((trivia: any, tIndex: number) => {
                                        if (tIndex === triviaIndex) {
                                            const questions = trivia.questions.map(
                                                (question: any, qIndex: number) => {
                                                    if (qIndex === questionIndex) {
                                                        const content = question.content.map(
                                                            (content: any, cIndex: number) => {
                                                                content.guesses =
                                                                    content.guesses.map(
                                                                        (
                                                                            guess: any,
                                                                            index: number
                                                                        ) => {
                                                                            return {
                                                                                guess:
                                                                                    guess.guess ==
                                                                                    ""
                                                                                        ? content
                                                                                              .answers[
                                                                                              index
                                                                                          ]
                                                                                        : guess.guess,
                                                                                key: guess.key,
                                                                            };
                                                                        }
                                                                    );
                                                                if (
                                                                    parseInt(source.droppableId) ===
                                                                        parseInt(
                                                                            destination.droppableId
                                                                        ) &&
                                                                    parseInt(source.droppableId) ===
                                                                        cIndex
                                                                ) {
                                                                    let new_index =
                                                                        destination.index;
                                                                    let old_index = source.index;
                                                                    const guesses: {
                                                                        guess: string;
                                                                        key: string;
                                                                    }[] = [];
                                                                    content.guesses.forEach(
                                                                        (
                                                                            guess: any,
                                                                            index: number
                                                                        ) => {
                                                                            guesses.push({
                                                                                guess:
                                                                                    guess.guess ===
                                                                                    ""
                                                                                        ? content
                                                                                              .answers[
                                                                                              index
                                                                                          ]
                                                                                        : guess.guess,
                                                                                key: guess.key,
                                                                            });
                                                                        }
                                                                    );

                                                                    if (
                                                                        new_index >=
                                                                        content.guesses.length
                                                                    ) {
                                                                        var k =
                                                                            new_index -
                                                                            guesses.length +
                                                                            1;
                                                                        while (k--) {
                                                                            guesses.push({
                                                                                guess: "",
                                                                                key: "",
                                                                            });
                                                                        }
                                                                    }
                                                                    guesses.splice(
                                                                        new_index,
                                                                        0,
                                                                        guesses.splice(
                                                                            old_index,
                                                                            1
                                                                        )[0]
                                                                    );

                                                                    content.guesses.forEach(
                                                                        (
                                                                            guess: any,
                                                                            index: number
                                                                        ) => {
                                                                            guess.guess =
                                                                                guesses[
                                                                                    index
                                                                                ].guess;
                                                                            guess.key =
                                                                                guesses[index].key;
                                                                        }
                                                                    );

                                                                    return {
                                                                        category: content.category,
                                                                        answers: content.answers,
                                                                        guesses: content.guesses,
                                                                    };
                                                                }

                                                                if (
                                                                    parseInt(source.droppableId) ===
                                                                    cIndex
                                                                ) {
                                                                    const guesses =
                                                                        content.guesses.map(
                                                                            (
                                                                                guess: any,
                                                                                index: number
                                                                            ) => {
                                                                                guess.guess =
                                                                                    guess.guess ==
                                                                                    ""
                                                                                        ? content
                                                                                              .answers[
                                                                                              index
                                                                                          ]
                                                                                        : guess.guess;
                                                                                return guess;
                                                                            }
                                                                        );
                                                                    return {
                                                                        category: content.category,
                                                                        answers: content.answers,
                                                                        guesses: guesses,
                                                                    };
                                                                }

                                                                if (
                                                                    parseInt(
                                                                        destination.droppableId
                                                                    ) === cIndex
                                                                ) {
                                                                    content.guesses.splice(
                                                                        destination.index,
                                                                        0,
                                                                        {
                                                                            guess:
                                                                                question.content[
                                                                                    source
                                                                                        .droppableId
                                                                                ].guesses[
                                                                                    source.index
                                                                                ].guess === ""
                                                                                    ? question
                                                                                          .content[
                                                                                          source
                                                                                              .droppableId
                                                                                      ].answers[
                                                                                          source
                                                                                              .index
                                                                                      ]
                                                                                    : question
                                                                                          .content[
                                                                                          source
                                                                                              .droppableId
                                                                                      ].guesses[
                                                                                          source
                                                                                              .index
                                                                                      ].guess,

                                                                            key: question.content[
                                                                                source.droppableId
                                                                            ].guesses[source.index]
                                                                                .key,
                                                                        }
                                                                    );
                                                                }

                                                                return {
                                                                    category: content.category,
                                                                    answers: content.answers,
                                                                    guesses: content.guesses,
                                                                };
                                                            }
                                                        );

                                                        if (
                                                            source.droppableId !==
                                                            destination.droppableId
                                                        ) {
                                                            const content = question.content.map(
                                                                (content: any, index: number) => {
                                                                    if (
                                                                        index ===
                                                                        parseInt(source.droppableId)
                                                                    ) {
                                                                        const guesses: any[] = [];
                                                                        content.guesses.forEach(
                                                                            (
                                                                                guess: any,
                                                                                index: number
                                                                            ) => {
                                                                                if (
                                                                                    index !==
                                                                                    parseInt(
                                                                                        source.index
                                                                                    )
                                                                                )
                                                                                    guesses.push(
                                                                                        guess
                                                                                    );
                                                                            }
                                                                        );
                                                                        return {
                                                                            category:
                                                                                content.category,
                                                                            answers:
                                                                                content.answers,
                                                                            guesses: guesses,
                                                                        };
                                                                    }
                                                                    return content;
                                                                }
                                                            );
                                                            return {
                                                                type: question.type,
                                                                content: content,
                                                            };
                                                        }
                                                        return {
                                                            type: question.type,
                                                            content: content,
                                                        };
                                                    }
                                                    return question;
                                                }
                                            );
                                            return {
                                                name: trivia.name,
                                                questions: questions,
                                            };
                                        }
                                        return trivia;
                                    })
                                );
                            };
                            content = (
                                <>
                                    <DragDropContext
                                        onDragEnd={(event) => {
                                            const { source, destination } = event;
                                            if (event.destination) {
                                                reorderLists(source, destination);
                                            }
                                        }}>
                                        <div className="grid grid-cols-2 justify-items-center">
                                            {question.content.map(
                                                (content: any, cIndex: number) => {
                                                    return (
                                                        <div className="w-[80%]">
                                                            <h3 className="text-center">
                                                                {content.category == ""
                                                                    ? `Category ${cIndex + 1}`
                                                                    : content.category}
                                                            </h3>
                                                            <Droppable droppableId={`${cIndex}`}>
                                                                {(provided, snapshot) => (
                                                                    <div
                                                                        {...provided.droppableProps}
                                                                        ref={provided.innerRef}
                                                                        style={getListStyle(
                                                                            snapshot.isDraggingOver
                                                                        )}>
                                                                        {question.content[
                                                                            cIndex
                                                                        ].guesses.map(
                                                                            (
                                                                                guess: any,
                                                                                index: number
                                                                            ) => {
                                                                                randomPos++;
                                                                                let text =
                                                                                    guess.guess ===
                                                                                    ""
                                                                                        ? randomiseAnswers[
                                                                                              randomPos
                                                                                          ]
                                                                                        : guess.guess;

                                                                                return (
                                                                                    <Draggable
                                                                                        key={
                                                                                            guess.key
                                                                                        }
                                                                                        draggableId={
                                                                                            guess.key
                                                                                        }
                                                                                        index={
                                                                                            index
                                                                                        }>
                                                                                        {(
                                                                                            provided,
                                                                                            snapshot
                                                                                        ) => (
                                                                                            <div
                                                                                                ref={
                                                                                                    provided.innerRef
                                                                                                }
                                                                                                {...provided.draggableProps}
                                                                                                {...provided.dragHandleProps}
                                                                                                style={getItemStyle(
                                                                                                    snapshot.isDragging,
                                                                                                    provided
                                                                                                        .draggableProps
                                                                                                        .style,
                                                                                                    guess.guess ===
                                                                                                        question
                                                                                                            .content[
                                                                                                            cIndex
                                                                                                        ]
                                                                                                            .answers[
                                                                                                            index
                                                                                                        ],
                                                                                                    trivia.name ==
                                                                                                        "post"
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
                                                                                                        {guess.guess ===
                                                                                                        ""
                                                                                                            ? question
                                                                                                                  .content[
                                                                                                                  cIndex
                                                                                                              ]
                                                                                                                  .answers[
                                                                                                                  index
                                                                                                              ]
                                                                                                            : guess.guess}
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        )}
                                                                                    </Draggable>
                                                                                );
                                                                            }
                                                                        )}
                                                                        {provided.placeholder}
                                                                        {/* {question.content[cIndex]
                                                                            .answers.length <=
                                                                        question.content[cIndex]
                                                                            .guesses.length ? (
                                                                            <></>
                                                                        ) : (
                                                                            <div className="w-[95%] border-b-2 border-dashed bg-white text-center rounded mx-auto mb-[5px]">
                                                                                <br />
                                                                            </div>
                                                                        )} */}
                                                                        <div className="w-[95%] border-2 border-dashed text-center rounded mx-auto mb-[5px]">
                                                                            <br />
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </Droppable>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </DragDropContext>
                                </>
                            );
                            break;
                        default:
                            content = "";
                    }
                    return (
                        <div className="border border-grey-light-1 rounded-md p-[7px]">
                            <h3 className="text-center">Question {questionIndex + 1}</h3>
                            {content}
                        </div>
                    );
                });

                return (
                    <div className="border border-grey-light-1 rounded-lr p-[7px]">
                        <div className="border border-grey-light-1 rounded-md p-[15px] mb-[10px]">
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
