const generateSchema = (properties, required) => ({
  type: "object",
  properties,
  required,
  additionalProperties: false,
});

module.exports = {
  resetPassword: generateSchema(
    {
      password: { type: "string", minLength: 8, maxLength: 20 },
    },
    ["password"]
  ),

  getResetPwLink: generateSchema(
    {
      email: { type: "string", format: "email" },
    },
    ["email"]
  ),
  signIn: generateSchema(
    {
      email: { type: "string", format: "email" },
      password: { type: "string", minLength: 8, maxLength: 50 },
    },
    ["password", "email"]
  ),
  signUp: generateSchema(
    {
      email: { type: "string", format: "email" },
      password: { type: "string", minLength: 8, maxLength: 50 },
      name: { type: "string", minLength: 5, maxLength: 25 },
    },
    ["name", "password", "email"]
  ),
  sendMessage: generateSchema(
    {
      content: { type: "string", minLength: 1, maxLength: 255 },
      targetUserID: { type: "string", minLength: 1, maxLength: 36 },
    },
    ["content","targetUserID"]
  ),
};
