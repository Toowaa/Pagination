import { GetBuses } from "@/api/Routes";
import { Pagination } from "@/components/pagination";
import { Pageable } from "@/interface/interface";


export default async function Home() {
  const buses = await GetBuses();
  return (
   <div >
    <Pagination Buses={buses as Pageable } />

   </div>
  );
}
