import {TextInput} from "@mantine/core";

const SurnameField = ({form}) => (
  <TextInput

    label="Surname"
    placeholder="Your surname"
    value={form.values.surname}
    onChange={(event) => form.setFieldValue('surname', event.currentTarget.value)}
    error={form.errors.surname || "Помилка у даних"}
    radius="md"
  />
)

export default SurnameField
