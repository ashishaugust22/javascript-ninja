import { useCallback, useState } from 'react';
import Header from './components/AppHeader';
import DateInputComponent from './components/DateInput';
import './App.css';

function App() {
  const [now, setNow] = useState<boolean>(true);
  const [from, setFrom] = useState<Date>(new Date());
  const [to, setTo] = useState<Date>(new Date());

  const onChangeFromDate = useCallback((date: Date) => {
    setFrom(date);
  }, []);

  const onChangeToDate = useCallback((date: Date) => {
    setTo(date);
  }, []);

  function getValue(type: 'year' | 'month' | 'day') {
    const isNegative = to.getTime() < from.getTime();
    switch (type) {
      case 'year':
        if (isNegative) return 0;
        const years = to.getFullYear() - from.getFullYear();
        return years < 0 ? 0 : years;
      case 'month':
        if (isNegative) return 0;
        const months = to.getMonth() - from.getMonth();
        return months < 0 ? 0 : months;
      case 'day':
        if (isNegative) return 0;
        const days = to.getDate() - from.getDate();
        return days < 0 ? 0 : days;
    }
  }

  return (
    <div className='App'>
      <Header />
      <div>
        <h3>From</h3>
        <DateInputComponent onChangeDate={onChangeFromDate} />
        <div>
          <label htmlFor='now-checkbox'>
            <input type='checkbox' id='now-checkbox' checked={!now} onChange={(e) => setNow(!e.target.checked)} />
            Enter end date manually
          </label>
        </div>
        {!now && <h3>To</h3>}
        <DateInputComponent now={now} onChangeDate={onChangeToDate} />
      </div>
      <div className='age-output'>
        <p>Year: {getValue('year')}</p>
        <p>Month: {getValue('month')}</p>
        <p>Day: {getValue('day')}</p>
      </div>
    </div>
  );
}

export default App;
