import { writable } from 'svelte/store';

export const list = writable(new Map([[123, { drugNameA: '테스트약', drugCompanyA: '도그메이트' }]]));
