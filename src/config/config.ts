export interface Config {
  toolbarButtons: Option[];
}

export type Option = {
  title: string,
  command: string
};
