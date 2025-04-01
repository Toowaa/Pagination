import { Bus } from "@/interface/interface";

export const Pagination = ({Buses}:{Buses:Bus[]}) => {
  return (
    <div className="h-screen bg-pink-100/80 text-theme-raisin-black">
        <div className="flex flex-col items-center justify-center h-full">
           <table className="table-auto">
            <thead>
                <tr >
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
             
                {Buses?.map((bus:Bus)=>(
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
           </table>

        </div>
    </div>
  );
};