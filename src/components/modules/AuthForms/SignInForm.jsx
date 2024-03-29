import { useState } from 'react'
import { useRouter } from 'next/router'
// import { singInFx } from '../../../app/api/auth'
// import { showAuthError } from '@/utils/errors'
import {Button, Checkbox, Paper, Stack, Title} from "@mantine/core";
import EmailField from "@/components/elements/FormFilds/EmailField";
import PasswordField from "@/components/elements/FormFilds/PasswordField";

import styles from '@/styles/auth/index.module.css'
import {useForm} from "@mantine/form";

const SignInForm = () => {
  const [spinner, setSpinner] = useState(false)
  const route = useRouter()

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
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

  // const onSubmit = async (data) => {
  //   try {
  //     setSpinner(true)
  //     await singInFx({
  //       url: '/users/login',
  //       username: data.name,
  //       password: data.password,
  //     })
  //
  //     resetField('name')
  //     resetField('password')
  //     route.push('/dashboard')
  //   } catch (error) {
  //     showAuthError(error)
  //   } finally {
  //     setSpinner(false)
  //   }
  // }

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
          <EmailField form={form}/>
          <PasswordField form={form}/>
        </Stack>

        <Button
          type="submit"
          loading={spinner} loaderProps={{type: 'dots'}}
          className={"m-0"}
          variant="gradient"
          gradient={{from: 'yellow', to: 'orange', deg: 90}}
          fullWidth size="md"
          autoContrast
        >
          Увійти
        </Button>
      </form>
    </Paper>
  )
}

export default SignInForm
