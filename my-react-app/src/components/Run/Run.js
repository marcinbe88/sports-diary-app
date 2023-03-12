import { useState } from 'react'
import { deleteActor, getActorDocRef, updateActor } from '../api'
import { getFormData } from '../utils/getFormData'
import { Form } from './Form'

export const Actor = ({ id, firstName, lastName, age }) => {
  const [isDraftModeEnabled, setDraftMode] = useState(false)

  const docRef = getActorDocRef(id)
  const handleDelete = () => deleteActor(docRef)
  const handleUpdate = e => {
    e.preventDefault()

    updateActor(docRef, getFormData(e))
    setDraftMode(false)
  }

  return (
    <li>
      <p>Imię: {firstName}</p>
      <p>Nazwisko: {lastName}</p>
      <p>Wiek: {age}</p>
      <button onClick={e => handleDelete(id)}>Usuń aktora</button>
      <button onClick={() => setDraftMode(!isDraftModeEnabled)}>
        {isDraftModeEnabled
          ? 'Przerwij aktualizację'
          : 'Zaktualizuj dane aktora'}
      </button>
      {isDraftModeEnabled && (
        <Form
          handleSubmit={e => handleUpdate(e, id)}
          defaultValues={{ firstName, lastName, age }}
          submitText="Zatwierdź nowe dane aktora"
        />
      )}
    </li>
  )
}
