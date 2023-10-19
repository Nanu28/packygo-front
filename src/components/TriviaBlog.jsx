import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { DataContext } from "../components/Context/DataContext.jsx";
import Swal from 'sweetalert2';

const questions = [
  {
    question: "How many days is your trip?",
    options: [
      "Less than 1 week",
      "Between 1 week and 15 days",
      "Between 15 days and 1 month",
      "More than 1 month",
    ],
  },
  {
    question: "What means of transport will you use?",
    options: ["Plane", "Train", "Car/Bus", "Boat"],
  },
  {
    question: "In which season will you travel?",
    options: [
      "Spring/Summer",
      "Autumn/Winter",
      "Spring or summer only",
      "Autumn or winter only",
    ],
  },
];

function Trivia() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultProduct, setResultProduct] = useState(null);
  const { cart, setCart } = useContext(DataContext);
  const user = localStorage.getItem("user");
  const userObject = JSON.parse(user);
  const role = userObject ? userObject.role : null;
 


  // Agrega los ID de productos según la mayoría de respuestas
  const productIDs = {
    A: '653053003fb4f69052bfd9f5',
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
        console.log(response.data)
        setResultProduct(response.data.product);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const buyProduct = (product) => {
    if (role === null) {
      // El usuario no ha iniciado sesión, muestra el SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'No tiene permiso para comprar',
        text: '¿Desea iniciar sesión?',
        showCancelButton: true,
        confirmButtonText: 'Sí, iniciar sesión',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {

          navigate(`/login`)
        }
      });
    } else {
      setCart([...cart, product]);
      console.log(cart)
    }
  };
  console.log(resultProduct)
  useEffect(() => {
    if (showResult) {
      calculateResult();
    }
  }, [showResult]);

  const question = currentQuestion < questions.length ? questions[currentQuestion] : null;

  let display;

  if (showResult) {
    display = (
      <div className="flex flex-col justify-center">
        <p className="text-lg pb-2 text-center font-semibold md:text-2xl ">
        Thank you for completing the trivia! Here is your result:
        </p>
        {resultProduct && (
          <div className="flex flex-wrap justify-center px-2 py-2 shadow-gray-950 shadow-md bg-white md:my-10 md:px-0 md:mx-52">
            <div className="w-1/2 lg:w-1/4 py-2">
              <img src={resultProduct.photo} alt="product" className="mx-auto" />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 py-5 md:py-10 md:pl-10 md:px-5">
              <p className="text-xl font-semibold my-2 md:pb-5">Recommended Product:</p>
              <div className="my-2">
                <strong>Name:</strong> {resultProduct.name}
              </div>
              <div className="my-2">
                <strong>Description:</strong> {resultProduct.description}
              </div>
              <button
                className="bg-sky-800 hover:bg-yellow-600 text-white text-base font-bold h-8 w-20 rounded-2xl mt-2 flex items-center justify-center"
                onClick={() => buyProduct(resultProduct)}
              >
                Add
              </button>

            </div>
          </div>
        )}
      </div>

    );
  } else {
    display = (
      <div className="flex flex-col items-center justify-center pb-5 md:flex-row">
        <div className="w-2/3 mx-2 p-10 items-center shadow-gray-950 shadow-md bg-orange-300 rounded-lg md:w-2/4">
          <p className="text-xl text-center font-semibold md:text-2xl">Question {currentQuestion + 1}:</p>
          {question && (
            <div>
              <p className="text-base text-center my-2 md:text-xl">{question.question}</p>
              <div className="flex flex-col items-center justify-center gap-2 md:grid md:grid-cols-2">
                {question.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleNextQuestion(option)}
                    className="w-48 text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-2 md:w-auto"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

    );
  }

  return (
    <div className="bg-orange-400">
      <div className='flex gap-1 text-base pl-6 py-2 items-center bg-orange-400'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
        </svg>
        <Link to="/">Home</Link>
        <Link to="/blog">/Blog</Link>
        <p className='font-semibold'>/Travel trivia</p>
      </div>

      <h1 className="text-3xl font-bold pb-2 text-center">Travel trivia</h1>
      {display}
    </div>
  );
}

export default Trivia;