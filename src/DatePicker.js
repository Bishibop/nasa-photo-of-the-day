import React from "react";
import styled from "styled-components";

const StyledDatePicker = styled.section`
    font-size: 1.5em;
    font-weight: bold;
    width: 80%;
    margin: 60px auto 400px auto;
`;

function DatePicker({ date, changeDate }) {

  return (
    <StyledDatePicker className="date-picker">
      <form>
        <label>
          View a different day:&nbsp;
          <input type="date" value={date} onChange={changeDate}/>
        </label>
      </form>
    </StyledDatePicker>
  );
}
        
export default DatePicker;
