export default function DonacionesPage() {
  return (
    <div className="pt-32 max-w-3xl mx-auto px-6">

      {/* TÍTULO PRINCIPAL */}
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Apoya el proyecto <span className="text-blue-600">EduEc</span>
      </h1>

      {/* DESCRIPCIÓN */}
      <p className="text-lg text-gray-600 leading-relaxed mb-10">
        EduEc es un proyecto independiente que busca ofrecer educación accesible,
        moderna y enfocada en estudiantes ecuatorianos.  
        Cada contribución nos permite mantener servidores, mejorar simuladores
        y crear más cursos.  
        <br /><br />
        🙌 ¡Gracias por apoyar el crecimiento de esta plataforma!
      </p>

      {/* GRID DE MÉTODOS DE DONACIÓN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* PAYPHONE */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Payphone</h2>
          <p className="text-gray-600 text-sm mb-4">
            Escanea este código para donar desde Payphone.
          </p>

          {/* QR PAYPHONE */}
          <img src="/qr/Eduec-qr-code.png"
            alt="QR Payphone"
            className="w-full rounded-xl shadow-md"
          />

          {/* BOTÓN PAGO TARJETA */}
          <a
            href="https://pay.payphonetodoesposible.com/api/button/checkout" 
            target="_blank"
            className="
              mt-4 block w-full text-center 
              bg-blue-600 text-white py-2 rounded-xl 
              hover:bg-blue-700 transition
            "
          >
            Donar con Tarjeta 💳
          </a>
        </div>

        {/* PAYPAL */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">PayPal</h2>
          <p className="text-gray-600 text-sm mb-4">
            Puedes donar desde PayPal escaneando este código.
          </p>

          {/* QR PAYPAL */}
          <img src="/qr/IMG_3261.PNG"
            alt="QR PayPal"
            className="w-full rounded-xl shadow-md"
          />

          <a
            href="https://paypal.me/educaec"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-4 block w-full text-center 
              bg-blue-600 text-white py-2 rounded-xl 
              hover:bg-blue-700 transition
            "
          >
            Donar con PayPal ⭐
          </a>
        </div>
      </div>

      {/* TRANSFERENCIAS */}
      <div className="bg-white p-6 mt-12 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">
          Transferencia Bancaria
        </h2>

        <p className="text-gray-700 leading-relaxed text-sm">
          Banco: Banco de Pichincha <br />
          Titular: Pablo Agila Hidalgo <br />
          Cuenta: 2204139679 <br />
          Tipo: Ahorros <br />
          CI: 1105794687 <br />
        </p>
      </div>
    </div>
  );
}
