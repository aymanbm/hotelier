import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import { Helmet } from 'react-helmet-async';

function Contact() {

  const [value, setValue] = useState([null, null]);
  const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  console.log(value[0])
  return (<>
    <Helmet>
        <title>Contact</title>
        <meta name='description' content='contact-page'/> 
      </Helmet>
    <DatePickerInput
      leftSection={icon}
      clearable
      type="range"
      placeholder="Date de reservation"
      variant="unstyled"
      color='black'
      value={value}
      onChange={setValue}
    />
    </>
  );
}
export default Contact;
