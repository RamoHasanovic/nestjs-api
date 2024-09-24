/* eslint-disable prettier/prettier */
export interface Item {
  id?: string; //id se stavlja kao optional jer ce sa pravom bazom biti ukljucen automatski od baze
  name: string;
  qty: number;
}
