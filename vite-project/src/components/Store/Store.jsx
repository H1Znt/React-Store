import { useState } from 'react';
import { IconSwitch } from '../IconSwitch/IconSwitch';
import { ListView } from '../ListView/ListView';
import { CardsView } from '../CardsView/CardsView';

import './store.css'

export const Store = ({products}) => {
  const [viewState, setViewState] = useState(true);

  const switchView = () => {
    setViewState(!viewState);
  };

  const productsID = products.map((product) => ({
    data: product,
    id: Math.floor(Math.random() * 100),
  }));

  return (
    <div>
      <IconSwitch
        icon={viewState ? 'view_module' : 'view_list'}
        onSwitch={switchView}
      />
      {viewState ? (
        <CardsView cards={productsID} />
      ) : (
        <ListView items={productsID} />
      )}
    </div>
  );
}