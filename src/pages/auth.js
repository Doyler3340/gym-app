import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="auth">
      <h1>{isLogin ? "Login" : "Signup"}</h1>
      <form>
        {!isLogin && (
          <label>
            Name:
            <input type="text" name="name" />
          </label>
        )}
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Switch to Signup" : "Switch to Login"}
      </button>
    </main>
  );
};

export default Auth;
