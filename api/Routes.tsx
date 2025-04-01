import { Pageable } from "@/interface/interface";

const authHeader = 'Basic ' + btoa(
    `${process.env.USER}:${process.env.PASSWORD}`
  );
export const GetBuses = async ():Promise<Pageable> => {
  const response = await fetch(`${process.env.BACKEND_API_URL}/bus`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeader,
    },
  });

  const data :Pageable= await response.json();
  
  return data;
};

export const GetBus = async (id: number) => {
  const response = await fetch(
    `${process.env.BACKEND_API_URL}/buses/${id}`
  );
  const data = await response.json();
  return data;
};
