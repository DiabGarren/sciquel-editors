/* eslint-disable react/jsx-key */
import { TrashIcon } from "@heroicons/react/20/solid";
import { Button, Radio, RadioGroup, Select, SelectItem } from "@nextui-org/react";
import Popup from "reactjs-popup";

const questionTypes = [
    { name: "True/False" },
    { name: "Multiple Choice" },
    { name: "Single Matching" },
    { name: "Multiple Matching" },
];

export default function TriviaContainerEditor(props: any) {
    const content = (question: any, questionIndex: number) => {
        let content;
        switch (question.type) {
            case "True/False":
                content = question.content.map((content: any, index: number) => {
                    return (
                        <div className="grid grid-cols-[1fr_25px] md:grid-cols-[1fr_1fr_25px] items-center">
                            <input
                                className="col-[1] border-grey-light border-b-2 pl-[3px] w-[95%] mx-auto"
                                placeholder="True or false statement"
                                value={content.statement}
                                onChange={(event) => {
                                    props.setTrivia(
                                        props.trivia.map((trivia: any) => {
                                            const questions = trivia.questions.map(
                                                (q: any, qIndex: number) => {
                                                    if (qIndex === questionIndex) {
                                                        const content = q.content.map(
                                                            (c: any, i: number) => {
                                                                if (i === index) {
                                                                    c.statement =
                                                                        event.target.value;
                                                                }
                                                                return c;
                                                            }
                                                        );
                                                        q.content = content;
                                                    }
                                                    return q;
                                                }
                                            );
                                            return {
                                                name: trivia.name,
                                                questions: questions,
                                            };
                                        })
                                    );
                                }}
                            />
                            <RadioGroup
                                className="col-[1] md:col-[2] justify-self-center mt-[5px] md:mt-0"
                                orientation="horizontal"
                                value={content.value}
                                onValueChange={(event) => {
                                    props.setTrivia(
                                        props.trivia.map((trivia: any) => {
                                            const questions = trivia.questions.map(
                                                (q: any, questIndex: number) => {
                                                    if (questIndex === questionIndex) {
                                                        const content = q.content.map(
                                                            (c: any, i: number) => {
                                                                if (i === index) {
                                                                    c.value = event;
                                                                }
                                                                return c;
                                                            }
                                                        );
                                                        q.content = content;
                                                    }
                                                    return q;
                                                }
                                            );
                                            return {
                                                name: trivia.name,
                                                questions: questions,
                                            };
                                        })
                                    );
                                }}>
                                <Radio value="true">True</Radio>
                                <Radio value="false">False</Radio>
                            </RadioGroup>
                            <TrashIcon
                                className="trash-icon col-[2] md:col-[3] row-[1/3] self-center"
                                onClick={() => {
                                    props.setTrivia(
                                        props.trivia.map((trivia: any) => {
                                            const questions = trivia.questions.map(
                                                (question: any, questIndex: number) => {
                                                    if (questIndex === questionIndex) {
                                                        const content: any[] = [];
                                                        question.content.forEach(
                                                            (c: any, i: number) => {
                                                                if (i !== index) content.push(c);
                                                            }
                                                        );
                                                        question.content = content;
                                                    }
                                                    return question;
                                                }
                                            );
                                            return {
                                                name: trivia.name,
                                                questions: questions,
                                            };
                                        })
                                    );
                                }}
                            />
                        </div>
                    );
                });
                break;
            case "Multiple Choice":
                content = question.content.map((content: any, contentIndex: number) => {
                    return (
                        <div className="grid grid-cols-[1fr_25px] xsm:justify-items-center">
                            <input
                                className="col-[1] border-b-2 border-grey-light w-[95%] sm:[80%] md:w-[350px] bg-[transparent] mb-[10px]"
                                placeholder="Multiple choice question"
                                value={content.question}
                                onChange={(event) => {
                                    props.setTrivia(
                                        props.trivia.map((trivia: any) => {
                                            const questions = trivia.questions.map(
                                                (question: any, questIndex: number) => {
                                                    if (questIndex === questionIndex) {
                                                        const content = question.content.map(
                                                            (content: any, cIndex: number) => {
                                                                if (cIndex === contentIndex) {
                                                                    content.question =
                                                                        event.target.value;
                                                                }
                                                                return content;
                                                            }
                                                        );
                                                        return {
                                                            type: question.type,
                                                            content: content,
                                                        };
                                                    } else return question;
                                                }
                                            );
                                            return { name: trivia.name, questions: questions };
                                        })
                                    );
                                }}
                            />
                            <RadioGroup
                                className="col-[1]"
                                color="primary"
                                value={content.value}
                                onValueChange={(event) => {
                                    props.setTrivia(
                                        props.trivia.map((trivia: any) => {
                                            const questions = trivia.questions.map(
                                                (question: any, questIndex: number) => {
                                                    if (questIndex === questionIndex) {
                                                        const content = question.content.map(
                                                            (content: any, cIndex: number) => {
                                                                if (cIndex === contentIndex) {
                                                                    content.value = event;
                                                                }
                                                                return content;
                                                            }
                                                        );
                                                        return {
                                                            type: question.type,
                                                            content: content,
                                                        };
                                                    } else return question;
                                                }
                                            );
                                            return { name: trivia.name, questions: questions };
                                        })
                                    );
                                }}>
                                {content.answers.map((answer: any, answerIndex: number) => {
                                    return (
                                        <Radio value={answer}>
                                            <input
                                                className="border-b-2 border-grey-light bg-[transparent] w-[95%] md:w-[85%]"
                                                placeholder={`Answer ${answerIndex + 1}`}
                                                value={answer}
                                                onChange={(event) => {
                                                    props.setTrivia(
                                                        props.trivia.map((trivia: any) => {
                                                            const questions = trivia.questions.map(
                                                                (
                                                                    question: any,
                                                                    questIndex: number
                                                                ) => {
                                                                    if (
                                                                        questIndex === questionIndex
                                                                    ) {
                                                                        const content =
                                                                            question.content.map(
                                                                                (
                                                                                    content: any,
                                                                                    cIndex: number
                                                                                ) => {
                                                                                    if (
                                                                                        cIndex ===
                                                                                        contentIndex
                                                                                    ) {
                                                                                        const answers =
                                                                                            content.answers.map(
                                                                                                (
                                                                                                    answer: any,
                                                                                                    aIndex: number
                                                                                                ) => {
                                                                                                    if (
                                                                                                        aIndex ===
                                                                                                        answerIndex
                                                                                                    ) {
                                                                                                        answer =
                                                                                                            event
                                                                                                                .target
                                                                                                                .value;
                                                                                                    }
                                                                                                    return answer;
                                                                                                }
                                                                                            );
                                                                                        return {
                                                                                            question:
                                                                                                content.question,
                                                                                            answers:
                                                                                                answers,
                                                                                            value: content.value,
                                                                                            guess: content.guess,
                                                                                        };
                                                                                    } else
                                                                                        return content;
                                                                                }
                                                                            );
                                                                        return {
                                                                            type: question.type,
                                                                            content: content,
                                                                        };
                                                                    } else return question;
                                                                }
                                                            );
                                                            return {
                                                                name: trivia.name,
                                                                questions: questions,
                                                            };
                                                        })
                                                    );
                                                }}
                                            />
                                        </Radio>
                                    );
                                })}
                            </RadioGroup>
                            <TrashIcon
                                className="trash-icon col-[2] row-[1]"
                                onClick={() => {
                                    props.setTrivia(
                                        props.trivia.map((trivia: any) => {
                                            const questions = trivia.questions.map(
                                                (question: any, questIndex: number) => {
                                                    if (questIndex === questionIndex) {
                                                        const content: any[] = [];
                                                        question.content.forEach(
                                                            (c: any, cIndex: number) => {
                                                                if (cIndex !== contentIndex)
                                                                    content.push(c);
                                                            }
                                                        );
                                                        question.content = content;
                                                    }
                                                    return question;
                                                }
                                            );
                                            return {
                                                name: trivia.name,
                                                questions: questions,
                                            };
                                        })
                                    );
                                }}
                            />
                        </div>
                    );
                });
                break;
            case "Single Matching":
                content = question.content.map((content: any, contentIndex: number) => {
                    return (
                        <div className="grid grid-cols-[1fr_25px] md:grid-cols-[1fr_1fr_25px] my-[8px] items-center justify-items-center md:justify-items-start">
                            <div className="col-[1] flex">
                                <p className="w-fit md:w-[20px]">{contentIndex + 1}.</p>
                                <input
                                    className="col-[1] border-b-2 border-grey-light w-[90%] md:w-[90%]"
                                    placeholder="Question/Statement"
                                    value={content.question}
                                    onChange={(event) => {
                                        props.setTrivia(
                                            props.trivia.map((trivia: any) => {
                                                const questions = trivia.questions.map(
                                                    (question: any, questIndex: number) => {
                                                        if (questIndex === questionIndex) {
                                                            const content = question.content.map(
                                                                (content: any, cIndex: number) => {
                                                                    if (cIndex === contentIndex) {
                                                                        content.question =
                                                                            event.target.value;
                                                                    }
                                                                    return content;
                                                                }
                                                            );
                                                            return {
                                                                type: question.type,
                                                                content: content,
                                                            };
                                                        } else return question;
                                                    }
                                                );
                                                return { name: trivia.name, questions: questions };
                                            })
                                        );
                                    }}
                                />
                            </div>

                            <input
                                className="col-[1] md:col-[2] border-b-2 border-grey-light w-[95%] xsm:w-[80%] sm:w-[65%] md:w-[90%] mt-[7px] md:mt-0"
                                placeholder="Matching answer"
                                value={content.answer}
                                onChange={(event) => {
                                    props.setTrivia(
                                        props.trivia.map((trivia: any) => {
                                            const questions = trivia.questions.map(
                                                (question: any, questIndex: number) => {
                                                    if (questIndex === questionIndex) {
                                                        const content = question.content.map(
                                                            (content: any, cIndex: number) => {
                                                                if (cIndex === contentIndex) {
                                                                    content.answer =
                                                                        event.target.value;
                                                                }
                                                                return content;
                                                            }
                                                        );
                                                        return {
                                                            type: question.type,
                                                            content: content,
                                                        };
                                                    } else return question;
                                                }
                                            );
                                            return { name: trivia.name, questions: questions };
                                        })
                                    );
                                }}
                            />
                            <TrashIcon
                                className="trash-icon col-[2] md:col-[3] row-[1/4]"
                                onClick={() => {
                                    props.setTrivia(
                                        props.trivia.map((trivia: any) => {
                                            const questions = trivia.questions.map(
                                                (question: any, questIndex: number) => {
                                                    if (questIndex === questionIndex) {
                                                        const content: any[] = [];
                                                        question.content.forEach(
                                                            (c: any, cIndex: number) => {
                                                                if (cIndex !== contentIndex)
                                                                    content.push(c);
                                                            }
                                                        );
                                                        question.content = content;
                                                    }
                                                    return question;
                                                }
                                            );
                                            return {
                                                name: trivia.name,
                                                questions: questions,
                                            };
                                        })
                                    );
                                }}
                            />
                        </div>
                    );
                });
                break;
            case "Multiple Matching":
                content = question.content.map((content: any, contentIndex: number) => {
                    return (
                        <div className="flex flex-col my-[8px] items-center justify-items-center">
                            <div className="grid grid-cols-[1fr_25px] justify-items-center w-[100%] xsm:w-[90%] md:w-[400px]">
                                <input
                                    className="border-b-2 border-grey-light w-[90%]"
                                    placeholder="Category name"
                                    value={content.category}
                                    onChange={(event) => {
                                        props.setTrivia(
                                            props.trivia.map((trivia: any) => {
                                                const questions = trivia.questions.map(
                                                    (question: any, questIndex: number) => {
                                                        if (questIndex === questionIndex) {
                                                            const content = question.content.map(
                                                                (content: any, cIndex: number) => {
                                                                    if (cIndex === contentIndex) {
                                                                        content.category =
                                                                            event.target.value;
                                                                    }
                                                                    return content;
                                                                }
                                                            );
                                                            return {
                                                                type: question.type,
                                                                content: content,
                                                            };
                                                        } else return question;
                                                    }
                                                );
                                                return { name: trivia.name, questions: questions };
                                            })
                                        );
                                    }}
                                />
                                <TrashIcon
                                    className="trash-icon inline-block"
                                    onClick={() => {
                                        props.setTrivia(
                                            props.trivia.map((trivia: any) => {
                                                const questions = trivia.questions.map(
                                                    (question: any, questIndex: number) => {
                                                        if (questIndex === questionIndex) {
                                                            const content: any[] = [];
                                                            question.content.forEach(
                                                                (c: any, cIndex: number) => {
                                                                    if (cIndex !== contentIndex)
                                                                        content.push(c);
                                                                }
                                                            );
                                                            question.content = content;
                                                        }
                                                        return question;
                                                    }
                                                );
                                                return {
                                                    name: trivia.name,
                                                    questions: questions,
                                                };
                                            })
                                        );
                                    }}
                                />
                            </div>
                            {content.answers.map((answer: string, index: number) => {
                                return (
                                    <div className="grid grid-cols-[1fr_25px] md:grid-cols-[250px_25px] w-[80%] md:w-[275px] mt-[7px] items-center">
                                        <input
                                            className="border-b-2 border-grey-light-1 w-[95%] md:w-[250px]"
                                            placeholder={`Answer ${index + 1}`}
                                            value={answer}
                                            onChange={(event) => {
                                                props.setTrivia(
                                                    props.trivia.map((trivia: any) => {
                                                        const questions = trivia.questions.map(
                                                            (question: any, questIndex: number) => {
                                                                if (questIndex === questionIndex) {
                                                                    const content =
                                                                        question.content.map(
                                                                            (
                                                                                content: any,
                                                                                cIndex: number
                                                                            ) => {
                                                                                if (
                                                                                    cIndex ===
                                                                                    contentIndex
                                                                                ) {
                                                                                    const answers =
                                                                                        content.answers.map(
                                                                                            (
                                                                                                a: any,
                                                                                                aIndex: number
                                                                                            ) => {
                                                                                                if (
                                                                                                    aIndex ===
                                                                                                    index
                                                                                                )
                                                                                                    return event
                                                                                                        .target
                                                                                                        .value;
                                                                                                else
                                                                                                    return a;
                                                                                            }
                                                                                        );
                                                                                    return {
                                                                                        category:
                                                                                            content.category,
                                                                                        answers:
                                                                                            answers,
                                                                                        guesses:
                                                                                            content.guesses,
                                                                                    };
                                                                                } else
                                                                                    return content;
                                                                            }
                                                                        );
                                                                    return {
                                                                        type: question.type,
                                                                        content: content,
                                                                    };
                                                                } else return question;
                                                            }
                                                        );
                                                        return {
                                                            name: trivia.name,
                                                            questions: questions,
                                                        };
                                                    })
                                                );
                                            }}
                                        />
                                        <TrashIcon
                                            className="trash-icon inline-block"
                                            onClick={() => {
                                                props.setTrivia(
                                                    props.trivia.map((trivia: any) => {
                                                        const questions = trivia.questions.map(
                                                            (question: any, questIndex: number) => {
                                                                if (questIndex === questionIndex) {
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
                                                                                    const answers: any[] =
                                                                                        [];
                                                                                    c.answers.forEach(
                                                                                        (
                                                                                            answer: any,
                                                                                            aIndex: number
                                                                                        ) => {
                                                                                            if (
                                                                                                aIndex !==
                                                                                                index
                                                                                            ) {
                                                                                                answers.push(
                                                                                                    answer
                                                                                                );
                                                                                            }
                                                                                        }
                                                                                    );

                                                                                    const guesses: any[] =
                                                                                        [];
                                                                                    for (
                                                                                        let i = 0;
                                                                                        i <
                                                                                        c.guesses
                                                                                            .length -
                                                                                            1;
                                                                                        i++
                                                                                    ) {
                                                                                        guesses.push(
                                                                                            c
                                                                                                .guesses[
                                                                                                i
                                                                                            ]
                                                                                        );
                                                                                    }

                                                                                    return {
                                                                                        category:
                                                                                            c.category,
                                                                                        answers:
                                                                                            answers,
                                                                                        guesses:
                                                                                            guesses,
                                                                                    };
                                                                                } else return c;
                                                                            }
                                                                        );
                                                                    question.content = content;
                                                                }
                                                                return question;
                                                            }
                                                        );
                                                        return {
                                                            name: trivia.name,
                                                            questions: questions,
                                                        };
                                                    })
                                                );
                                            }}
                                        />
                                    </div>
                                );
                            })}
                            <Button
                                className="mt-[7px]"
                                variant="solid"
                                color="primary"
                                onClick={() => {
                                    props.setTrivia(
                                        props.trivia.map((trivia: any) => {
                                            const questions = trivia.questions.map(
                                                (question: any, questIndex: number) => {
                                                    if (questIndex === questionIndex) {
                                                        const content = question.content.map(
                                                            (content: any, cIndex: number) => {
                                                                if (cIndex === contentIndex) {
                                                                    content.answers.push("");
                                                                    content.guesses.push({
                                                                        guess: "",
                                                                        key: `item-${cIndex + 1}-${
                                                                            content.guesses.length +
                                                                            1
                                                                        }`,
                                                                    });
                                                                }
                                                                return content;
                                                            }
                                                        );
                                                        return {
                                                            type: question.type,
                                                            content: content,
                                                        };
                                                    } else return question;
                                                }
                                            );
                                            return { name: trivia.name, questions: questions };
                                        })
                                    );
                                }}>
                                +
                            </Button>
                        </div>
                    );
                });
                break;
            default:
                return <></>;
        }

        return (
            <div className="trivia-questions col-[1/4] max-h-[350px] overflow-y-auto rounded-box border border-grey-light-1">
                {content}
            </div>
        );
    };

    const trivia = props.trivia.map((trivia: any, triviaIndex: number) => {
        if (triviaIndex === 0) {
            const questions = trivia.questions.map((question: any, index: number) => {
                return (
                    <div className="border border-grey-light-1 rounded-box p-[7px] my-[7px]">
                        <div className="flex p-[10px]">
                            <h3 className="text-center">Question {index + 1}</h3>
                            <TrashIcon
                                className="trash-icon w-[30px] h-[27px] ml-auto"
                                onClick={() =>
                                    props.setTrivia(
                                        props.trivia.map((trivia: any) => {
                                            trivia.questions.splice(index, 1);
                                            return trivia;
                                        })
                                    )
                                }
                            />
                        </div>

                        <Popup
                            trigger={
                                <div className="popup-select md:w-[250px]">
                                    <p className="text-[16px]">Question Type</p>
                                    <div className="flex">
                                        <p className="text-teal">{question.type}</p>
                                        <svg
                                            className="ml-auto mr-[5px]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="15"
                                            height="9"
                                            viewBox="0 0 14 8"
                                            fill="none">
                                            <path
                                                d="M1 1L7 7L13 1"
                                                stroke="#109191"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            }
                            position="bottom left">
                            <div className="popup w-[268px] xsm:w-[323px] sm:mx-[12%] sm:w-[300px] md:w-[250px] md:mx-0">
                                {questionTypes.map((type: any) => {
                                    return (
                                        <div
                                            className="popup-item"
                                            onClick={() => {
                                                props.setTrivia(
                                                    props.trivia.map((trivia: any) => {
                                                        const questions = trivia.questions.map(
                                                            (q: any, questionIndex: number) => {
                                                                if (questionIndex === index) {
                                                                    q.type = type.name;
                                                                    switch (q.type) {
                                                                        case "True/False":
                                                                            q.content = [
                                                                                {
                                                                                    statement: "",
                                                                                    value: "true",
                                                                                    guess: "",
                                                                                },
                                                                            ];
                                                                            break;
                                                                        case "Multiple Choice":
                                                                            q.content = [
                                                                                {
                                                                                    question: "",
                                                                                    answers: [
                                                                                        "",
                                                                                        "",
                                                                                        "",
                                                                                        "",
                                                                                    ],
                                                                                    value: "",
                                                                                    guess: "",
                                                                                },
                                                                            ];
                                                                            break;
                                                                        case "Single Matching":
                                                                            q.content = [
                                                                                {
                                                                                    question: "",
                                                                                    answer: "",
                                                                                    guess: "",
                                                                                    key: "item-1",
                                                                                },
                                                                            ];
                                                                            break;
                                                                        case "Multiple Matching":
                                                                            q.content = [
                                                                                {
                                                                                    category: "",
                                                                                    answers: [""],
                                                                                    guesses: [
                                                                                        {
                                                                                            guess: "",
                                                                                            key: "item-1-1",
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            ];
                                                                            break;
                                                                        default:
                                                                            q.content = [];
                                                                            break;
                                                                    }
                                                                }
                                                                return q;
                                                            }
                                                        );
                                                        return {
                                                            name: trivia.name,
                                                            questions: questions,
                                                        };
                                                    })
                                                );
                                            }}>
                                            {type.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </Popup>
                        {content(question, index)}
                        <Button
                            className="block mx-auto mt-[7px]"
                            variant="solid"
                            color="primary"
                            onClick={() => {
                                props.setTrivia(
                                    props.trivia.map((trivia: any) => {
                                        const questions = trivia.questions.map(
                                            (q: any, i: number) => {
                                                if (i === index) {
                                                    switch (q.type) {
                                                        case "True/False":
                                                            q.content.push({
                                                                statement: "",
                                                                value: "true",
                                                                guess: "",
                                                            });
                                                            break;
                                                        case "Multiple Choice":
                                                            q.content.push({
                                                                question: "",
                                                                answers: ["", "", "", ""],
                                                                value: "",
                                                                guess: "",
                                                            });
                                                            break;
                                                        case "Single Matching":
                                                            q.content.push({
                                                                question: "",
                                                                answer: "",
                                                                guess: "",
                                                                key: `item-${q.content.length + 1}`,
                                                            });
                                                            break;
                                                        case "Multiple Matching":
                                                            q.content.push({
                                                                category: "",
                                                                answers: [""],
                                                                guesses: [
                                                                    {
                                                                        guess: "",
                                                                        key: `item-${
                                                                            q.content.length + 1
                                                                        }-1`,
                                                                    },
                                                                ],
                                                            });
                                                            break;
                                                        default:
                                                            break;
                                                    }
                                                }
                                                return q;
                                            }
                                        );
                                        return {
                                            name: trivia.name,
                                            questions: questions,
                                        };
                                    })
                                );
                            }}>
                            +
                        </Button>
                    </div>
                );
            });
            return (
                <>
                    <div className="border border-grey-light-1 rounded-box p-[15px] mb-[10px]">
                        <h3>Trivia</h3>
                        <p className="text-grey-light">
                            {trivia.questions.length} question
                            {trivia.questions.length > 1 || trivia.questions.length < 1 ? "s" : ""}
                        </p>
                    </div>
                    {questions}
                    <div className="md:w-[65px] mx-[auto]">
                        <Button
                            className="w-[100%] text-[1.25rem] md:text-[1.1rem]"
                            variant="solid"
                            color="primary"
                            onClick={() => {
                                props.setTrivia(
                                    props.trivia.map((t: any) => {
                                        t.questions.push({
                                            type: "True/False",
                                            content: [
                                                {
                                                    statement: "",
                                                    value: "true",
                                                    guess: "",
                                                },
                                            ],
                                        });
                                        return {
                                            name: t.name,
                                            questions: t.questions,
                                        };
                                    })
                                );
                            }}>
                            +
                        </Button>
                    </div>
                </>
            );
        } else return <></>;
    });

    return trivia;
}
