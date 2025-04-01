export const dynamic = 'force-dynamic';
import { GetBuses } from "@/api/Routes";
import { Pagination } from "@/components/pagination";
import { Pageable } from "@/interface/interface";


export default async function Home() {
  const buses = await GetBuses();
  return (
   <div >
    <Pagination initialBuses={buses as Pageable } />

   </div>
  );
}
