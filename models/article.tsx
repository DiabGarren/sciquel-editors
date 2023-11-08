import { Schema, model, models } from "mongoose";

const articleSchema = new Schema({
    heading: String,
    subheading: String,
    finalImage: String,
    urlSlug: String,
    date: String,
    mediaType: String,
    articleType: String,
    topics: Array,
    subtopics: Array,
    subjects: Array,
    contributors: Array,
    trivia: Array,
});

const Article = models.Article || model("Article", articleSchema);
export default Article;
