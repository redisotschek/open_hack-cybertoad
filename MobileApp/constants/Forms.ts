export const FORMS: {[key: string]: Form} = {
  water: {
    labelFirst: 'Холодная вода',
    labelSecond: 'Горячая вода',
  },
  electricity: {
    labelFirst: 'Электричество день',
    labelSecond: 'Электричество ночь',
  },
};

export interface Form {
  labelFirst: string;
  labelSecond: string;
}
