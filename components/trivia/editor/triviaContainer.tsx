/* eslint-disable react/jsx-key */
import { Trivia, TriviaProps } from "@/utils/types";

export default function TriviaContainerEditor(props: TriviaProps) {
    const trivia = props.trivia.map((trivia: Trivia) => {
        if (trivia.name === props.triviaPosition) {
            return (
                <div className="border rounded-[10px] p-[10px]">
                    <h3>Trivia</h3>
                    <p className="text-grey-light">
                        {trivia.questions.length} questions
                    </p>
                </div>
            );
        } else return <></>;
    });
    return trivia;
}
