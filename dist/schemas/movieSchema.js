import Joi from "joi";
export var movieSchema = Joi.object({
    name: Joi.string().required(),
    platform: Joi.string().required(),
    genre: Joi.string().required(),
    status: Joi.string().required()
});
