export const CHANGE_QUERY = 'CHANGE_QUERY';
export const CLEAR_QUERY = 'CLEAR_QUERY';
export const APPLY_QUERY = 'APPLY_QUERY';

export const changeQuery = query => ({
    type: CHANGE_QUERY,
    query
})