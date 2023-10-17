import React, { useState, useEffect } from 'react';
import axios from 'axios';

const questions = [
  {
    question: "Por cuántos días es tu viaje?",
    options: [
      "Menos de 1 semana",
      "Entre 1 semana y 15 días",
      "Entre 15 días y un mes",
      "Más de 1 mes",
    ],
  },
  {
    question: "Qué medio de transporte utilizarás?",
    options: ["Avión", "Tren", "Auto/Bus", "Barco"],
  },
  {
    question: "En qué temporada viajarás?",
    options: [
      "Primavera/Verano",
      "Otoño/Invierno",
      "Solo primavera o verano",
      "Solo otoño o invierno",
    ],
  },
];

function Blog() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultProduct, setResultProduct] = useState(null);

  // Agrega los ID de productos según la mayoría de respuestas
  const productIDs = {
    A: '652bdfa0db266e71a5175c18',
    B: '652bdfa0db266e71a5175c0f',
    C: '652bdfa0db266e71a5175c0c',
    D: '652bdf9fdb266e71a5175c03',
  };

  const handleNextQuestion = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers.push(answer);
    setUserAnswers(updatedAnswers);

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      calculateResult();
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    // Contar la mayoría de respuestas
    const answerCounts = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
    };

    userAnswers.forEach((answer) => {
      answerCounts[answer]++;
    });

    // Determinar la respuesta con más votos
    let majorityAnswer = 'A';
    let majorityCount = answerCounts.A;

    for (const answer in answerCounts) {
      if (answerCounts[answer] > majorityCount) {
        majorityAnswer = answer;
        majorityCount = answerCounts[answer];
      }
    }

    // Obtener el ID del producto en función de la mayoría de respuestas
    const resultProductID = productIDs[majorityAnswer];

    // Realizar una solicitud a tu base de datos para obtener el producto
    axios.get(`http://localhost:8000/products/${resultProductID}`)
      .then((response) => {
        console.log(response.data.product)
        setResultProduct(response.data.product);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (showResult) {
      calculateResult();
    }
  }, [showResult]);

  const question = currentQuestion < questions.length ? questions[currentQuestion] : null;

  let display;

  if (showResult) {
    display = (
      <div>
        <p className="text-2xl font-semibold my-4">¡Gracias por completar la trivia! Aquí está tu resultado:</p>
        {resultProduct && (
          <div>
            <p className="text-xl my-2">Producto Recomendado:</p>
            <div className="my-2">
              <strong>Nombre:</strong> {resultProduct.name}
            </div>
            <div className="my-2">
              <strong>Descripción:</strong> {resultProduct.description}
            </div>
            <div className="my-2">
            <img src= {resultProduct.photo} alt="product" />
            </div>
            {/* Agrega más detalles del producto según tu base de datos */}
          </div>
        )}
      </div>
    );
  } else {
    display = (
      <div>
        <p className="text-2xl font-semibold my-4">Pregunta {currentQuestion + 1}:</p>
        {question && (
          <div>
            <p className="text-xl my-2">{question.question}</p>
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleNextQuestion(option)}
                className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-2"
              >
                {option}
              </button>
           ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold my-4">Trivia de Viaje</h1>
      {display}
    </div>
  );
}

export default Blog;