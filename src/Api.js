let id = 1;
const url = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';

const requisition = {
    getLastPosts: async ()=> {
        const res = await fetch(url);
        const json = await res.json();
        return json
    },
    getPagination: async ()=> { 
        id++;
        const response = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${id}`)
        if(id <= 16) {
            const json = await response.json();
                    return json;
        }          
    },
    prevPagination: async ()=> { 
        id--;
        const response = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${id}`)
        if(id > 0) {
            const json = await response.json();
                    return json;
        }          
    }
};

export default requisition;