import React from "react";
import "./Login.css";
import { Input, Button, Form } from "antd";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="bg-img">
      <div className="content">
        <h2>Welcome to HRM</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Password field  ******************************************************************************************************************** */}
          <div className="username-field">
            <span className="above-text">Username</span>
            <div className="field">
              <input
                id={errors.username && "invalid"}
                {...register("username", {
                  required: "please enter username",
                })}
                className="input-design"
                type="text"
              />
            </div>
            {errors.username && (
              <small className="error-message">{errors.username.message}</small>
            )}
          </div>

          {/* Password field  ******************************************************************************************************************** */}
          <div className={!errors.username && "password-field"}>
            <span className="above-text">Passowrd</span>
            <div className="field">
              <input
                id={errors.password && "invalid"}
                {...register("password", {
                  required: "please enter password",
                })}
                className="input-design"
                type="password"
              />
            </div>
            {errors.password && (
              <small className="error-message">{errors.password.message}</small>
            )}
          </div>

          {/* Submit button  ******************************************************************************************************************** */}
          <div className="field">
            <input className="submit-btn" type="submit" value="Let me in" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
