import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
 import {
 getFirestore ,
 addDoc,
 collection ,
 getDocs,
 deleteDoc,
 doc,
 getDoc,
 updateDoc,
 setDoc
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js"; 

const firebaseConfig = {
    apiKey: "AIzaSyAHhA99ek5TQ26mgUD5hyqZ-ewxL5n3LKg",
    authDomain: "crudnofirebase.firebaseapp.com",
    projectId: "crudnofirebase",
    storageBucket: "crudnofirebase.appspot.com",
    messagingSenderId: "676546090714",
    appId: "1:676546090714:web:16db3b53eccfb168b3f7e3"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addUserToFirestore(quiz) {
  // await addDoc(doc(db, 'quizzes', 1), quiz);
  // console.log("Documento adicionado com ID: ", docRef.id);
  // console.error("Erro ao adicionar documento: ", error);
  try {
    await addDoc(collection(db, 'quizzes'), quiz);
    console.log("Documento adicionado com ID: ");
  } catch (error) {
    console.error("Erro ao adicionar documento: ");
  }
   
}


document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário

  // Obter os valores do formulário
  const pergunta = document.getElementById('pergunta').value;
  const res_1 = document.getElementById('res_1').value;
  const res_2 = document.getElementById('res_2').value;
  const res_3 = document.getElementById('res_3').value;
  const res_4 = document.getElementById('res_4').value;

  // Criar um objeto com os valores do formulário
  const newPer = {
    pergunta: pergunta,
    res_1: res_1,
    res_2: res_2,
    res_3: res_3,
    res_4: res_4
  }
  addUserToFirestore(newPer);

})

