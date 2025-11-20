export default function Home() {
  return (
    <section className="pt-40 pb-32 max-w-5xl mx-auto px-6">

      {/* ⭐ TITULAR SUPER PREMIUM (Apple Style) */}
      <h1
        className="
          text-6xl 
          font-extrabold 
          tracking-tight 
          text-neutral-900 
          leading-[1.1] 
          mb-6
        "
      >
        Aprende mejor.<br />
        <span className="text-neutral-800">
          Avanza más rápido.
        </span>
      </h1>

      {/* 📄 DESCRIPCIÓN PRINCIPAL (más legible y profesional) */}
      <p
        className="
          text-xl 
          text-neutral-600 
          leading-relaxed 
          mb-10 
          max-w-2xl
        "
      >
        Una plataforma educativa creada para ayudarte a ingresar a la universidad.
        Simuladores precisos, cursos completos y una experiencia fluida y moderna.
      </p>

      {/* 🎯 CONTENEDOR DE BOTONES (alineación impecable) */}
      <div className="flex flex-wrap gap-4">

        {/* 🔵 BOTÓN PRINCIPAL (Apple Store Inspiration) */}
        <button
          className="
            px-8 py-4
            bg-blue-600 
            text-white 
            rounded-2xl 
            text-lg 
            font-semibold
            shadow-[0_8px_24px_-5px_rgba(37,99,235,0.35)]
            hover:bg-blue-700 
            hover:shadow-[0_10px_28px_-4px_rgba(37,99,235,0.45)]
            active:scale-[0.98]
            transition-all duration-300
          "
        >
          Empezar ahora
        </button>

        {/* ⚪ BOTÓN SECUNDARIO (minimalista y premium) */}
        <button
          className="
            px-8 py-4
            bg-white 
            text-neutral-900 
            border border-neutral-300
            rounded-2xl 
            text-lg 
            font-medium
            hover:bg-neutral-100 
            active:scale-[0.98]
            transition-all duration-300
          "
        >
          Ver cursos
        </button>

      </div>

      {/* 🧠 SUBTÍTULO INFORMATIVO (estilo sección Apple) */}
      <div
        className="
          mt-20 
          text-neutral-500 
          tracking-wide 
          text-sm 
          uppercase
        "
      >
        Plataforma diseñada para estudiantes ecuatorianos 🧠🇪🇨
      </div>

    </section>
  );
}
