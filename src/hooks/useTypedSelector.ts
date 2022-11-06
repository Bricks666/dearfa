import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { Store } from '@/models';

export const useTypedSelector: TypedUseSelectorHook<Store> = useSelector;
