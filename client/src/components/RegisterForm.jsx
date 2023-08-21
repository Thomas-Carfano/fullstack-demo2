import { useState } from "react";

const RegisterForm = ({ setToken }) => {
  const [alert, setAlert] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await fetch("/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, username, password }),
    });

    const data = await result.json();

    if (data.token) {
      setAlert("");
      setToken(data.token);
    } else {
      setAlert(<p>Invalid Login</p>);
    }
  };

  return (
    <>
      <p>Register a new user to see trains</p>
      {alert}
      <form onSubmit={handleSubmit}>
      <label>
          Firstname:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Lastname:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default RegisterForm;
