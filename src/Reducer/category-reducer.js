
const initState = {
    categories: [
        {
            icon: 'sports',
            name : 'Sports',
            value : 'Sports'
        },
        {
            icon: 'ent',
            name : 'Entertainment',
            value : 'Entertainment'
        },
        {
            icon: 'political',
            name : 'Political Affairs',
            value : 'Political Affairs'
        },
        {
            icon: 'art',
            name : 'Art',
            value : 'Art'
        },
        {
            icon: 'foreign',
            name : 'Foreign Affairs',
            value : 'Foreign Affairs'
        },
        {
            icon: 'crime',
            name : 'Crime',
            value : 'Crime'
        },
        {
            icon: 'all',
            name : 'All News',
            value : null
        }
    ],

    activeCategory: null,
    news: [
        {
            heading: 'dad News1',
            detail: 'adaufb fiwf giadb iagiwd agidadb auida iaugdoiab diagdiab',
            count: '13',
            categories: ['Sports', 'Art', 'Entertainment']
        },
        {
            heading: 'Aasa News2',
            detail: 'adaufb fiwf giadb iagiwd agidadb auida iaugdoiab diagdiab',
            count: '12',
            categories: ['Entertainment', 'Foreign Affairs']
        },
        {
            heading: 'Zasz News3',
            detail: 'adaufb fiwf giadb iagiwd agidadb auida iaugdoiab diagdiab',
            count: '15',
            categories: ['Political Affairs', 'Sports', 'Foreign Affairs']
        },
        {
            heading: 'Ccda News3',
            detail: 'adaufb fiwf giadb iagiwd agidadb auida iaugdoiab diagdiab',
            count: '15',
            categories: ['Political Affairs', 'Crime', 'Sports']
        },
        {
            heading: 'Kkk News4',
            detail: 'adaufb fiwf giadb iagiwd agidadb auida iaugdoiab diagdiab',
            count: '17',
            categories: ['Sports', 'Foreign Affairs']
        }
    ],
    activeNews: [],
};


export default function (oldState = initState, action) {
    let newState = {...oldState};
    switch (action.type) {
        case 'CHANGE_CATEGORY':
            updateCategory(newState, action.payload);
            break;

        case 'SEARCH_NEWS':
            searchNews(newState, action.payload);
            break;

        case 'SORT_NEWS':
            sortNews(newState, action.payload);
            break;

        default : {
            console.log('newState', newState, 'action', action);
        }
    }
    return newState;
}


const updateCategory = (state, category) => {
    state.activeCategory = category;
    if (category) {
        state.activeNews = state.news.filter(news => news.categories.indexOf(category) > -1);
    }
    else {
        state.activeNews = state.news;
    }
};

const searchNews = (state, searchStr) => {
    let existingNews  = [...state.activeNews];
    state.activeNews = existingNews.filter((news) => {
        return  news.heading.toLowerCase().search(searchStr) !== -1;
    });
};

const sortNews = (state, sortNews) => {
    let news = [...state.activeNews];
    if (sortNews === 'ASC') {
        news.sort((a, b) => {
            return (a.heading.localeCompare(b.heading))
        });
    } else if (sortNews === 'DSC') {
        news.sort((a, b) => {
            return (b.heading.localeCompare(a.heading))
        });
    }
    
    state.activeNews = news;
};



