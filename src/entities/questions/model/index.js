import GenericModel from "@Application/repository/generic-model";
import Schema from "./schema";
import answerSchema from "entities/answers/model/schema"
import questionAnswerSchema from "entities/questionAnswers/model/schema"
import playerSchema from "entities/players/model/schema"
import playerQuestionSchema from "entities/playerQuestions/model/schema"

Schema.belongsToMany(answerSchema, {
  through: questionAnswerSchema,
  foreignKey: "questionId"
})

Schema.belongsToMany(playerSchema, {
  through: playerQuestionSchema,
  foreignKey: "questionId"
})

const Model = {
  ...GenericModel(Schema),
  getByEmail: (email) => Schema.findOne({ where: { email } }),
  getAnswers: async (questionId) => {
    const question = await Schema.findByPk(questionId, {
      include: {
        model: answerSchema,
        through: { attributes: [] }, // Exclude join table attributes
      },
    });
    return question ? question.answers : [];
  }
};

export default Model;
