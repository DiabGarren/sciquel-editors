/* eslint-disable react/jsx-key */
import { Trivia, TriviaProps, Question } from "@/utils/types";
import { TrashIcon } from "@heroicons/react/20/solid";
import {
    Button,
    Radio,
    RadioGroup,
    Select,
    SelectItem,
} from "@nextui-org/react";

const questionTypes = [
    { name: "True/False" },
    { name: "Multiple Choice" },
    { name: "Single Matching" },
    { name: "Multiple Matching" },
];

const trueFalse = { statement: "", true: true, false: false };

export default function TriviaContainerEditor(props: TriviaProps) {
    const questionContainer = (name: string, question: Question) => {
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
                                    (q: Question) => {
                                        if (q.number === question.number) {
                                            q.type = event.target.value;
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
                >
                    {questionTypes.map((quest) => (
                        <SelectItem key={quest.name} value={quest.name}>
                            {quest.name}
                        </SelectItem>
                    ))}
                </Select>
            </div>
        );
    };

    const content = (question: Question) => {
        switch (question.type) {
            case "True/False":
                return (
                    <div
                        className="grid border border-grey-light-1 p-[10px] rounded-[10px]"
                        style={{
                            gridColumn: "1/4",
                            gridTemplateColumns: "2fr 1fr",
                            maxHeight: "350px",
                            overflowY: "auto",
                        }}
                    >
                        <input
                            className="border-grey-light pl-[3px] w-[90%]"
                            style={{ borderBottomWidth: "2px" }}
                            placeholder="True or false statement"
                            // value={question.content[0].statement}
                            // onChange={(event) =>
                            //     (question.content[0].statement = event.target.value)
                            // }
                        />
                        <RadioGroup
                            orientation="horizontal"
                            defaultValue="true"
                            // onValueChange={(event) => console.log(event)}
                        >
                            <Radio value="true">True</Radio>
                            <Radio value="false">False</Radio>
                        </RadioGroup>
                    </div>
                );
            default:
                return <></>;
        }
    };

    const trivia = props.trivia.map((trivia: Trivia) => {
        if (trivia.name === props.triviaPosition) {
            const questions = trivia.questions.map(
                (question: Question, index: number) => {
                    return (
                        <div className="trivia-question grid border border-grey-light rounded-[10px] p-[7px] mb-[10px] items-center">
                            {questionContainer(trivia.name, question)}
                            <h3 className="text-center">
                                Question {index + 1}
                            </h3>
                            <TrashIcon
                                className="trash-icon ml-[auto] w-[30px] h-[27px]"
                                onClick={() =>
                                    props.setTrivia(
                                        props.trivia.map((trivia: Trivia) => {
                                            trivia.questions.splice(index, 1);
                                            return trivia;
                                        })
                                    )
                                }
                            />
                            {content(question)}
                        </div>
                    );
                }
            );
            return (
                <>
                    <div className="border border-grey-light rounded-[10px] p-[15px] mb-[10px]">
                        <h3>
                            {trivia.name[0].toUpperCase()}
                            {trivia.name.substring(1)}-read Trivia
                        </h3>
                        <p className="text-grey-light">
                            {trivia.questions.length} question
                            {trivia.questions.length > 1 ||
                            trivia.questions.length < 1
                                ? "s"
                                : ""}
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
                                            number: t.questions.length + 1,
                                            type: "True/False",
                                            content: [trueFalse],
                                        });
                                        return {
                                            name: t.name,
                                            questions: t.questions,
                                        };
                                    })
                                );
                            }}
                        >
                            +
                        </Button>
                    </div>
                </>
            );
        } else return <></>;
    });

    return trivia;
}
