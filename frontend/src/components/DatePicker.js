import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import "./css/DatePicker.css"

const DatePickerExample = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        className="custom-input"
        value={startDate}
        onChange={date => setStartDate(date)}
      />
      <DatePicker
        className="datepicker"
        value={endDate}
        onChange={date => setEndDate(date)}
      />
    </div>
  );
};

export default DatePickerExample;