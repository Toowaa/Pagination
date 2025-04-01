import { GetBuses } from "@/api/Routes";
import { Pagination } from "@/components/pagination";


export default async function Home() {
  const buses = await GetBuses();
  return (
   <div >
    <Pagination Buses={buses.content} />

   </div>
  );
}
