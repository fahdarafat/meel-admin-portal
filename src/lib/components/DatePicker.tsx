import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function DatePicker({
  onSelect,
}: {
  onSelect: (date: Date | undefined) => void;
}) {
  const [selected, setSelected] = React.useState<Date>();
  const [timeValue, setTimeValue] = React.useState<string>('00:00');

  const handleTimeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const time = e.target.value;
    if (!selected) {
      setTimeValue(time);
      return;
    }
    const [hours, minutes] = time.split(':').map((str) => parseInt(str, 10));
    const newSelectedDate = new Date(
      selected.getFullYear(),
      selected.getMonth(),
      selected.getDate(),
      hours,
      minutes
    );
    setSelected(newSelectedDate);
    onSelect(newSelectedDate);
    setTimeValue(time);
  };

  const handleDaySelect = (date: Date | undefined) => {
    if (!timeValue || !date) {
      setSelected(date);
      onSelect(date);
      return;
    }
    const [hours, minutes] = timeValue
      .split(':')
      .map((str) => parseInt(str, 10));
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hours,
      minutes
    );
    setSelected(newDate);
    onSelect(newDate);
  };

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={handleDaySelect}
      className="date-picker"
      footer={
        <>
          <FormControl isRequired>
            <FormLabel>Time Window</FormLabel>
            <Input
              placeholder="First name"
              size="sm"
              value={selected ? selected.toLocaleString() : 'none'}
            />
          </FormControl>
          <p>
            Pick a time:{' '}
            <input type="time" value={timeValue} onChange={handleTimeChange} />
          </p>
        </>
      }
    />
  );
}
