import classNames from 'classnames';
import styles from './SubHeader.module.css';
import event_details from '../../../assets/event_details.svg';
import branding from '../../../assets/branding.svg';
import import_attendees from '../../../assets/import_attendees.svg';
import publish from '../../../assets/publish.svg';

function SubHeader() {
  return (
      <section className={styles.header}>
        <div className={classNames([styles.box, styles.main_title])}>Add New Event</div>
        <div className={classNames([styles.box, styles.images_container])}>
          <div className={classNames([styles.item_container, styles.active])}>
            <div className={styles.image_container}>
              <div className={styles.progress_line} />
              <span className={styles.progress_image}>
                <img src={event_details} alt="event details" />
              </span>
            </div>
            <div className={styles.title}>
              Event Details
            </div>
          </div>
          <div className={styles.item_container}>
            <div className={styles.image_container}>
              <div className={styles.progress_line} />
              <span className={styles.progress_image}>
                <img src={branding} alt="import attendees pic" />
              </span>
            </div>
            <div className={styles.title}>
              Branding
            </div>
          </div>
          <div className={styles.item_container}>
            <div className={styles.image_container}>
              <div className={styles.progress_line} />
              <span className={styles.progress_image}>
                <img src={import_attendees} alt="import attendees pic" />
              </span>
            </div>
            <div className={styles.title}>
              Import Attendees
            </div>
          </div>
          <div className={classNames([styles.item_container, styles.end_line])}>
            <div className={styles.image_container}>
              <div className={styles.progress_line} />
              <span className={styles.progress_image}>
                <img src={publish} alt="publish pic" />
              </span>
            </div>
            <div className={styles.title}>
              Publish
            </div>
          </div>
        </div>
        <div className={styles.box} />
      </section>
  );
}

export default SubHeader;
