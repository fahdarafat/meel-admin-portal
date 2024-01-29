import { Box } from '@chakra-ui/react';
import DateTimePicker from 'react-datetime-picker';

const CustomDateTimePicker = ({ onChange, value }) => {
  return (
    <Box>
      <DateTimePicker onChange={onChange} value={value} />
    </Box>
  );
};

export default CustomDateTimePicker;
