import { writable } from 'svelte/store';
import * as Constant from './constant/Constant';

export const myList = writable(new Map([]));

export const resultList = writable([]);
export const isLoading = writable(false);
export const currentStep = writable(Constant.STEP.MY);
