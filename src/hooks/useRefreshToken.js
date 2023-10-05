import { useEffect } from "react";
import Api from "../api/Api";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      
      const response = await Api.get(`/api/refresh`, {
        headers: {
            withCredentials: true,
        },
      });

      setAuth((prev) => {
        console.log(JSON.stringify(prev));
        console.log(response.data.accessToken);
        return { ...prev, accessToken: response.data.accessToken };
      });
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  useEffect(() => {
    refresh();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return refresh; // Return the refresh function
};

export default useRefreshToken;
