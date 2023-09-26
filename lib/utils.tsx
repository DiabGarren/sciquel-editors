import mongoose from "mongoose";
import { NextResponse } from "next/server";

export function stringToObjectId(id: string) {
    if (mongoose.Types.ObjectId.isValid(id)) {
        return new mongoose.Types.ObjectId(id);
    } else {
        return null;
    }
}

export function createErrorResponse(message: string, statusCode: number) {
    const errorResponse = {
        status: statusCode >= 500 ? "error" : "fail",
        message,
    };

    return (
        new NextResponse(JSON.stringify(errorResponse)),
        {
            status: statusCode,
            headers: { "Content-Type": "application/json" },
        }
    );
}
