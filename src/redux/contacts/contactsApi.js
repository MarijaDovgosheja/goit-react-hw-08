import axios from "axios";

export const contactsInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});
