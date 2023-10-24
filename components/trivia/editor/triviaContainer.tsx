/* eslint-disable react/jsx-key */
import { TrashIcon } from "@heroicons/react/20/solid";
import { Button, Radio, RadioGroup, Select, SelectItem } from "@nextui-org/react";
import { AnyMxRecord } from "dns";

const questionTypes = [
    { name: "True/False" },
    { name: "Multiple Choice" },
    { name: "Single Matching" },
    { name: "Multiple Matching" },
];

export default function TriviaContainerEditor(props: any) {
    const questionContainer = (question: any, index: number) => {
        return (
            <div>
                <Select
                    label="Question Type"
                    placeholder="Select a question type"
                    selectedKeys={[question.type]}
                    onChange={(event) => {
                        props.setTrivia(
                            props.trivia.map((trivia: any) => {
                                const questions = trivia.questions.map(
                                    (q: any, questionIndex: number) => {
                                        if (questionIndex === index) {
                                            q.type = event.target.value;
                                            switch (q.type) {
                                                case "True/False":
                                                    q.content = [
                                                        { statement: "", value: "true", guess: "" },
                                                    ];
                                                    break;
                                                case "Multiple Choice":
                                                    q.content = [
                                                        {
                                                            question: "",
                                                            answers: ["", "", "", ""],
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
                    {questionTypes.map((quest) => (
                        <SelectItem
                            key={quest.name}
                            value={quest.name}>
                            {quest.name}
                        </SelectItem>
                    ))}
                </Select>
            </div>
        );
    };

    const content = (question: any, questionIndex: number) => {
        let content;
        switch (question.type) {
            case "True/False":
                content = question.content.map((content: any, index: number) => {
                    return (
                        <div className="grid grid-cols-[2fr_1fr_25px] border border-grey-light-1 p-[10px] rounded-md">
                            <input
                                className="border-grey-light border-b-2 pl-[3px] w-[90%]"
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
                                className="trash-icon"
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
                    const radios = content.answers.map((answer: any, answerIndex: number) => {
                        return (
                            <div>
                                <Radio value={answer}></Radio>
                                <input
                                    className="border-b-2 border-grey-light bg-[transparent]"
                                    placeholder={`Answer ${answerIndex + 1}`}
                                    value={answer}
                                    onChange={(event) => {
                                        props.setTrivia(
                                            props.trivia.map((trivia: any) => {
                                                const questions = trivia.questions.map(
                                                    (question: any, questIndex: number) => {
                                                        if (questIndex === questionIndex) {
                                                            const content = question.content.map(
                                                                (content: any, cIndex: number) => {
                                                                    if (cIndex === contentIndex) {
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
                                                                            answers: answers,
                                                                            value: content.value,
                                                                            guess: content.guess,
                                                                        };
                                                                    } else return content;
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
                        );
                    });
                    return (
                        <div className="border border-grey-light-1 p-[10px] rounded-md">
                            <div className="grid grid-cols-[1fr_25px] w-[100%] mb-[10px]">
                                <input
                                    className="border-b-2 border-grey-light w-[80%] bg-[transparent]"
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
                                <TrashIcon
                                    className="trash-icon"
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
                            <RadioGroup
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
                                {radios}
                            </RadioGroup>
                        </div>
                    );
                });
                break;
            case "Single Matching":
                content = question.content.map((content: any, contentIndex: number) => {
                    return (
                        <div className="grid grid-cols-[1fr_1fr_25px] my-[8px] items-center">
                            <div>
                                <p className="inline-block mr-[5px]">{contentIndex + 1}.</p>
                                <input
                                    className="border-b-2 border-grey-light"
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
                                className="border-b-2 border-grey-light ml-[10px]"
                                placeholder="Matching answer/statement"
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
                                className="trash-icon"
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
                content = (
                    <div className="border border-grey-light-1 p-[10px] rounded-md">{content}</div>
                );
                break;
            case "Multiple Matching":
                content = question.content.map((content: any, contentIndex: number) => {
                    return (
                        <div className="flex flex-col my-[8px] items-center">
                            <div className="my-[2px]">
                                <input
                                    className="border-b-2 border-grey-light"
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
                                    <div className="flex w-[80%] items-center">
                                        <input
                                            className="border-b-2 border-grey-light-1 w-[80%]"
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
                            {/* <input
                                className="border-b-1 border-grey-light-1"
                                placeholder="Add answer"
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
                            /> */}
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
                content = (
                    <div
                        className="grid grid-cols-2 border border-grey-light-1 p-[10px] rounded-md"
                        // style={{ gridTemplateColumns: `repeat(${content.length}, 250px)` }}
                    >
                        {content}
                    </div>
                );
                break;
            default:
                return <></>;
        }

        return <div className="col-[1/4] max-h-[250px] overflow-y-auto">{content}</div>;
    };

    const trivia = props.trivia.map((trivia: any, triviaIndex: number) => {
        if (triviaIndex === 0) {
            const questions = trivia.questions.map((question: any, index: number) => {
                return (
                    <div className="trivia-question grid border border-grey-light-1 rounded-md p-[7px] my-[7px] items-center">
                        {questionContainer(question, index)}
                        <h3 className="text-center">Question {index + 1}</h3>{" "}
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
                        {content(question, index)}
                        <Button
                            className="col-[1/4] mx-auto mt-[7px]"
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
                    <div className="border border-grey-light-1 rounded-md p-[15px] mb-[10px]">
                        <h3>Trivia</h3>
                        <p className="text-grey-light">
                            {trivia.questions.length} question
                            {trivia.questions.length > 1 || trivia.questions.length < 1 ? "s" : ""}
                        </p>
                    </div>
                    {questions}
                    <div className="w-[60px] mx-[auto]">
                        <Button
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

    console.log(props.trivia);

    return trivia;
}
