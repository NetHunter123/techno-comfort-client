import { useState } from 'react'
import { useRouter } from 'next/router'
import {Button, Checkbox, Paper, Stack, Title} from "@mantine/core";
import EmailField from "@/components/elements/FormFilds/EmailField";
import PasswordField from "@/components/elements/FormFilds/PasswordField";

import styles from '@/styles/auth/index.module.css'
import {useUserForm} from "@/hooks/useUserForm";
import {signInFx} from "@/app/api/auth";
import {toast} from "react-toastify";
import {useForm} from "@mantine/form";

const SignInForm = () => {
  const [spinner, setSpinner] = useState(false)
  const route = useRouter()
  // const form = useUserForm()

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (val) => {
        if ([...val].length === 0) {
          return "Будьласка введіть email"
        }
        if (/^\S+@\S+$/.test(val)) {
          return null
        } else {
          return 'Будьласка введіть email коректний email'
        }
        return null
      },
      password: (val) => {
        let allDownCase;
        if (val.length <= 5) {
          // return 'Password should include at least 6 characters'
          return 'Мінімальна довжина паролю 6 символів'
        }

        if(!/[A-Z]/.test(val)){
          return "Пароль повинен містити великі літери"
        }

        return null
      },
    },
  });


  const onSubmit = async (data) => {
    console.log("login")
    try {
      setSpinner(true)
      const userData = await signInFx({
        url: '/users/login',
        email: data.email,
        password: data.password,
      })
      console.log("reg_userData:", userData)
      if (!userData) {
        return
      }

      form.setFieldValue('email', "")
      form.setFieldValue('password', "")
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    } finally {
      setSpinner(false)
    }
  }


  return (
    <Paper className={`${styles.auth_form}  h-fit `}
           shadow="md" radius="lg" withBorder>
      <form noValidate
        onSubmit={form.onSubmit((values, event) => {
          onSubmit(values)
        })}
      >
        <Title order={2} className={`${styles.auth_form_title} text-center mb-[40px]`}>
          Авторизація
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
