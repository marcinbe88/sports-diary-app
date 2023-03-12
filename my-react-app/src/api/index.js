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
  RUN: 'run',
}
const runCollection = collection(db, COLLECTIONS_NAMES.RUN)
const defaultQueryConstraint = orderBy('createdAt', 'desc')

export const getRunDocRef = docId => doc(db, COLLECTIONS_NAMES.RUN, docId)

export const addRun = run =>
  addDoc(runCollection, {
    ...run,
    createdAt: serverTimestamp(),
  })
export const updateRun = (docRef, run) => updateDoc(docRef, run)
export const deleteRun = docRef => deleteDoc(docRef)

export const queryRun = (filter, cb) => {
  const q = filter
    ? query(runCollection, where('date', '==', filter))
    : query(runCollection, defaultQueryConstraint)

  getDocs(q).then(cb)
}

export const registerDbListener = cb =>
  onSnapshot(query(runCollection, defaultQueryConstraint), cb)
