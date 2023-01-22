import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import "./css/DatePicker.css"

const DatePickerExample = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
        <div>
         <DatePicker 
        className="custom-input-top"
        value={startDate}
        onChange={date => setStartDate(date)}/>
    </div>
     <div> 
    <DatePicker
        className="custom-input-bottom"
        value={endDate}
        onChange={date => setEndDate(date)} />
      </ div>
</div>
  );
};

export default DatePickerExample;