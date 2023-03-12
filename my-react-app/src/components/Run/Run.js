import { useState } from 'react'
import { deleteRun, getRunDocRef, updateRun } from '../../api/showRuns.js'
import { getFormData } from '../../utils/getFormData'
import { Form } from '../Form/Form'

export const Run = ({ id, date, name, time }) => {
  const [isDraftModeEnabled, setDraftMode] = useState(false)

  const docRef = getRunDocRef(id)
  const handleDelete = () => deleteRun(docRef)
  const handleUpdate = e => {
    e.preventDefault()

    updateRun(docRef, getFormData(e))
    setDraftMode(false)
  }

  return (
    <li>
      <p>Race name: {name}</p>
      <p>Race date: {date}</p>
      <p>Time: {time}</p>
      <button onClick={e => handleDelete(id)}>Delete race</button>
      <button onClick={() => setDraftMode(!isDraftModeEnabled)}>
        {isDraftModeEnabled
          ? 'Przerwij aktualizację'
          : 'Zaktualizuj dane wyścigu'}
      </button>
      {isDraftModeEnabled && (
        <Form
          handleSubmit={e => handleUpdate(e, id)}
          defaultValues={{ name, date, time }}
          submitText="Zatwierdź nowe dane wyścigu"
        />
      )}
    </li>
  )
}
