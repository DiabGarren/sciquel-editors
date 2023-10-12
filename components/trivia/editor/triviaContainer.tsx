/* eslint-disable react/jsx-key */
import { Trivia, TriviaProps, Question } from "@/utils/types";
import { Button, Select, SelectItem } from "@nextui-org/react";

const questionTypes = [
    { name: "True/False" },
    { name: "Multiple Choice" },
    { name: "Single Matching" },
    { name: "Multiple Matching" },
];

export default function TriviaContainerEditor(props: TriviaProps) {
    const questionContainer = (name: string, question: Question) => {
        return (
            <div>
                <Select
                    label="Question Type"
                    placeholder="Select a question type"
                    defaultSelectedKeys={[questionTypes[0].name]}
                    onChange={(event) => {
                        props.setTrivia(
                            props.trivia.map((trivia: any) => {
                                if (trivia.name === name) {
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
                                } else return trivia;
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

    const trivia = props.trivia.map((trivia: Trivia) => {
        if (trivia.name === props.triviaPosition) {
            const questions = trivia.questions.map((question: Question) => {
                return (
                    <div
                        className="grid border border-grey-light rounded-[10px] p-[7px] mb-[10px] items-center"
                        style={{ gridTemplateColumns: "175px 1fr 175px" }}
                    >
                        {questionContainer(trivia.name, question)}
                        <h3 className="text-center">
                            Question {question.number}
                        </h3>
                    </div>
                );
            });
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
                    <Button
                        variant="solid"
                        color="primary"
                        onClick={() => {
                            props.setTrivia(
                                props.trivia.map((t: any) => {
                                    if (t.name === trivia.name) {
                                        t.questions.push({
                                            number: t.questions.length + 1,
                                            type: "True/False",
                                        });
                                        return {
                                            name: t.name,
                                            questions: t.questions,
                                        };
                                    } else return t;
                                })
                            );
                        }}
                    >
                        +
                    </Button>
                </>
            );
        } else return <></>;
    });

    return trivia;
}
