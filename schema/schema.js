const Joi = require("joi");

const Schema = {
  "/auth/signup": Joi.object().keys({
    name: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: {
          allow: true,
        },
      })
      .required(),
    password: Joi.string().required(),
  }),

  "/auth/login": Joi.object().keys({
    emailOrUserName: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = Schema;
