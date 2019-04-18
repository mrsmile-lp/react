export const makeSearch = (query, filter, endPoint, content) => ({
    type: 'MAKE_SEARCH',
    query,
    filter,
    endPoint,
    content
});