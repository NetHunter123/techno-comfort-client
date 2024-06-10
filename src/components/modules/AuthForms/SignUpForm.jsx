import {useState} from "react";
import {useForm} from "@mantine/form";
import NameField from "@/components/elements/FormFilds/NameField";
import SurnameField from "@/components/elements/FormFilds/SurnameField";
import EmailField from "@/components/elements/FormFilds/EmailField";
import PasswordField from "@/components/elements/FormFilds/PasswordField";
import {Checkbox, Stack, Button, Paper, Title} from "@mantine/core";
import {useUserForm} from "@/hooks/useUserForm";
import {toast} from "react-toastify";
import {signUpFx} from "@/app/api/auth";
import styles from './auth.module.css'


const SignUpForm = ({switchForm}) => {
  const [spinner, setSpinner] = useState(false)
  const form = useUserForm()

  const onSubmit = async (data) => {
    console.log("reg")
    try {
      setSpinner(true)
      const userData = await signUpFx({
        url: '/users/signup',
        name: data.name,
        surname: data.surname,
        password: data.password,
        email: data.email,
      })
      console.log("reg_userData:", userData)
      if (!userData) {
        return
      }

      form.setFieldValue('name', "")
      form.setFieldValue('surname', "")
      form.setFieldValue('email', "")
      form.setFieldValue('password', "")
      form.setFieldValue('terms', false)
      switchForm()
    } catch (error) {
      console.log("Something went wrong - error:", error)
      toast.error(error.response?.data.message || "Щось пішло не так")
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
          Створення аккаунту
        </Title>
        <Stack mb="xl">
          <NameField form={form}/>
          <SurnameField form={form}/>
          <EmailField form={form}/>
          <PasswordField form={form}/>
          {/*<Checkbox*/}
          {/*  color="yellow"*/}
          {/*  variant="outline"*/}
					
          {/*  label="I accept terms and conditions"*/}
          {/*  checked={form.values.terms}*/}
          {/*  onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}*/}
          {/*/>*/}
        </Stack>

        <Button
          type="submit"
          loading={spinner} loaderProps={{type: 'dots'}}
          className={"m-0"}
          variant="gradient"
          gradient={{from: 'yellow', to: 'orange', deg: 90}}
          fullWidth size="md"
          autoContrast
          // disabled={!form.values.terms}
        >
          Зареєструватися
        </Button>
      </form>
    </Paper>
  )
}

export default SignUpForm
