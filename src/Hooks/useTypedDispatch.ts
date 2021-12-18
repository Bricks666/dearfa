import { useDispatch } from "react-redux";
import { TypedDispatch } from "../Types/Hooks";

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
