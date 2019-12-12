// @ts-check

/**
 *	Just number. Use it if you want!
 *	@type {number}
 */
const number = 25;

/**
 *	My first documented array and description for it!
 *	@type {Array<number>}
 */
const arr = [number, number + 1];

/**
 *	@type {boolean}
 */
const bool = true;

/**
 *	Todo object.
 *	@type {{id: number, text: string}}
 */
const todo = {
	id: 1,
	text: 'Wake up'
};

/**
 *	Calculate tax. Returns taxing value with currency symbol.
 *	@param {number} amount - Total amount
 *	@param {number} tax - Tax percentage
 *	@param {string} currency - Symbol of currency
 *	@returns {string} - Total with currency symbol
 */
function calculateTax(currency, amount, tax) {
	return currency + (amount + amount * tax);
}

console.log(calculateTax('', 100, .25));