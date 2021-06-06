/**
 * @see https://stylelint.io/user-guide/configure
 * @type {import("stylelint").Configuration}
 */
module.exports = {
    // plugins: [
    //     // https://github.com/hudochenkov/stylelint-order
    //     "stylelint-order",
    //     // https://github.com/kristerkari/stylelint-scss
    //     "stylelint-scss",
    // ],
    extends: [
        // https://github.com/stylelint/stylelint-config-standard
        "stylelint-config-standard",
        // https://github.com/bjankord/stylelint-config-sass-guidelines
        "stylelint-config-sass-guidelines",
        // https://github.com/prettier/stylelint-config-prettier
        "stylelint-config-prettier",
    ],
    rules: {},
};
