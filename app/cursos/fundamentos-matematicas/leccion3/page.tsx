export default function Leccion1() {
  return (
    <div className="max-w-3xl mx-auto">

      {/* TÍTULO */}
      <h1 className="text-4xl font-semibold tracking-tight mb-6">
        Lección 1: Números y operaciones básicas
      </h1>

      {/* DESCRIPCIÓN */}
      <p className="text-gray-400 mb-10 leading-relaxed">
        En esta lección aprenderás los conceptos fundamentales de los números,
        sus propiedades y cómo usarlos correctamente en operaciones básicas.
        Esta base es esencial para avanzar en el razonamiento matemático.
      </p>

      {/* CONTENEDOR PRINCIPAL (Video o imagen) */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl overflow-hidden mb-12">
        <div className="aspect-video bg-gray-900/40 flex items-center justify-center text-white/60">
          🎥 Aquí puede ir un video explicativo o recurso visual
        </div>
      </div>

      {/* CONTENIDO DE LA LECCIÓN */}
      <div className="space-y-8 text-gray-200 leading-relaxed">

        {/* Sección 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">¿Qué son los números?</h2>
          <p>
            Los números son símbolos que utilizamos para representar cantidades.
            Existen distintos tipos de números, como naturales, enteros, racionales e irracionales.
          </p>
        </section>

        {/* Sección 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Operaciones básicas</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Suma:</strong> combinar cantidades.</li>
            <li><strong>Resta:</strong> diferencia entre cantidades.</li>
            <li><strong>Multiplicación:</strong> sumas repetidas.</li>
            <li><strong>División:</strong> repartir una cantidad en partes iguales.</li>
          </ul>
        </section>

        {/* Sección 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Propiedades útiles</h2>
          <p>
            Durante la resolución de problemas, estas propiedades permiten simplificar cálculos
            y razonar de forma más eficiente:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3 text-gray-300">
            <li>Conmutativa</li>
            <li>Asociativa</li>
            <li>Distributiva</li>
            <li>Elemento neutro</li>
          </ul>
        </section>
      </div>

      {/* BOTÓN SIGUIENTE */}
      <div className="mt-16 flex justify-end">
        <button className="
          px-6 py-3 
          bg-blue-600 
          hover:bg-blue-700 
          rounded-xl 
          text-white font-medium 
          transition-all duration-200
        ">
          Siguiente lección →
        </button>
      </div>

    </div>
  );
}
