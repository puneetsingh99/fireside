import "./auth-page-styles.css";

export const Login = () => {
  return (
    <article className={`auth-form`}>
      <h1 className={`form-title`}> Login </h1>
      <div className={`input-text-container`}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className={`text-input`}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className={`text-input`}
        />
      </div>

      <button className={`btn`}>{`Login`}</button>
      <p className={`signup-link`}>
        {`Don't have an account? `}{" "}
        <span className={`accent-text`}>{`Signup`}</span>
      </p>
    </article>
  );
};
