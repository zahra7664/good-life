import items from '../data/items';
import categories from '../data/categories';

function getItems(){
  return items;
}

function getItem(id) {
  return items.filter(item => item.id == id)[0];
}

function getCategories() {
  return categories;
}

function getCategoryItems(id) {
  return items.filter(item => item.categoryID == id);
}

export default {
  getItems,
  getItem,
  getCategories,
  getCategoryItems,
};
