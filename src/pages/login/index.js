import React from "react";
import loginImage from "../../assets/img/hrm_login.jpg";
import "./Login.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="main-section">
      <div className="image-box">
        <img src={loginImage} alt="login_image" className="login-image" />
      </div>
      <div className="content-box">
        <div className="card">
          <div className="form-box">
            <h2>Welcome to HRM Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-box">
                <span>Username</span>
                <input
                  id={errors.username && "invalid"}
                  {...register("username", {
                    required: "please enter username",
                  })}
                  onKeyUp={() => {
                    trigger("username");
                  }}
                  type="text"
                />
                {errors.username && (
                  <small style={{ color: "red" }}>
                    {errors.username.message}
                  </small>
                )}
              </div>
              <div className="input-box">
                <span>Password</span>
                <input
                id={errors.password && "invalid"}
                  {...register("password", {
                    required: "Please enter password",
                  })}
                  type="password"
                />
                {errors.password && (
                  <small style={{ color: "red" }}>
                    {errors.password.message}
                  </small>
                )}
              </div>
              <div className="remember">
                <label>
                  <input type="checkbox" name="" />
                  Remember
                </label>
              </div>
              <div className="input-box">
                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
