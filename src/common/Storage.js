export class LocalStorage {
  static setDrugList = (list) => {
    localStorage.setItem('drugList', list);
  }

  static setDurResult = (result) => {
    localStorage.setItem('durResult', result);
  }

  static getDrugList = () => {
    return localStorage.getItem(drugList);
  }

  static getDurResult = () => {
    return localStorage.getItem(durResult);
  }
}