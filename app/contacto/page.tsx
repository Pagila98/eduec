export default function ContactoPage() {
  return (
    <div className="pt-32 max-w-4xl mx-auto px-6">

      {/* TÍTULO PRINCIPAL */}
      <h1 className="text-5xl font-semibold tracking-tight mb-6">
        Contáctenos
      </h1>

      <p className="text-gray-600 text-lg mb-12 max-w-2xl">
        Estamos aquí para ayudarte. Elige el tipo de contacto que necesitas y nos pondremos en comunicación contigo lo antes posible.
      </p>

      {/* GRID DE OPCIONES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* SECCIÓN TRABAJE / COLABORE */}
        <div
          className="
            bg-white/80 backdrop-blur-xl 
            border border-gray-200 
            rounded-2xl p-8 shadow-lg 
            transition hover:shadow-xl hover:bg-white
          "
        >
          <h2 className="text-2xl font-semibold mb-3">
            Trabaje / Colabore con nosotros 🤝
          </h2>

          <p className="text-gray-500 mb-6 leading-relaxed">
            ¿Deseas colaborar como docente, creador de contenido o desarrollador?
            Siempre estamos buscando talento apasionado por la educación.
          </p>
          <a
            href="#formulario"
            className="
              inline-block px-5 py-2
              bg-blue-600 hover:bg-blue-700
              text-white rounded-xl font-medium transition
            "
          >
            Enviar solicitud
          </a>
        </div>

        {/* SECCIÓN ASESORÍA ACADÉMICA */}
        <div
          className="
            bg-white/80 backdrop-blur-xl 
            border border-gray-200 
            rounded-2xl p-8 shadow-lg 
            transition hover:shadow-xl hover:bg-white
          "
        >
          <h2 className="text-2xl font-semibold mb-3">
            Asesoría académica 📘
          </h2>

          <p className="text-gray-500 mb-6 leading-relaxed">
            Si necesitas orientación sobre tu preparación para ingresar a la universidad,
            estamos listos para ayudarte de forma personalizada.
          </p>

          <a
            href="#formulario"
            className="
              inline-block px-5 py-2
              bg-blue-600 hover:bg-blue-700
              text-white rounded-xl font-medium transition
            "
          >
            Solicitar asesoría
          </a>
        </div>
      </div>

      {/* FORMULARIO DE CONTACTO */}
      <div id="formulario" className="mt-20">
        <h2 className="text-3xl font-semibold mb-6">Envíanos un mensaje</h2>

        <form
          className="
            bg-white/80 backdrop-blur-xl
            border border-gray-200 
            shadow-xl rounded-2xl
            p-8 space-y-6
          "
        >
          {/* Nombre */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              required
              className="
                w-full px-4 py-3 border border-gray-300 rounded-xl
                focus:outline-none focus:ring-2 focus:ring-blue-600
                text-gray-800
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              required
              className="
                w-full px-4 py-3 border border-gray-300 rounded-xl
                focus:outline-none focus:ring-2 focus:ring-blue-600
                text-gray-800
              "
            />
          </div>

          {/* Tipo de contacto */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Motivo del contacto
            </label>

            <select
              required
              className="
                w-full px-4 py-3 border border-gray-300 rounded-xl
                focus:outline-none focus:ring-2 focus:ring-blue-600
                text-gray-800
              "
            >
              <option value="colaboracion">Trabaje / Colabore con nosotros</option>
              <option value="asesoria">Asesoría académica</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Mensaje
            </label>
            <textarea
              required
              rows={5}
              className="
                w-full px-4 py-3 border border-gray-300 rounded-xl
                focus:outline-none focus:ring-2 focus:ring-blue-600
                text-gray-800
              "
            ></textarea>
          </div>

          {/* BOTÓN ENVIAR */}
          <button
            type="submit"
            className="
              w-full py-3 bg-blue-600 hover:bg-blue-700
              text-white rounded-xl font-medium transition
            "
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
