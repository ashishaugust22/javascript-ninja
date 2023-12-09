import { useEffect, useState, memo } from 'react';

interface DateInputComponentProps {
  onChangeDate: (date: Date) => void;
  now?: boolean;
}

function DateInputComponent({ onChangeDate, now }: DateInputComponentProps) {
  const [day, setDay] = useState<number>(1);
  const [month, setMonth] = useState<number>(1);
  const [year, setYear] = useState<number>(1979);

  useEffect(() => {
    let date = new Date();
    if (!now) {
      date = new Date(year, month - 1, day);
    }
    onChangeDate(date);
  }, [now, year, month, day, onChangeDate]);

  return (
    <>
      {!now && (
        <div>
          <div>
            <label htmlFor='day'>Day</label>
            <input id='day' type='number' min={1} max={31} value={day} onChange={(e) => setDay(+e.target.value)} />
          </div>
          <div>
            <label htmlFor='month'>Month</label>
            <input
              id='month'
              type='number'
              min={1}
              max={12}
              value={month}
              onChange={(e) => setMonth(+e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='year'>Year</label>
            <input id='year' type='number' value={year} onChange={(e) => setYear(+e.target.value)} />
          </div>
        </div>
      )}
    </>
  );
}

export default memo(DateInputComponent);
