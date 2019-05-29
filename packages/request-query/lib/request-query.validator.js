"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("./exceptions");
const util_1 = require("./util");
exports.comparisonOperatorsList = [
    'eq',
    'ne',
    'gt',
    'lt',
    'gte',
    'lte',
    'starts',
    'ends',
    'cont',
    'excl',
    'in',
    'notin',
    'isnull',
    'notnull',
    'between',
];
exports.sortOrdersList = ['ASC', 'DESC'];
const comparisonOperatorsListStr = exports.comparisonOperatorsList.join();
const sortOrdersListStr = exports.sortOrdersList.join();
function validateFields(fields) {
    if (!util_1.isArrayStrings(fields)) {
        throw new exceptions_1.RequestQueryException('Invalid fields. Array of strings expected');
    }
}
exports.validateFields = validateFields;
function validateCondition(val, cond) {
    if (!util_1.isObject(val) || !util_1.isStringFull(val.field)) {
        throw new exceptions_1.RequestQueryException(`Invalid ${cond} field. String expected`);
    }
    validateComparisonOperator(val.operator);
}
exports.validateCondition = validateCondition;
function validateComparisonOperator(operator) {
    if (!exports.comparisonOperatorsList.includes(operator)) {
        throw new exceptions_1.RequestQueryException(`Invalid comparison operator. ${comparisonOperatorsListStr} expected`);
    }
}
exports.validateComparisonOperator = validateComparisonOperator;
function validateJoin(join) {
    if (!util_1.isObject(join) || !util_1.isStringFull(join.field)) {
        throw new exceptions_1.RequestQueryException('Invalid join field. String expected');
    }
    if (!util_1.isUndefined(join.select) && !util_1.isArrayStrings(join.select)) {
        throw new exceptions_1.RequestQueryException('Invalid join select. Array of strings expected');
    }
}
exports.validateJoin = validateJoin;
function validateSort(sort) {
    if (!util_1.isObject(sort) || !util_1.isStringFull(sort.field)) {
        throw new exceptions_1.RequestQueryException('Invalid sort field. String expected');
    }
    if (!util_1.isEqual(sort.order, exports.sortOrdersList[0]) &&
        !util_1.isEqual(sort.order, exports.sortOrdersList[1])) {
        throw new exceptions_1.RequestQueryException(`Invalid sort order. ${sortOrdersListStr} expected`);
    }
}
exports.validateSort = validateSort;
function validateNumeric(val, num) {
    if (!util_1.isNumber(val)) {
        throw new exceptions_1.RequestQueryException(`Invalid ${num}. Number expected`);
    }
}
exports.validateNumeric = validateNumeric;
//# sourceMappingURL=request-query.validator.js.map