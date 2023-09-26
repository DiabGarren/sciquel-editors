import {
    ModelOptions,
    Severity,
    getModelForClass,
    index,
    post,
    prop,
} from "@typegoose/typegoose";
import mongoose from "mongoose";

@post<SubtopicsClass>("save", function (doc) {
    if (doc) {
        doc.id = doc._id.toString();
        doc._id = doc._id;
    }
})
@post<SubtopicsClass[]>(/^find/, function (docs) {
    // @ts-ignore
    if (this.op === "find") {
        docs.forEach((doc) => {
            doc.id = doc._id.toString();
            doc._id = doc.id;
        });
    }
})
@ModelOptions({
    schemaOptions: {
        timestamps: true,
        collection: "subtopics",
    },
    options: {
        allowMixed: Severity.ALLOW,
    },
})
class SubtopicsClass {
    _id: mongoose.Types.ObjectId | string;

    id: string;
}

const Subtopics = getModelForClass(SubtopicsClass);
export { Subtopics, SubtopicsClass };
