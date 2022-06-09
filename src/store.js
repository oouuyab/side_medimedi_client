import { writable } from 'svelte/store';

export const list = writable(
  new Map([
    [
      646900550,
      {
        drugName: '어린이용타이레놀정80밀리그람 (아세트아미노펜)',
        drugCompany: '(주)한국얀센',
        drugCode: '646900550',
      },
    ],
    [
      646900690,
      {
        drugName: '타이레놀8시간이알서방정 (아세트아미노펜)',
        drugCompany: '(주)한국얀센',
        drugCode: '646900690',
      },
    ],
    [
      646900565,
      {
        drugName: '어린이타이레놀현탁액',
        drugCompany: '(주)한국얀센',
        drugCode: '646900565',
      },
    ],
    [
      646900700,
      {
        drugName: '타이레놀8시간이알서방정325밀리그람 (아세트아미노펜)',
        drugCompany: '(주)한국얀센',
        drugCode: '646900700',
      },
    ],
    [
      646900710,
      {
        drugName: '타이레놀정160밀리그람 (아세트아미노펜)',
        drugCompany: '(주)한국얀센',
        drugCode: '646900710',
      },
    ],
  ])
);

export const resultList = writable([]);

export const isLoading = writable(false);
export const isSearch = writable(false);
