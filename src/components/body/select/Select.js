import classNames from 'classnames';
import styles from './Select.module.css';

function Select(props) {
  const { title, options, bgClass } = props;
  return (
      <>
        <div className={styles.title}>{title}</div>
        <select className={classNames([styles.input, styles.full_width, styles.bg, styles[bgClass]])}>
          {options.map((option) => {
            return <option key={option.val} value={option.val}>{option.title}</option>;
          })}
        </select>
      </>
  );
}

export default Select;
