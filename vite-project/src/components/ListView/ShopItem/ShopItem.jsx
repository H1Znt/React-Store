import './shopItem.css';

export const ShopItem = ({ item }) => {
  const { name, price, color, img } = item;
  return (
    <li className={'shopItem'}>
      <img src={img} alt={name} className={'shopItem__img'} />
      <h2 className={'shopItem__title'}>{name}</h2>
      <h3 className={'shopItem_subtitle'}>{color}</h3>
      <span className={'shopItem_price'}>${price}</span>
      <div className={'btn'}>
        <span className={'btnText'}>add to cart</span>
      </div>
    </li>
  );
}