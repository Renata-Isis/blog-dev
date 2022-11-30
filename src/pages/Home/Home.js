
//Importando a requisição
import requisition from "../../Api";

//Importando os Hooks
import React, { useState, useEffect } from 'react';

//Import Link 
import {Link} from 'react-router-dom';

//Import styled components
import * as C from "./styles";

const Home = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [numPag, setNumPage] = useState(1);

    const req = async () => {
        setLoading(true);
        const res = await requisition.getLastPosts();
        setLoading(false);
        setPost(res);
    }

    useEffect(() => {
        req();
    }, []);

    const nextPage = async () => {
        setLoading(true);
        const res = await requisition.getPagination();
        setLoading(false);
        setPost(res);
        setNumPage(numPag + 1)
    }

    const prevPage = async () => {
        setLoading(true);
        const res = await requisition.prevPagination();
        setLoading(false);
        setPost(res);
        setNumPage(numPag - 1)
    }

    return (
        <>
            {loading &&
                <C.Loading>
                    Carregando...
                </C.Loading>
            }

            {!loading && post.length > 0 &&
                <>
                    <C.Container>
                        {post.map((item) => (
                            <React.Fragment key={item.id}>
                                <C.Content>
                                    {item._embedded['wp:featuredmedia']?.map((element) => (
                                        <React.Fragment key={element.id}>
                                            <C.ContainerImage>
                                                <C.PostImage src={element.media_details.sizes.full.source_url} alt={element.alt_text} />
                                            </C.ContainerImage>
                                        </React.Fragment>
                                    ))}
                                    <C.PostTitle>
                                        {item.title.rendered}
                                    </C.PostTitle>
                                    <C.PostDescription>
                                        {item.yoast_head_json.description}
                                    </C.PostDescription>
                                        <Link to={`slug=/${item.slug}`} 
                                        style={{color:'#23eadf', border: '2px solid #23eadf', padding: '10px', 
                                        display: 'block', width: '70%', borderRadius: '10px', margin: '15px auto', textAlign: 'center'}}>
                                            Link Postagem
                                        </Link>
                                </C.Content>
                            </React.Fragment>
                        ))}
                    </C.Container>
                    <C.ContainerButtonLoading>
                        <C.ButtonLoading onClick={prevPage} disabled={numPag <= 1}> Prev Page</C.ButtonLoading>
                        <C.ButtonLoading onClick={nextPage} disabled={numPag >= 16}>Next page</C.ButtonLoading>
                    </C.ContainerButtonLoading>
                </>
            }
        </>
    )
};


export default Home;