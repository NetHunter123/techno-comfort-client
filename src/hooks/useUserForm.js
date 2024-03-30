import {useForm} from "@mantine/form";

export const useUserForm = () => {
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

  return form
};

