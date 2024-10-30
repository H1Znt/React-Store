import './cardsView.css';
import { ShopCard } from './ShopCard/ShopCard.jsx';

export const CardsView = ({ cards }) => {
  return (
    <ul style={{padding: 0}} className={'cardsView'}>
      {cards.map((card) => (
        <ShopCard key={card.id} card={card.data} />
      ))}
    </ul>
  );
}