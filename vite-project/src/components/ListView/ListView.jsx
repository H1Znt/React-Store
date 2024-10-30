import './listView.css';
import { ShopItem } from './ShopItem/ShopItem.jsx';

export const ListView = ({ items }) => {
  return (
    <ul className={'listView'}>
      {items.map((item) => (
        <ShopItem key={item.id} item={item.data} />
      ))}
    </ul>
  );
}