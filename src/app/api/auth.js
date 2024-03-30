import api from '../axiosClient'
import {toast} from "react-toastify";
import {createEffect} from "effector";

export const signUpFx = createEffect(async ({url, name, surname, password, email}) => {
  const {data} = await api.post(url, {name, surname, email, password})
  console.log("inputed", {url, name, surname, password, email})

  if (data.warningMessage) {
    toast.error(data.warningMessage)
  }

  toast.success("Реєстрація успішна, тепер авторизуйтесь для входу")
  return data
})

export const signInFx = createEffect(async ({url, password, email}) => {
  console.log("inputed", {url, password, email})
  const {data} = await api.post(url, {email, password})
  if (data.warningMessage) {
    toast.error(data.warningMessage && "Не вірні дані!")
  }

  toast.success("Авторизація успішна, вдалих покупок!")
  return data
})
