export const Form = ({
  handleSubmit,
  defaultValues = { firstName: '', lastName: '', age: '' },
  submitText,
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="firstName">Podaj imię:</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        defaultValue={defaultValues.firstName}
      />
    </div>
    <div>
      <label htmlFor="lastName">Podaj nazwisko:</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        defaultValue={defaultValues.lastName}
      />
    </div>
    <div>
      <label htmlFor="age">Podaj wiek:</label>
      <input
        type="number"
        name="age"
        id="age"
        defaultValue={defaultValues.age}
      />
    </div>
    <button>{submitText}</button>
  </form>
)
