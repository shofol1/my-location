import Axios from "axios";

import config from "./config";

export const getApi = async (action: string) => {
  try {
    let apiUrl = `${config.serverURL}${action}`;
    const response = await Axios.get(apiUrl, {
      withCredentials: false,
    });
    return response?.data;
  } catch (error: any) {
    return error.response?.data;
  }
};
