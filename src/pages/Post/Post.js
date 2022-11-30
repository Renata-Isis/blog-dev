import React from 'react';

//Importando a states
import { useState, useEffect } from 'react';

//Importando params
import { useParams } from 'react-router-dom';

//Import styled components
import * as C from "./styles";

const Post = () => {
    const [postUnique, setPostUnique] = useState([]);
    const [loading, setLoading] = useState(false);

    const { slug } = useParams();

    const url = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=/:${slug}`;

    useEffect(() => {
        req();
    }, []);

    const req = async () => {
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setLoading(false);
        setPostUnique(json);
    }

  return (
    <>
    {loading && <C.Loading>Carregando...</C.Loading>}
        {postUnique.map((item) => (
            <React.Fragment key={item.id}>
                <C.Title>{item.title.rendered}</C.Title>
                {item._embedded.author?.map((element) => (
                    <React.Fragment key={element.id}>
                    <C.AuthorName>Escrito por: {element.name}</C.AuthorName>
                </React.Fragment>
            ))}
                <C.ContentPage>{item.yoast_head_json.description}</C.ContentPage>
                {item._embedded['wp:featuredmedia']?.map((element) => (
                    <React.Fragment key={element.id}>
                    <C.ContainerImage>
                        <C.PostImage src={element.media_details.sizes.full.source_url} alt={element.alt_text} />
                    </C.ContainerImage>
                </React.Fragment>
            ))}
            <C.LinkPost href={item.yoast_head_json.og_url} target="_blank">Link para o blog Apiki</C.LinkPost>
            </React.Fragment>
      ))}
    </>
  )
};

export default Post;