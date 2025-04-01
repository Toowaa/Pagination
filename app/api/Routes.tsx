import { Pageable } from "@/interface/interface";

const authHeader =
  "Basic " +
  btoa(`${process.env.NEXT_PUBLIC_USER}:${process.env.NEXT_PUBLIC_PASSWORD}`);
export const GetBuses = async (): Promise<Pageable> => {


  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/bus`,
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

  return data;
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
