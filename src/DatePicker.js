import React from "react";

function DatePicker({ date, changeDate }) {

  return (
    <section className="date-picker">
      <form>
        <label>
          Date:
          <input type="date" value={date} onChange={changeDate}/>
        </label>
      </form>
    </section>
  );
}
        
export default DatePicker;
