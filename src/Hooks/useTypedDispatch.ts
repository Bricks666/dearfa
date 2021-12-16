import { useDispatch } from "react-redux";
import { TypedDispatch } from "../Types/Redux";

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
