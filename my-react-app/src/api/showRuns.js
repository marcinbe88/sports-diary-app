import {
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  collection,
  doc,
  serverTimestamp,
  where,
} from 'firebase/firestore'
import { db } from './firebase'

const COLLECTIONS_NAMES = {
  RUNS: 'runs',
}
const runsCollection = collection(db, COLLECTIONS_NAMES.RUNS)
const defaultQueryConstraint = orderBy('createdAt', 'desc')

export const getRunDocRef = docId => doc(db, COLLECTIONS_NAMES.RUNS, docId)

export const addRun = run =>
  addDoc(runsCollection, {
    ...run,
    createdAt: serverTimestamp(),
  })
export const updateRun = (docRef, run) => updateDoc(docRef, run)
export const deleteRun = docRef => deleteDoc(docRef)

export const queryRuns = (filter, cb) => {
  const q = filter
    ? query(runsCollection, where('date', '==', filter))
    : query(runsCollection, defaultQueryConstraint)

  getDocs(q).then(cb)
}

export const registerDbListener = cb =>
  onSnapshot(query(runsCollection, defaultQueryConstraint), cb)
