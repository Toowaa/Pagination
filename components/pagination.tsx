"use client";

import { useEffect, useState } from "react";
import { Bus, Pageable } from "@/interface/interface";
import { ChevronLeftIcon, ChevronRightIcon, Eye, X } from "lucide-react";

export const Pagination = ({ initialBuses }: { initialBuses: Pageable }) => {
  const [buses, setBuses] = useState<Pageable>(initialBuses);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (currentPage === 1 && initialBuses.content) {
      return;
    }

    setLoading(true);
    const authHeader = "Basic " + btoa(
      `${process.env.NEXT_PUBLIC_USER}:${process.env.NEXT_PUBLIC_PASSWORD}`
    );

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/bus?page=${currentPage}`, {
      headers: { Authorization: authHeader },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error en la respuesta del servidor");
        return response.json();
      })
      .then((data: Pageable) => {
        setBuses(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [currentPage, initialBuses.content]);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > initialBuses.totalPages-1 || pageNumber < 1) return;
    setCurrentPage(pageNumber);
  };

  const openDialog = (bus: Bus) => {
    setSelectedBus(bus);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedBus(null);
  };

  return (
    <>
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
                <th>Ver</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {(currentPage === 1 && initialBuses.content 
                ? initialBuses.content 
                : buses.content)?.map((bus: Bus) => (
                <tr key={bus.id}>
                  <td>{bus.id}</td>
                  <td>{bus.nroBus}</td>
                  <td>{bus.placa}</td>
                  <td>{bus.fechaCreacion}</td>
                  <td>{bus.caracteristicas}</td>
                  <td>{bus.placa}</td>
                  <td>{bus.activo.toString()}</td>
                  <td>
                    <button 
                      onClick={() => openDialog(bus)}
                      className="p-1 hover:bg-pink-200 rounded"
                    >
                      <Eye className="text-theme-tickle-me-pink hover:text-pink-800/50" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={8}>
                  <div className="flex justify-center items-center gap-4 p-4">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1 || loading}
                      className="disabled:opacity-50"
                    >
                      <ChevronLeftIcon />
                    </button>
                    <span>
                      Página {currentPage} de {initialBuses.totalPages-1}
                    </span>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === initialBuses.totalPages || loading}
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

      {/* Dialog */}
      {isDialogOpen && selectedBus && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
          <div className="bg-theme-seashell p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="text-theme-tickle-me-pink">Detalles del Bus</span>
              </h2>
              <button 
                onClick={closeDialog}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-3 text-theme-raisin-black">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">ID:</p>
                  <p>{selectedBus.id}</p>
                </div>
                <div>
                  <p className="font-semibold">Número de Bus:</p>
                  <p>{selectedBus.nroBus}</p>
                </div>
                <div>
                  <p className="font-semibold">Placa:</p>
                  <p>{selectedBus.placa}</p>
                </div>
                <div>
                  <p className="font-semibold">Fecha Creación:</p>
                  <p>{selectedBus.fechaCreacion}</p>
                </div>
              </div>
              
              <div>
                <p className="font-semibold">Características:</p>
                <p>{selectedBus.caracteristicas}</p>
              </div>
              
              <div>
                <p className="font-semibold">Estado:</p>
                <p className={`inline-block px-2 py-1 rounded ${
                  selectedBus.activo 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {selectedBus.activo ? "Activo" : "Inactivo"}
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeDialog}
                className="px-4 py-2 bg-theme-tickle-me-pink text-white rounded hover:bg-pink-600 transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};