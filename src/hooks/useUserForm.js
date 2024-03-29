export const UseUserForm = () => {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: false,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => {
        let allDownCase;
        if (val.length <= 6) {
          return 'Password should include at least 6 charactersss'
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
  return (
    <div>

    </div>
  );
};

