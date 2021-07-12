import classNames from 'classnames';
import { useState } from 'react';
import styles from './Input.module.css';

function Input(props) {
  const { title, note, regexp } = props;
  let [error, setError] = useState(null);
  return (
      <>
        <div className={styles.title}>{title}<span className={styles.asterisk}>*</span></div>
        <input className={classNames({ [styles.error]: error,
          [styles.input]: true, [styles.full_width]: true })}
               onChange={(e) => {
          if (!(new RegExp(regexp)).test(e.target.value)) {
            setError('Value is not valid');
          } else {
            setError('');
          }
        }} />
        {!error && note && <div className={styles.note}>{note}</div>}
        {error && <div className={styles.error_text}>{error}</div>}
      </>
  );
}

export default Input;
