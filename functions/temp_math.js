import fs from 'fs';
import path from 'path';
const mathTopicsJson = JSON.parse(fs.readFileSync("C:/on-thi-vao-10/src/data/grade9/math/topics.json", "utf8"));
const mathQuestionTypesJson = JSON.parse(fs.readFileSync("C:/on-thi-vao-10/src/data/grade9/math/questionTypes.json", "utf8"));
const mathQuestionsJson = JSON.parse(fs.readFileSync("C:/on-thi-vao-10/src/data/grade9/math/questions.json", "utf8"));
const mathSolutionsJson = JSON.parse(fs.readFileSync("C:/on-thi-vao-10/src/data/grade9/math/solutions.json", "utf8"));


export const mathTopics = mathTopicsJson;
export const mathQuestionTypes = mathQuestionTypesJson;
export const mathQuestions = mathQuestionsJson;
export const mathSolutions = mathSolutionsJson;