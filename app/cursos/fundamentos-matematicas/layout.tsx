"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export default function CursoLayout({ children }: LayoutProps) {
  const pathname = usePathname();

  const links = [
    { num: "1", title: "Números y operaciones básicas", href: "/cursos/fundamentos-matematicas/leccion-1" },
    { num: "2", title: "Álgebra esencial", href: "/cursos/fundamentos-matematicas/leccion-2" },
    { num: "3", title: "Funciones y gráficas", href: "/cursos/fundamentos-matematicas/leccion-3" },
    { num: "4", title: "Geometría básica", href: "/cursos/fundamentos-matematicas/leccion-4" }
  ];

  // ---------------------------------------
  // 📌 DETECTAR LECCIÓN ACTUAL Y PROGRESO
  // ---------------------------------------
  const totalLessons = links.length;
  const currentIndex = links.findIndex(link => link.href === pathname);

  const progress = currentIndex >= 0 
    ? ((currentIndex + 1) / totalLessons) * 100
    : 0;

  // ---------------------------------------
  // 📌 CALCULAR SIGUIENTE LECCIÓN
  // ---------------------------------------
  const nextLesson =
    currentIndex >= 0 && currentIndex + 1 < totalLessons
      ? links[currentIndex + 1]
      : null;

  return (
    <div className="pt-32 flex gap-10">

      {/* SIDEBAR */}
      <aside className="
        w-64 
        bg-white/10 
        backdrop-blur-lg 
        border border-white/10 
        rounded-2xl 
        p-6 
        h-max 
        sticky top-32
      ">
        <h2 className="text-xl font-semibold mb-4">Lecciones</h2>

        {/* LISTA DE LECCIONES */}
        <nav className="space-y-2">
          {links.map(link => {
            const isActive = pathname === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`
                  block px-4 py-2 rounded-lg transition-all mb-1
                  ${isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-200 hover:bg-white/20 hover:text-white"}
                `}
              >
                {link.num}. {link.title}
              </a>
            );
          })}
        </nav>

        {/* PROGRESO DEL CURSO */}
        <div className="mt-8">
          <p className="text-sm text-gray-300 mb-2">
            Progreso del curso: <span className="text-white font-semibold">{Math.round(progress)}%</span>
          </p>

          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all duration-500" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </aside>

      {/* CONTENIDO + BOTÓN SIGUIENTE */}
      <main className="flex-1">

        {children}

        {/* BOTÓN SIGUIENTE LECCIÓN */}
        <div className="mt-16 flex justify-end">
          {nextLesson ? (
            <Link
              href={nextLesson.href}
              className="
                px-6 py-3 
                bg-blue-600 
                hover:bg-blue-700 
                text-white 
                rounded-xl 
                font-medium 
                transition-all duration-200
              "
            >
              Siguiente lección →  
            </Link>
          ) : (
            <div className="px-6 py-3 bg-green-600 text-white rounded-xl font-medium">
              ✔ Curso completado
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
