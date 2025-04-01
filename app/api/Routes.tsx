import { Pageable } from "@/interface/interface";

const authHeader =
  "Basic " +
  btoa(`${process.env.NEXT_PUBLIC_USER}:${process.env.NEXT_PUBLIC_PASSWORD}`);
export const GetBuses = async (): Promise<Pageable> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/bus?page=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error al obtener el datos");
    }
    const data: Pageable = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    console.log("Error al obtener el datos");
    return {
      pageable: {
        pageNumber: 1,
        pageSize: 10,
        offset: 0,
        paged: false,
        unpaged: true,
      },
      Sort: {
        empty: false,
        sorted: false,
        unsorted: false,
      },
      content: [],
      last: false,
      totalPages: 0,
      totalElements: 0,
      size: 0,
      number: 0,
      first: false,
      numberOfElements: 0,
      empty: true,
    };
  }
};

export const GetBus = async (id: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/buses/${id}`
  );
  if (!response.ok) {
    throw new Error("Error al obtener id del bus");
  }
  const data = await response.json();
  return data;
};
