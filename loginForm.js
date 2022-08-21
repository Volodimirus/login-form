import "./loginForm.css";

export default function LoginForm() {
  return (
    <div className="login-form">
      <h2 className="login-form--title">Login</h2>
      <form className="login-form--form">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Type your username" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Type your password"
        />
        <button className="password-reset">Forgot password?</button>
        <button className="login-button">LOGIN</button>
      </form>

      <p className="sign-up--label">Or Sign Up Using</p>
      <button className="sign-up">SIGN UP</button>
    </div>
  );
}
