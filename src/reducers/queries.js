const queries = (state = {}, {type, query, filter}) => {
    switch (type) {
        case 'MAKE_SEARCH' :
        return [
            {
                query,
                filter
            }
        ];
        default:
        return state;
    }
}

export default queries;