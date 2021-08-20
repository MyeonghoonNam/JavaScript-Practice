export default function Cart({ target, initialState, onRemove }) {
  const cart = document.createElement('div');

  target.appendChild(cart);

  /* 
  state의 형태
  {
    productName: 상품명,
    basePrice: 상품 기본 가격,
    selectedOption: [Option]
  }
*/

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const calculateTotalPrice = () => {
    const { basePrice, selectedOptions } = this.state;

    return selectedOptions.reduce(
      (acc, option) => acc + (basePrice + option.optionPrice) * option.ea,
      0
    );
  };

  const renderOption = (option, index) => {
    const { productName, basePrice } = this.state;

    return `
    <li data-index="${index}" class="cartItem">
      ${productName} - ${option.optionName} | 
      ${basePrice + option.optionPrice},
      ${option.ea}개 
      <button class="remove">x</button>
    </li>`;
  };

  this.render = () => {
    const { selectedOptions } = this.state;
    cart.innerHTML = `
      <ul>
        ${
          Array.isArray(selectedOptions) &&
          selectedOptions
            .map((option, index) => renderOption(option, index))
            .join('')
        }
      </ul>
      <div>
        ${calculateTotalPrice()}원
      </div>
    `;

    cart.querySelector('ul').addEventListener('click', (e) => {
      const li = e.target.closest('.cartItem'); // 타깃으로 부터 가장 가까운 부모 요소 찾기.

      if (li) {
        const { index } = li.dataset;

        onRemove(parseInt(index));
      }
    });
  };

  this.render();
}
