// Get necessary elements

const shoppingListWrapper = document.querySelector('.shoppingListWrapper'); // Selects the main wrapper element for the shopping list.
const itemListUl = shoppingListWrapper.querySelector('.jsItemList'); // Selects the unordered list element where the items will be displayed.
const itemInput = shoppingListWrapper.querySelector('#item-add'); // Selects the input element where new items are entered.
const listErrorText = shoppingListWrapper.querySelector('.jsListStatus') // Selects the element where error messages related to the list will be displayed.

/**
 * Checks if the input element has a non-empty value.
 * @param {HTMLInputElement} itemInput - The input element to validate.
 * @returns {boolean} - Returns true if input has a value, false otherwise.
 */

function checkInputValue(itemInput) {
    if (!itemInput.value) { 
        listErrorText.textContent = "Please add an item!";
        return false;
    } else {
        listErrorText.textContent = "";
        return true;
    }
}


/**
 * Retrieves the value of the input field.
 * @returns {String} - The value of the input field.
 */

function getValue() {
    return itemInput.value;
}

/**
 * Creates a list item (li) with the given text and a delete button.
 * @param {String} text - Text to be included in the list item.
 * @returns {HTMLElement} - The created list item (li element).
 */

function createListItem(text) {

    // Create li element and assign it's value to params 
    const listItem = document.createElement('li');
    listItem.textContent = text; 

    // Create button element and append it to li
    const deleteButton = document.createElement('button');

    //Use attributes instead of classes to be more specyfic
    deleteButton.textContent = 'Delete';
    deleteButton.dataset.deleteItem = 'true'; 

    listItem.appendChild(deleteButton);
    return listItem;
}

/**
 * Adds a new item to the list. It validates the input before adding the item.
 */

function addItem() {
    // Check if element has value
   if (checkInputValue(itemInput)) { 
       const itemValue = getValue();
       const listAdd = createListItem(itemValue);
       itemListUl.appendChild(listAdd);
       itemInput.value = ''; // Clear input after adding an item
   } 
}

/**
* Deletes an item from the list. It is triggered by the delete button in each list item.
* @param {Event} e - The event object.
*/
function deleteElement (e) {
   const listDelete = e.target.closest("li")
   listDelete.remove()
}