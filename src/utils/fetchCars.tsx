import { CarType } from "../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "fc7ad7f54emsh1fe9f36c8af42e6p10c4e3jsn6f81a600f0a5",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

type Params = {
  limit: number;
  make?: string;
  model?: string;
  fuel_type?: string;
  year?: string;
};

// asenkron oldugu icin tip taniminda basina Promise alir ve generic icinde tip tanimlanir
const fetchCars = async ({
  limit,
  make = "bmw",
  model = "m4",
  fuel_type = "",
  year ="",
}: Params): Promise<CarType[]> => {
  
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?
  make=${make}&model=${model}&limit=${limit}&fuel_type=${fuel_type}&year=${year}`;

  const res = await fetch(url, options);
  const data = await res.json();
  // console.log(data);

  return data;
};

export default fetchCars;
