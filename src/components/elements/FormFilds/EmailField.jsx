import {TextInput} from "@mantine/core";

const EmailField = ({form}) => (
  // <label className={styles.form__label}>
  //   <input
  //     {...register('email', {
  //       required: 'Введите Email!',
  //       pattern: {
  //         value: /\S+@\S+\.\S+/,
  //         message: 'Неправильный Email!',
  //       },
  //     })}
  //     className={styles.form__input}
  //     type="email"
  //     placeholder="Email"
  //   />
  //   {errors.email && (
  //     <span className={styles.error_alert}>{errors.email?.message}</span>
  //   )}
  // </label>

  <TextInput
    // required
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
