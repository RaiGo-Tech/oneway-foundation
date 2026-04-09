import axios from "axios";

export const createOrder = async (amount) => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/donation/create-order`,
    { amount }
  );
  return res.data;
};
