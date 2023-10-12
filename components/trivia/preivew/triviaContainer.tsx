/* eslint-disable react/jsx-key */
import { Question, Trivia, TriviaProps } from "@/utils/types";

export default function TriviaContainerPreview(props: TriviaProps) {
    const trivia = props.trivia.map((trivia: Trivia) => {
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
                return (
                    <div className="border border-grey-light-1 rounded-[10px] p-[15px]">
                        <h3>
                            {trivia.name[0].toUpperCase()}
                            {trivia.name.substring(1)}-read Trivia
                        </h3>
                        <p className="text-grey">
                            {trivia.questions.length} question
                            {trivia.questions.length > 1 ? "s" : ""}
                        </p>
                    </div>
                );
            } else return <></>;
        } else return <></>;
    });
    return trivia;
}
