import { useEffect } from "react";
import { api } from "../api/Api";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const response = await api.get(`/api/refresh`, {
        headers: {
          withCredentials: true,
        },
      });
      console.log("Response Object:", response);
      setAuth((prev) => {
        console.log(JSON.stringify(prev));
        console.log(response.data.roles);
        console.log(response.data.accessToken);
        return {
          ...prev,
          roles: response.data.roles,
          accessToken: response.data.accessToken,
          userID: response.data.userID,
          shopID: response.data.shopID,
        };
      });
    } catch (error) {
      // Handle errors here
      console.error(error);
      throw error;
    }
  };

  return refresh;
};

export default useRefreshToken;
