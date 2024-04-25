import {TextInput} from "@mantine/core";

const EmailField = ({form}) => (

  <TextInput
    label="Email"
    placeholder="hello@gmail.com"
    value={form.values.email}
    onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
    error={form.errors.email}
    type="email"
    radius="md"
  />
)

export default EmailField
