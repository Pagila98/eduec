export default function CursoMatematicas() {
  return (
    <div className="pt-32">
      {/* Título */}
      <h1 className="text-5xl font-semibold tracking-tight mb-4">
        Fundamentos de Matemáticas
      </h1>

      {/* Descripción */}
      <p className="text-gray-400 mb-10 max-w-2xl leading-relaxed">
        Este curso te permitirá desarrollar una base sólida en los conceptos fundamentales de las matemáticas.
        A través de lecciones claras, ejercicios interactivos y ejemplos prácticos, podrás mejorar tu razonamiento lógico
        y tu capacidad para resolver problemas en el proceso de ingreso universitario.
      </p>

      {/* BOTÓN */}
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-medium rounded-xl mb-12">
        Comenzar curso
      </button>

      {/* LISTA DE LECCIONES */}
      <h2 className="text-3xl font-semibold mb-6">Lecciones</h2>

      <div className="space-y-4">

        {/* Lección 1 */}
        <div className="
          bg-white/10 
          backdrop-blur-lg 
          p-6 
          rounded-xl 
          border border-white/10 
          transition-all 
          duration-200 
          hover:bg-white/20 
          hover:border-white/20
        ">
          <h3 className="text-xl font-semibold">1. Números y operaciones básicas</h3>
          <p className="text-gray-300 mt-2">
            Aprende sobre operaciones fundamentales, propiedades y resolución de ejercicios básicos.
          </p>
        </div>

        {/* Lección 2 */}
        <div className="
          bg-white/10 
          backdrop-blur-lg 
          p-6 
          rounded-xl 
          border border-white/10 
          transition-all 
          duration-200 
          hover:bg-white/20 
          hover:border-white/20
        ">
          <h3 className="text-xl font-semibold">2. Álgebra esencial</h3>
          <p className="text-gray-300 mt-2">
            Variables, ecuaciones, expresiones y métodos para resolver problemas algebraicos.
          </p>
        </div>

        {/* Lección 3 */}
        <div className="
          bg-white/10 
          backdrop-blur-lg 
          p-6 
          rounded-xl 
          border border-white/10 
          transition-all 
          duration-200 
          hover:bg-white/20 
          hover:border-white/20
        ">
          <h3 className="text-xl font-semibold">3. Funciones y gráficas</h3>
          <p className="text-gray-300 mt-2">
            Conceptos de función, tipos de funciones y cómo interpretarlas de forma visual.
          </p>
        </div>

        {/* Lección 4 */}
        <div className="
          bg-white/10 
          backdrop-blur-lg 
          p-6 
          rounded-xl 
          border border-white/10 
          transition-all 
          duration-200 
          hover:bg-white/20 
          hover:border-white/20
        ">
          <h3 className="text-xl font-semibold">4. Geometría básica</h3>
          <p className="text-gray-300 mt-2">
            Figuras, perímetros, áreas y razonamiento espacial para resolver problemas geométricos.
          </p>
        </div>

      </div>
    </div>
  );
}
