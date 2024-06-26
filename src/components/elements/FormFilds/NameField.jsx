import {TextInput} from "@mantine/core";

const NameField = ({form}) => (
  // <label className={styles.form__label}>
  //   <input
  //     {...register('name', {
  //       required: 'Введите имя!',
  //       minLength: 2,
  //       maxLength: 15,
  //       pattern: {
  //         value: /^[а-яА-Яa-zA-ZёЁ]*$/,
  //         message: 'Недопустимое значение!',
  //       },
  //     })}
  //     className={styles.form__input}
  //     type="text"
  //     placeholder="Name"
  //   />
  //   {errors.name && (
  //     <span className={styles.error_alert}>{errors.name?.message}</span>
  //   )}
  //   {errors.name && errors.name.type === 'minLength' && (
  //     <span className={styles.error_alert}>Минимум 2 символа!</span>
  //   )}
  //   {errors.name && errors.name.type === 'maxLength' && (
  //     <span className={styles.error_alert}>Не более 15 символов!</span>
  //   )}
  // </label>
  <TextInput
    label="Name"
    placeholder="Your name"
    value={form.values.name}
    onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
    error={form.errors.name }
    radius="md"
  />
)

export default NameField
