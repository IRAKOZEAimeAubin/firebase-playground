import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./app.js";

const addTask = async (name) => {
    const docRef = await addDoc(collection(db, 'tasks'), {
        name,
        createdAt: new Date()
    });

    return docRef.id;
};

const getTasks = async () => {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const updateTask = async (taskId, data) => {
    const taskRef = doc(db, 'tasks', taskId);
    await updateDoc(taskRef, data);
};

const deleteTask = async (taskId) => {
    await deleteDoc(doc(db, 'tasks', 'u3QGdB427ybnWXcWJMw4'));
}

console.log(await getTasks());
