import axios from "axios";
import { loadAbort } from "../utilities/loadAbort";

export const apiGet = () => {
  const controller = loadAbort();
    return axios.get('http://localhost:3000/users', {controller: controller.signal})
  };

  export const apiPost = () => {
    const controller = loadAbort();
      return axios.post('http://localhost:3000/users', {controller: controller.signal})
    };