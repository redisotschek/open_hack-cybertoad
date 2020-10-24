import { Form, FORMS } from './Forms';

const NAVIGATION_ITEMS: navigationItem[] = [
  {
    id: 'nav-item-1',
    title: 'Вода',
    icon: require('../assets/images/water.png'),
    link: 'Form',
    form: FORMS.water,
  },
  {
    id: 'nav-item-2',
    title: 'Электричество',
    icon: require('../assets/images/electric.png'),
    link: 'Form',
    form: FORMS.electricity,
  },
  {
    id: 'nav-item-3',
    title: 'Тест',
    icon: require('../assets/images/test.png'),
    link: 'Test',
  },
];

export default NAVIGATION_ITEMS;

interface navigationItem {
  id: string;
  title: string;
  icon: any;
  link: string;
  form?: Form;
}
