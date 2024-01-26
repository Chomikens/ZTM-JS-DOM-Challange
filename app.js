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

