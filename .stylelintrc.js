/**
 * @see https://stylelint.io/user-guide/configure
 * @type {import("stylelint").Configuration}
 */
module.exports = {
    plugins: [
        // https://github.com/stylelint-scss/stylelint-scss
        // "stylelint-scss",

        // https://github.com/hudochenkov/stylelint-order
        "stylelint-order",
    ],
    extends: [
        // https://github.com/stylelint/stylelint-config-standard
        "stylelint-config-standard",

        // [SCSS]

        // https://github.com/stylelint-scss/stylelint-config-standard-scss
        // "stylelint-config-standard-scss",

        // https://github.com/stylelint-scss/stylelint-config-recommended-scss
        "stylelint-config-recommended-scss",

        // [Order]
        // https://github.com/stormwarning/stylelint-config-recess-order
        // "stylelint-config-recess-order",
    ],
    rules: {
        "order/properties-alphabetical-order": true,
    },
};
