// components/AuthForm.js
import React, { useState } from "react";
import Joi from "joi";

const AuthForm = ({ onAuthenticate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error } = schema.validate(
      { email, password },
      { abortEarly: false }
    );
    if (error) {
      const validationErrors = {};
      error.details.forEach((err) => {
        validationErrors[err.context.key] = err.message;
      });
      setErrors(validationErrors);
    } else {
      setErrors({});
      onAuthenticate(email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <ErrorMessage message={errors.email} />}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <ErrorMessage message={errors.password} />}
      </div>
      <button type="submit">Authenticate</button>
    </form>
  );
};

export default AuthForm;
