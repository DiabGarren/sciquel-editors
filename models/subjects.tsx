import {
    ModelOptions,
    Severity,
    getModelForClass,
    index,
    post,
    prop,
} from "@typegoose/typegoose";
import mongoose from "mongoose";

@post<SubjectsClass>("save", function (doc) {
    if (doc) {
        doc.id = doc._id.toString();
        doc._id = doc._id;
    }
})
@post<SubjectsClass[]>(/^find/, function (docs) {
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
class SubjectsClass {
    _id: mongoose.Types.ObjectId | string;

    id: string;
}

const Subjects = getModelForClass(SubjectsClass);
export { Subjects, SubjectsClass };
