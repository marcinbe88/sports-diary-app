export const getFormData = e => {
  const form = e.target
  const { date, name, time } = form

  const formData = {
    date: date.value,
    name: name.value,
    time: time.value,
  }

  form.reset()

  return formData
}
