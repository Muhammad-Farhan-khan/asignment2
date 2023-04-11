function createNewList(product) {
    const list = document.createElement('li');
    list.textContent = product;
    const ul = document.querySelector('ul');
    ul.appendChild(list);
  }
  createNewList('Cosmatic Item');
  createNewList('Cloth Item');
  createNewList('workshop Item');
  