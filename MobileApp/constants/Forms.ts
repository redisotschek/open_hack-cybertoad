export const FORMS: {[key: string]: Form} = {
  water: {
    id: 'waterForm',
    labelFirst: 'Холодная вода',
    labelSecond: 'Горячая вода',
  },
  electricity: {
    id: 'electricityForm',
    labelFirst: 'Электричество день',
    labelSecond: 'Электричество ночь',
  },
};

export interface Form {
  id: string;
  labelFirst: string;
  labelSecond: string;
}

export interface MeterValue {
  value: string;
  serialNumber?: string;
}
