// import { useForm } from 'react-hook-form'
// import { useState } from 'react'
// import { useStore } from 'effector-react'
// import NameInput from '@/components/elements/AuthForms/NameField'
// import { IInputs } from '@/types/auth'
// import { $mode } from '@/context/mode'
// import EmailField from '@/components/elements/AuthForms/EmailField'
// import PasswordInput from '@/components/elements/AuthForms/PasswordInput'
// import { singUpFx } from '@/app/api/auth'
// import { showAuthError } from '@/utils/errors'
// import spinnerStyles from '@/styles/spinner/index.module.scss'

import {useState} from "react";
import {useForm} from "@mantine/form";
import NameField from "@/components/elements/FormFilds/NameField";
import SurnameField from "@/components/elements/FormFilds/SurnameField";
import EmailField from "@/components/elements/FormFilds/EmailField";
import PasswordField from "@/components/elements/FormFilds/PasswordField";
import {Checkbox, Stack, Button, Paper, Title} from "@mantine/core";
import styles from '@/styles/auth/index.module.css'


const SignUpForm = ({switchForm}) => {
  const [spinner, setSpinner] = useState(false)
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  //   resetField,
  // } = useForm()
  // const mode = useStore($mode)
  // const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  const form = useForm({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      terms: false,
    },

    validate: {
      name: (val) => val.length <= 1 ? "Мінімальна кількість символів 2" : null,
      surname: (val) => val.length <= 1 ? "Мінімальна кількість символів 2" : null,
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Помилка у введенні'),
      password: (val) => {
        let allDownCase;
        if (val.length <= 6) {
          // return 'Password should include at least 6 characters'
          return 'Мінімальна довжина паролю 6 символів'
        }

        [...val].map((ch) => {
          if (ch === ch.toUpperCase()) {
            allDownCase = false
          } else {
            allDownCase = true
          }
        })

        if (allDownCase) {
          return "Пароль повинен містити великі літери"
        }
        return null
      },
    },
  });

  const onSubmit = async (data) => {
    try {
      setSpinner(true)
      const userData = await singUpFx({
        url: '/users/signup',
        username: data.name,
        password: data.password,
        email: data.email,
      })

      if (!userData) {
        return
      }

      resetField('email')
      resetField('name')
      resetField('password')
      switchForm()
    } catch (error) {
      showAuthError(error)
    } finally {
      setSpinner(false)
    }
  }

  return (
    <Paper className={`${styles.auth_form}  h-fit `}
           shadow="md" radius="lg" withBorder>
      <form
        onSubmit={form.onSubmit((values, event) => {
        })}
      >
        <Title order={2} className={`${styles.auth_form_title} text-center mb-[40px]`}>
          Створення аккаунту
        </Title>
        <Stack mb="xl">
          <NameField form={form}/>
          <SurnameField form={form}/>
          <EmailField form={form}/>
          <PasswordField form={form}/>
          <Checkbox
            color="yellow"
            variant="outline"

            label="I accept terms and conditions"
            checked={form.values.terms}
            onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
          />
        </Stack>

        <Button
          type="submit"
          loading={spinner} loaderProps={{type: 'dots'}}
          className={"m-0"}
          variant="gradient"
          gradient={{from: 'yellow', to: 'orange', deg: 90}}
          fullWidth size="md"
          autoContrast
          disabled={!form.values.terms}
        >
          Зареєструватися
        </Button>
      </form>
    </Paper>
  )
}

export default SignUpForm
