import { writable } from 'svelte/store';

export const list = writable(new Map());

export const isLoading = writable(false);
