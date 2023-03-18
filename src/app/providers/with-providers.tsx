import compose from 'compose-function';
import { WithRouter } from './with-router';
import { WithStrictMode } from './with-strict-mode';
import { WithStyles } from './with-styles';

export const WithProviders = compose(WithRouter, WithStyles, WithStrictMode);
