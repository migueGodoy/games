'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Question = {
  img: string;
  correct: string;
  options: string[];
};

const allQuestions: Question[][]  = [
  [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Gato_%282%29_REFON.jpg/640px-Gato_%282%29_REFON.jpg',
      correct: 'Gato',
      options: ['Gato', 'Pato', 'Ratón']
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/20110425_German_Shepherd_Dog_8505.jpg/640px-20110425_German_Shepherd_Dog_8505.jpg',
      correct: 'Perro',
      options: ['Conejo', 'Perro', 'Vaca']
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg/640px-Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg',
      correct: 'Vaca',
      options: ['Gato', 'Vaca', 'Mono']
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Chicken_on_the_grounds_of_Melville_Castle.jpg/640px-Chicken_on_the_grounds_of_Melville_Castle.jpg',
      correct: 'Gallina',
      options: ['Gallina', 'Serpiente', 'Gorila']
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Lowland_Gorilla_%288973697544%29.jpg/640px-Lowland_Gorilla_%288973697544%29.jpg',
      correct: 'Gorila',
      options: ['Gorila', 'Chimpancé', 'Gusano']
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gusano_largo.jpg/640px-Gusano_largo.jpg',
      correct: 'Gusano',
      options: ['Lagarto', 'Gorila', 'Gusano']
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Lagarto_Pogona.jpg/640px-Lagarto_Pogona.jpg',
      correct: 'Lagarto',
      options: ['Lasaña', 'Lagarto', 'Lampara']
    }
  ],
  [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/320px-Red_Apple.jpg',
      correct: 'manzana',
      options: ['manzana', 'pera', 'uva']
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Plantains_on_white_background.png/640px-Plantains_on_white_background.png',
      correct: 'plátano',
      options: ['plátano', 'melón', 'sandía']
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/640px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg',
      correct: 'fresa',
      options: ['fresa', 'limón', 'cereza']
    }
  ],
  [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Fiat_500_in_Emilia-Romagna.jpg/640px-Fiat_500_in_Emilia-Romagna.jpg',
      correct: 'coche',
      options: ['coche', 'avión', 'barco']
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/An-124_RA-82028_in_formation_with_Su-27_09-May-2010.jpg/640px-An-124_RA-82028_in_formation_with_Su-27_09-May-2010.jpg',
      correct: 'avión',
      options: ['tren', 'avión', 'bicicleta']
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/USCGC_Billy_Barco_279.jpg/640px-USCGC_Billy_Barco_279.jpg',
      correct: 'barco',
      options: ['camión', 'barco', 'moto']
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Beta_Alp_4.0.jpg/640px-Beta_Alp_4.0.jpg',
      correct: 'moto',
      options: ['coche', 'barco', 'moto']
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WFP_truck._Blokha.jpg/640px-WFP_truck._Blokha.jpg',
      correct: 'camión',
      options: ['coche', 'camión', 'moto']
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bicicleta_do_Bike_Salvador.jpg/640px-Bicicleta_do_Bike_Salvador.jpg',
      correct: 'bicicleta',
      options: ['coche', 'bicicleta', 'moto']
    }
  ]
];

export default function ReadingPal() {
  const [tema, setTema] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(allQuestions[0][0]);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);

  const loadQuestion = () => {
    const question = allQuestions[tema][Math.floor(Math.random() * allQuestions[tema].length)];
    setCurrentQuestion(question);
  };

  const checkAnswer = (option: string) => {
    const isCorrect = option === currentQuestion.correct;
    if (isCorrect) setScore(score + 1);

    setTimeout(() => {
      if (index < allQuestions[tema].length - 1) {
        setIndex(index + 1);
        loadQuestion();
      } else {
        alert(`¡Juego terminado! Obtuviste ${score + (isCorrect ? 1 : 0)} puntos.`);
        window.location.reload();
      }
    }, 1000);
  };

  useEffect(() => {
    loadQuestion();
  }, [tema]);

  return (
    <div className="max-w-xl mx-auto flex flex-col items-center justify-center p-4">
      <h1 className="text-gray-900 text-3xl mb-4">¡Aprende a Leer! 🎮</h1>
      <label htmlFor="tema" className="text-gray-900 sblock mb-2">Elige una temática:</label>
      <select
        id="tema"
        value={tema}
        onChange={(e) => {
          setTema(Number(e.target.value));
          setScore(0);
          setIndex(0);
        }}
        className="text-gray-900 mb-4 p-2 border rounded"
      >
        <option value="0">Animales</option>
        <option value="1">Frutas</option>
        <option value="2">Transportes</option>
      </select>

      <div className="my-4">
        <Image src={currentQuestion.img} width={500} height={500} alt="Quiz" className="w-48 h-48 mx-auto object-contain mb-4" />
        <div className="flex flex-wrap justify-center gap-4">
          {currentQuestion.options?.map((opt, i) => (
            <button
              key={i}
              onClick={() => checkAnswer(opt)}
              className="bg-purple-300 text-gray-900 px-4 py-2 rounded hover:bg-purple-200 transition"
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="text-xl mt-4 text-gray-900 mx-auto">Puntos: {score}</div>
      </div>
    </div>
  )
}
