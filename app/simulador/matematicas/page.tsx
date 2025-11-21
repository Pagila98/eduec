"use client";
import { useState } from "react";

export default function MatemáticasTest() {
  const questions = [
    {
      id: 1,
      text: "¿Cuál es el resultado de 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct: 1,
    },
    {
      id: 2,
      text: "¿Cuál es la raíz cuadrada de 81?",
      options: ["7", "8", "9", "10"],
      correct: 2,
    },
  ];

  const [answers, setAnswers] = useState<Record<string, number>>({});

  const handleSelect = (qId: string, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
  };

  const score = Object.keys(answers).reduce((acc, qId) => {
    const questionId = Number(qId);
    const question = questions.find((q) => q.id === questionId);

    if (question && answers[qId] === question.correct)
      return acc + 1;

    return acc;
  }, 0);

  return (
    <div className="pt-10">
      <h1 className="text-5xl font-semibold tracking-tight mb-3">
        Simulador de Matemáticas
      </h1>
      <p className="text-gray-400 text-lg mb-10">
        Responde las preguntas y mira tu puntaje en tiempo real.
      </p>

      <div className="space-y-8">
        {questions.map((q) => (
          <div
            key={q.id}
            className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl transition hover:scale-[1.01]"
          >
            <p className="text-xl font-medium mb-5">{q.text}</p>

            <div className="grid gap-3">
              {q.options.map((opt, idx) => {
                const selected = answers[String(q.id)] === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(String(q.id), idx)}
                    className={`py-3 px-4 text-left rounded-xl transition-all border 
                      ${
                        selected
                          ? "bg-blue-600 border-blue-400 text-white shadow-lg scale-[1.02]"
                          : "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40"
                      }
                    `}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-3">Resultado</h2>
        <p className="text-gray-300">
          Preguntas contestadas: {Object.keys(answers).length} / {questions.length}
        </p>
        <p className="text-white text-xl mt-2 font-medium">
          Puntaje actual: {score}
        </p>
      </div>
    </div>
  );
}
