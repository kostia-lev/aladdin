import classNames from 'classnames';
import {
  useRef,
  useState
} from 'react';
import Calendar from 'react-calendar';
import Input from '../input/Input';
import Select from '../select/Select';
import styles from './Form.module.css';
import 'react-calendar/dist/Calendar.css';

function Form() {
  const fileInput = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileBase64, setSelectedFileBase64] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startDateFocused, setStartDateFocused] = useState(false);
  const [endDateFocused, setEndDateFocused] = useState(false);
  return (
      <>
        <div className={styles.title}>
          Tell us a little about your event
        </div>
        <form>
          <div className={styles.form_row}>
            <div className={styles.form_col}>
              <Input title="Title"
                     regexp=".+"
                     note="Better create short and clear event title" />
            </div>
          </div>
          <div className={styles.form_row}>
            <div className={styles.form_col}>
              <Input title="Subdomain"
                     regexp="[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+"
                     note="Better create short and clear event title" />
            </div>
          </div>
          <div className={styles.form_row}>
            <div className={classNames([styles.form_col, styles.padding_right])}>
              <div className={styles.title}>City<span className={styles.asterisk}>*</span></div>
              <input className={classNames([styles.input, styles.full_width, styles.bg, styles.pointer_bg])}
                list="city" id="city" name="city" />
              <datalist id="city">
                <option value="Abu Dhabi" />
                <option value="Dubai" />
                <option value="Dubai" />
              </datalist>
            </div>
            <div className={classNames([styles.form_col, styles.padding_left])}>
              <Select title="Time Zone"
                      bgClass="clock_bg"
                      options={[{value: "4:00", title: "(GMT +4:00) Dubai, United Arab Emirates"},
                        {value: "1:00", title: "(GMT +1:00) Washington, United States of America"}]} />
            </div>
          </div>
          <div className={styles.form_row}>
            <div id="startDateCont"
                 className={classNames([styles.form_col, styles.padding_right])}>
              <div className={styles.title}>Start date<span className={styles.asterisk}>*</span></div>
              <input value={startDate.toLocaleDateString("en-US")}
                     onClick={() => setStartDateFocused(!startDateFocused)}
                     className={classNames([styles.input, styles.full_width, styles.bg, styles.calendar_bg])} />
              {startDateFocused && <Calendar onChange={setStartDate}
                value={startDate} maxDate={endDate}
              />}
            </div>
            <div className={classNames([styles.form_col, styles.padding_left])}>
              <div className={styles.title}>End date<span className={styles.asterisk}>*</span></div>
              <input value={endDate.toLocaleDateString("en-US")}
                     onClick={() => setEndDateFocused(!endDateFocused)}
                     className={classNames([styles.input, styles.full_width, styles.bg, styles.calendar_bg])} />
              {endDateFocused && <Calendar onChange={setEndDate} minDate={startDate}
                value={endDate}
              />}
            </div>
          </div>
          <div className={styles.form_row}>
            <div className={classNames([styles.form_col, styles.padding_right])}>
              <Select title="Attendees expected"
                      bgClass="arrow_black_bg"
                      options={[{value: "100", title: "100"},
                        {value: "100", title: "100"},
                        {value: "300", title: "300"},
                        {value: "500", title: "500"},
                        {value: "1000", title: "1000"},
                        {value: "5000", title: "5000"},
                        {value: "10000", title: "10000"},
                        {value: "20000", title: "20000"}]} />
            </div>
            <div className={classNames([styles.form_col, styles.padding_left])}>
              <Select title="Exhibitors expected"
                      bgClass="arrow_black_bg"
                      options={[{value: "100", title: "100"},
                        {value: "100", title: "100"},
                        {value: "300", title: "300"},
                        {value: "500", title: "500"},
                        {value: "1000", title: "1000"},
                        {value: "5000", title: "5000"},
                        {value: "10000", title: "10000"},
                        {value: "20000", title: "20000"}]} />
            </div>
          </div>
          <div className={styles.form_row}>
            <div className={classNames([styles.form_col, styles.padding_right])}>
              <div className={styles.title}>Event Promo image<span className={styles.asterisk}>*</span></div>
              <input ref={fileInput} id="choose_file"
                     onChange={(e) => {
                       setSelectedFile(e.target.files[0]);
                       var reader = new FileReader();
                       reader.readAsDataURL(e.target.files[0]);
                       reader.onload = function () {
                         setSelectedFileBase64(reader.result);
                       };
                       reader.onerror = function (error) {};
                     }}
                     className={classNames([styles.input, styles.file_input])}
                     type="file" accept="image/png, image/jpeg, image/jpg" />
              <div className={styles.file_info_container}>
                <label className={classNames([styles.file_label, styles.input])} htmlFor="choose_file">
                  Choose file
                </label>
                <span className={styles.chosen_file_info}>{selectedFile && selectedFile.name}</span>
              </div>
              <div className={styles.file_note}>
                👉 This image will be shown as event preview in Web, iOS and Android AladdinB2B Apps.<br /><br />
                Maximum upload file size is 5 Mb. Allowed file extensions: png, jpeg, jpg
              </div>
            </div>
            <div className={classNames([styles.form_col, styles.padding_left, styles.flex_end])}>
              {selectedFileBase64 && <img className={styles.previewPic} src={selectedFileBase64} alt="" />}
              {!selectedFileBase64 && <div className={styles.emptyPreviewPic}>Image preview</div>}
            </div>
          </div>
          <div className={styles.submit_buttons_row}>
            <button className={classNames([styles.cancel_button, styles.btn])}>Cancel</button>
            <button className={classNames([styles.save_button, styles.btn])}>Save & Continue</button>
          </div>
        </form>
      </>
  );
}

export default Form;
