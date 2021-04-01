import React, { ChangeEvent, FormEvent, useState } from "react";
import isEmail from "validator/lib/isEmail";
import styles from "./Form.module.scss";

function Form() {
  const [email, setEmail] = useState("");
  const [hasError, setError] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEmail(email)) {
      console.log("successful");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          className={styles.input}
          placeholder="Email address"
          onChange={onChange}
          value={email}
        />
        <button className={styles.button} type="submit">
          Request access
        </button>
      </form>
      {hasError && (
        <small className={styles.error}>Oops! Please check your email</small>
      )}
    </>
  );
}

export default Form;
