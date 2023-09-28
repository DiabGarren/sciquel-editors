import {
    ModelOptions,
    Severity,
    getModelForClass,
    index,
    post,
    prop,
} from "@typegoose/typegoose";
import mongoose from "mongoose";

@post<UsersClass>("save", function (doc) {
    if (doc) {
        doc.id = doc._id.toString();
        doc._id = doc._id;
    }
})
@post<UsersClass[]>(/^find/, function (docs) {
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
        collection: "users",
    },
    options: {
        allowMixed: Severity.ALLOW,
    },
})
class UsersClass {
    _id: mongoose.Types.ObjectId | string;

    id: string;
}

const Users = getModelForClass(UsersClass);
export { Users, UsersClass };
