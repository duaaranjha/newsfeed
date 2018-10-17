
export const selectCategory = (props) => {
    return {
        type: 'CHANGE_CATEGORY',
        payload : props
    }
};

export const searchNews = (props) => {
    return {
        type: 'SEARCH_NEWS',
        payload : props
    }
};

export const sortNews = (payload) => {
    return {
        type: 'SORT_NEWS',
        payload
    }
};

