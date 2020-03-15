import products from './products'


export default function _createItem() {
  console.log('qwe')
  const headers = document.getElementById('headers')
  products.forEach((item) => headers.insertAdjacentHTML('afterend', `
  <tr class="table-item" data-id=${item.id}>
    <td class="item-checkbox">
      <label class="label-checkbox">
        <input type="checkbox" class="checkbox-input">
        <span class="custom-checkbox"></span>
      </label>
    </td>
    <td class="item-product">${item.product}</td>
    <td class="item-calories">${item.calories}</td>
    <td class="item-fat">${item.fat}</td>
    <td class="item-carbs">${item.carbs}</td>
    <td class="item-protein"${item.protein}</td>
    <td class="item-iron">${item.iron}</td>
  </tr>

  `))

  
  
  
}

_createItem()




