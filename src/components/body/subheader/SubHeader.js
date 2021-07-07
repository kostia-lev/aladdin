import styles from './SubHeader.module.css';
import event_details from '../../../assets/event_details.svg';
import branding from '../../../assets/branding.svg';
import import_attendees from '../../../assets/import_attendees.svg';
import publish from '../../../assets/publish.svg';

function SubHeader() {
  return (
      <section className={styles.header}>
        <div>Add New Event</div>
        <div className={styles.images_container}>
          <div className={styles.item_container}>
            <div>
              <span className={styles.progress_image}>
                <img src={event_details} alt="event details" />
              </span>
            </div>
            <div>
              Event Details
            </div>
          </div>
          <div className={styles.item_container}>
            <div>
              <span className={styles.progress_image}>
                <img src={branding} alt="import attendees pic" />
              </span>
            </div>
            <div>
              Branding
            </div>
          </div>
          <div className={styles.item_container}>
            <div>
              <span className={styles.progress_image}>
                <img src={import_attendees} alt="import attendees pic" />
              </span>
            </div>
            <div>
              Import Attendees
            </div>
          </div>
          <div className={styles.item_container}>
            <div>

            </div>
            <span className={styles.progress_image}>
              <img src={publish} alt="publish pic" />
            </span>
            <div>
              Publish
            </div>
          </div>
        </div>
        <div></div>
      </section>
  );
}

export default SubHeader;
