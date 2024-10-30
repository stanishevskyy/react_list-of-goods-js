import 'bulma/css/bulma.css';
import './App.scss';

import { useState } from 'react';
import classNames from 'classnames';
import { GoodList } from './components/GoodList/GoodList';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGoods, setSelectedGoods] = useState('');
  const [reversed, setReversed] = useState(false);

  const visibleGoods = [...goodsFromServer];

  visibleGoods.sort((good1, good2) => {
    switch (selectedGoods) {
      case 'button is-info':
        return good1.localeCompare(good2);
      case 'button is-success':
        return good1.length - good2.length;
      default:
        return 0;
    }
  });

  if (reversed) {
    visibleGoods.reverse();
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={classNames('button is-info', {
            'is-light': selectedGoods !== 'button is-info',
          })}
          onClick={() => setSelectedGoods('button is-info')}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={classNames('button is-success', {
            'is-light': selectedGoods !== 'button is-success',
          })}
          onClick={() => setSelectedGoods('button is-success')}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={classNames('button is-warning', {
            'is-light': selectedGoods !== 'button is-warning',
          })}
          onClick={() => {
            setSelectedGoods('button is-warning');
            setReversed(!reversed);
          }}
        >
          Reverse
        </button>

        {selectedGoods && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              setSelectedGoods('');
              setReversed(false);
            }}
          >
            Reset
          </button>
        )}
      </div>

      <GoodList goods={visibleGoods} />
    </div>
  );
};
