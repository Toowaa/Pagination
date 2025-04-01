import { GetBuses } from "@/app/api/Routes";
import { Pagination } from "@/components/pagination";
import { Pageable } from "@/interface/interface";

export default async function Home() {
  const buses = await GetBuses();

  return (
    <div>
      if(!buses <div>Loading...</div>:
      <Pagination initialBuses={buses as Pageable} />)
    </div>
  );
}
