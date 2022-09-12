import Joi from 'joi';

const userSchema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(10).required(),
});


export default userSchema;
