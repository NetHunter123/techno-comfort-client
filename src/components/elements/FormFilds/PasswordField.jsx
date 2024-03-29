import {PasswordInput} from '@mantine/core';

const PasswordField = ({form}) => (
  // <label className={styles.form__label}>
  //   <input
  //     {...register('password', {
  //       required: 'Введите пароль!',
  //       minLength: 4,
  //       maxLength: 20,
  //     })}
  //     className={styles.form__input}
  //     type="password"
  //     placeholder="Password"
  //   />
  //   {errors.password && (
  //     <span className={styles.error_alert}>{errors.password?.message}</span>
  //   )}
  //   {errors.password && errors.password.type === 'minLength' && (
  //     <span className={styles.error_alert}>Минимум 4 символа!</span>
  //   )}
  //   {errors.password && errors.password.type === 'maxLength' && (
  //     <span className={styles.error_alert}>Не более 20 символов!</span>
  //   )}
  // </label>
  <PasswordInput
    // required
    label="Password"
    placeholder="Your password"
    value={form.values.password}
    onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
    error={form.errors.password}
    radius="md"
  />
)

export default PasswordField
