import { AppDispatch } from "@/models";
import { useDispatch } from "react-redux";

export const useTypedDispatch = () => useDispatch<AppDispatch>();
