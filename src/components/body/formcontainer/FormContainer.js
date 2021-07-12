import Form from '../form/Form';
import styles from './FormContainer.module.css';

function FormContainer() {
  return (
      <section className={styles.form_container}>
        <div className={styles.form}>
          <Form />
        </div>
      </section>
  );
}

export default FormContainer;
