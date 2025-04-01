"use client";

import { useEffect, useState } from "react";
import { Bus, Pageable } from "@/interface/interface";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export const Pagination = ({ Buses }: { Buses: Pageable }) => {
  const [buses, setBuses] = useState<Pageable>(Buses);

  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // No hacemos la petición en la primera carga
    if (currentPage === 0) return;

    setLoading(true);

    // Esta es la ruta correcta a tu API Route en Next.js 13+
    // En tu componente Pagination, asegúrate de que la URL sea correcta
    fetch(`/api/buses?page=${currentPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        return response.json();
      })
      .then((data: Pageable) => {
        setBuses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
        setLoading(false);
      });
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > Buses.totalPages || pageNumber < 1) {
      return;
    }
    setCurrentPage(pageNumber);
    console.log(`${process.env.PASSWORD}`);
  };

  return (
    <div className="h-screen bg-pink-100/80 text-theme-raisin-black">
      <div className="flex flex-col items-center justify-center h-full">
        <table className="table-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>Número de bus</th>
              <th>Placa</th>
              <th>Fecha de Creación</th>
              <th>Características</th>
              <th>Marca de bus</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {Buses.content?.map((bus: Bus) => (
              <tr key={bus.id}>
                <td>{bus.id}</td>
                <td>{bus.nroBus}</td>
                <td>{bus.placa}</td>
                <td>{bus.fechaCreacion}</td>
                <td>{bus.caracteristicas}</td>
                <td>{bus.placa}</td>
                <td>{bus.activo.toString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={7}>
                <div className="flex justify-center items-center gap-4 p-4">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="disabled:opacity-50"
                  >
                    <ChevronLeftIcon />
                  </button>
                  <span>
                    Página {currentPage} de {Buses.totalPages}{" "}
                  </span>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="disabled:opacity-50"
                  >
                    <ChevronRightIcon />
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
