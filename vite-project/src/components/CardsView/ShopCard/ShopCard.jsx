import './shopCard.css';

export const ShopCard = ({ card }) => {
  const { name, price, color, img } = card;
  return (
    <li
      className={'shopCard'}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={'shopCardContent'}>
        <div className={'shopCardContent__header'}>
          <h2 className={'shopCardContent__title'}>{name}</h2>
          <h3 className={'shopCardContent_subtitle'}>{color}</h3>
        </div>
        <div className={'shopCardContent__footer'}>
          <span>${price}</span>
          <div className={'btn'}>
            <span className={'btnText'}>add to cart</span>
          </div>
        </div>
      </div>
    </li>
  );
}