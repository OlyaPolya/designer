export interface State {
  img: string;
  link: string;
  title: string;
  subtitle: string;
  width: number;
  height: number;
}

export interface Item extends State {
  rows: number;
  cols: number;
}

export type ItemProp = {
  itemID: number;
};
