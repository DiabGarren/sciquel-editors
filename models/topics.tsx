import {
    ModelOptions,
    Severity,
    getModelForClass,
    index,
    post,
    prop,
} from "@typegoose/typegoose";
import mongoose from "mongoose";

@post<TopicsClass>("save", function (doc) {
    if (doc) {
        doc.id = doc._id.toString();
        doc._id = doc._id;
    }
})
@post<TopicsClass[]>(/^find/, function (docs) {
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
        collection: "topics",
    },
    options: {
        allowMixed: Severity.ALLOW,
    },
})
class TopicsClass {
    _id: mongoose.Types.ObjectId | string;

    id: string;
}

const Topics = getModelForClass(TopicsClass);
export { Topics, TopicsClass };
