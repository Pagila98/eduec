"use client";

import { useState } from "react";

/*
==========================================================
NAVBAR + SIDEBAR LIGHT PREMIUM
==========================================================
*/

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const user = {
    name: "Pablo",
    avatar: "https://i.pravatar.cc/150?img=15",
    overallProgress: 58,
    courses: [
      { title: "Fundamentos de Matemáticas", progress: 35 },
      { title: "Lectura Crítica", progress: 20 },
    ],
  };

  return (
    <>
      {/* NAVBAR SUPERIOR */}
      <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-2xl border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <a className="text-xl font-semibold text-gray-900" href="/">
            EduEc
          </a>

          {/* MENÚ */}
          <div className="flex items-center gap-8 text-gray-600 text-sm font-medium">
            <a href="/" className="hover:text-gray-900 transition">Inicio</a>


            <a href="/simulador" className="hover:text-gray-900 transition">
              Simulador
            </a>

            <a href="/cursos" className="hover:text-gray-900 transition">
              Cursos
            </a>

            <a href="/contacto" className="hover:text-gray-900 transition">
            Contáctenos
            </a>
            <button
            onClick={() => setOpen(true)}
            className="hover:text-gray-900 transition text-xl px-2"
            title="Abrir panel"
            >
           ☰
            </button>
            <a href="/donaciones" className="hover:text-gray-900 transition">
            Donaciones
            </a>
            <a href="/sobre-nosotros" className="hover:text-gray-900 transition">
              Sobre nosotros
            </a>
          </div>
        </div>
      </nav>

      {/* SIDEBAR LIGHT */}
      {open && (
        <div
          className="
            fixed top-0 right-0 h-full w-80 
            bg-white/80 backdrop-blur-2xl
            border-l border-gray-200
            shadow-2xl z-50 animate-slideLeft
            p-6 overflow-y-auto
          "
        >
          {/* BOTÓN DE CIERRE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
          >
            ✕
          </button>

          {/* PERFIL */}
          <div className="flex items-center gap-4 mb-8">
            <img
              src={user.avatar}
              className="w-12 h-12 rounded-full border border-gray-300"
              alt="avatar"
            />
            <div>
              <p className="text-gray-900 font-semibold">{user.name}</p>
              <p className="text-gray-500 text-sm">Estudiante</p>
            </div>
          </div>

          {/* PROGRESO GENERAL */}
          <h3 className="text-gray-900 font-semibold mb-2">Progreso general</h3>

          <p className="text-gray-700 text-sm mb-1">
            {user.overallProgress}% completado
          </p>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
            <div
              className="h-full bg-blue-600 transition-all duration-700"
              style={{ width: `${user.overallProgress}%` }}
            />
          </div>

          {/* CURSOS EN PROGRESO */}
          <h3 className="text-gray-900 font-semibold mb-3">
            Cursos en progreso
          </h3>

          <div className="space-y-4 mb-6">
            {user.courses.map((c, i) => (
              <div key={i}>
                <p className="text-gray-800 text-sm">{c.title}</p>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-blue-500 transition-all duration-700"
                    style={{ width: `${c.progress}%` }}
                  />
                </div>

                <p className="text-xs text-gray-500 mt-1">
                  {c.progress}% completado
                </p>
              </div>
            ))}
          </div>

          {/* BOTÓN FINAL */}
          <a
            href="/dashboard"
            className="block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-center rounded-xl text-white font-medium transition"
          >
            Ir al Dashboard completo
          </a>

        </div>
      )}
    </>
  );
}
