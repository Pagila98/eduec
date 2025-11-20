"use client";

import { useState, useRef, useEffect } from "react";

export default function CursosPage() {
  // ---------------------------------------------------------
  // ESTADOS
  // ---------------------------------------------------------
  const [filter, setFilter] = useState("todos");
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  // Cerrar autocompletado al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setQuery("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ---------------------------------------------------------
  // CURSOS TEMPORALES
  // ---------------------------------------------------------
  const cursos = [
    {
      id: "mate",
      title: "Fundamentos de Matemáticas",
      description: "Aritmética, álgebra y razonamiento matemático.",
      emoji: "📘",
      category: "matematicas",
      url: "/cursos/fundamentos-matematicas",
    },
    {
      id: "lectura",
      title: "Lectura Crítica",
      description: "Comprensión, análisis y razonamiento verbal.",
      emoji: "📗",
      category: "lenguaje",
      url: "#",
    },
    {
      id: "logica",
      title: "Razonamiento Lógico",
      description: "Lógica, deducción y resolución de problemas.",
      emoji: "📙",
      category: "logica",
      url: "#",
    },
  ];

  // ---------------------------------------------------------
  // FILTRO + BÚSQUEDA
  // ---------------------------------------------------------
  const filteredCursos = cursos.filter((curso) => {
    const matchesFilter = filter === "todos" || curso.category === filter;
    const matchesQuery = curso.title.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  const suggestions =
    query.length > 0
      ? cursos.filter((c) =>
          c.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  // ---------------------------------------------------------
  // UI PRINCIPAL
  // ---------------------------------------------------------
  return (
    <div className="pt-32 max-w-6xl mx-auto px-6">

      {/* ---------------------------------------------------------
          TÍTULO
      --------------------------------------------------------- */}
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
        Cursos disponibles
      </h1>

      <p className="text-gray-600 mb-8 max-w-2xl">
        Explora nuestros cursos diseñados para impulsarte hacia el ingreso universitario.
      </p>


      {/* ---------------------------------------------------------
          BUSCADOR + AUTOCOMPLETADO (VERSIÓN CLARA)
      --------------------------------------------------------- */}
      <div ref={searchRef} className="relative mb-8">

        {/* Icono */}
        <span className="absolute left-4 top-3 text-gray-400 text-lg">🔍</span>

        <input
          type="text"
          placeholder="Buscar cursos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full pl-12 pr-4 py-3 
            bg-white border border-gray-300 
            rounded-xl text-gray-700 
            placeholder-gray-400
            shadow-sm
            focus:outline-none focus:ring-2 focus:ring-blue-600 
            transition
          "
        />

        {/* Autocompletado claro */}
        {query.length > 0 && suggestions.length > 0 && (
          <div
            className="
              absolute left-0 right-0 mt-2 
              bg-white shadow-xl 
              border border-gray-200 
              rounded-xl
              overflow-hidden
              z-20
            "
          >
            {suggestions.map((s) => (
              <a
                key={s.id}
                href={s.url}
                className="
                  block px-4 py-3 text-gray-700 
                  hover:bg-gray-100 transition
                "
              >
                {s.emoji} {s.title}
              </a>
            ))}
          </div>
        )}
      </div>


      {/* ---------------------------------------------------------
          FILTROS (claros)
      --------------------------------------------------------- */}
      <div className="flex gap-4 mb-12">
        {[
          { id: "todos", label: "Todos" },
          { id: "matematicas", label: "Matemáticas" },
          { id: "lenguaje", label: "Lenguaje" },
          { id: "logica", label: "Lógica" },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={`
              px-4 py-2 rounded-full border text-sm transition-all
              ${
                filter === btn.id
                  ? "bg-blue-600 text-white border-blue-600 shadow"
                  : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            {btn.label}
          </button>
        ))}
      </div>


      {/* ---------------------------------------------------------
          TARJETAS DE CURSOS (Glassmorphism claro)
      --------------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredCursos.map((curso) => (
          <div
            key={curso.id}
            className="
              bg-white/70 backdrop-blur-xl 
              border border-gray-200
              rounded-2xl p-6 shadow-lg 
              transition hover:shadow-xl hover:bg-white/90
            "
          >
            {/* Icono */}
            <div className="text-4xl mb-4">{curso.emoji}</div>

            {/* Título */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {curso.title}
            </h3>

            {/* Descripción mejorada */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {curso.description}
            </p>

            {/* Botón */}
            <a
              href={curso.url}
              className="
                px-4 py-2 bg-blue-600 hover:bg-blue-700 
                rounded-xl text-white font-medium transition
              "
            >
              Ver curso
            </a>
          </div>
        ))}
      </div>


      {/* Si no hay resultados */}
      {filteredCursos.length === 0 && (
        <p className="text-gray-600 mt-8">
          No hay cursos que coincidan con la búsqueda.
        </p>
      )}
    </div>
  );
}
