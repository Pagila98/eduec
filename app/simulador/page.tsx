export default function SimuladorPage() {
  return (
    <div className="pt-32">
      
      {/* 🏷️ TÍTULO PRINCIPAL */}
      <h1 className="text-5xl font-semibold tracking-tight text-gray-900 mb-6">
        Simulador
      </h1>

      {/* 📄 DESCRIPCIÓN */}
      <p className="text-gray-600 mb-12 max-w-2xl">
        Practica con áreas específicas y evalúa tu preparación para el ingreso universitario.
      </p>

      {/* 🔳 GRID DE TARJETAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* 🟦 TARJETA DE MATEMÁTICAS */}
        <div
          className="
            bg-white/60
            backdrop-blur-xl
            p-8 rounded-3xl
            border border-gray-200
            shadow-lg
            transition-all duration-300
            hover:shadow-xl hover:bg-white/80
          "
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Matemáticas
          </h2>

          {/* SUBTÍTULO MÁS LEGIBLE */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            Ejercicios, problemas y razonamiento lógico.
          </p>

          {/* BOTÓN */}
          <button
            className="
              px-6 py-2 
              bg-blue-600 hover:bg-blue-700
              rounded-xl text-white font-medium
              transition-all
            "
          >
            Empezar
          </button>
        </div>

        {/* 🟪 TARJETA DE LENGUAJE */}
        <div
          className="
            bg-white/60
            backdrop-blur-xl
            p-8 rounded-3xl
            border border-gray-200
            shadow-lg
            transition-all duration-300
            hover:shadow-xl hover:bg-white/80
          "
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Lenguaje
          </h2>

          {/* SUBTÍTULO MÁS OSCURO */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lectura crítica, gramática y comprensión.
          </p>

          {/* BOTÓN */}
          <button
            className="
              px-6 py-2 
              bg-blue-600 hover:bg-blue-700
              rounded-xl text-white font-medium
              transition-all
            "
          >
            Empezar
          </button>
        </div>

      </div>
    </div>
  );
}
