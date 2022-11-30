import styled from "styled-components";

export const Container = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    max-width: 90%;
    margin: 0 auto;
`;

export const Loading = styled.p`
    color: #23eadf;
    font-size: 2em;
    text-align: center;
    margin-top: 30px;
`;

export const Content = styled.div`
    width: 30%;
    margin: 20px;
    box-shadow: #23eadf 0px 1px 4px, #23eadf 0px 2px 4px;
    padding-bottom: 10px;
    @media(max-width:768px) {
        width: 100%;
    }
`;

export const ContainerImage = styled.div`
    width: 100%;
`;

export const PostImage = styled.img`
    width: 100%;
`;

export const PostTitle = styled.h1`
    color: #ffffff;
    font-size: 1em;
    letter-spacing: 1px;
    padding: 15px;
    line-height: 20px;
`;

export const PostDescription = styled.p`
    color: #717171;
    font-size: 0.9em;
    letter-spacing: 0.5px;
    line-height: 20px;
    padding: 0 15px;
`;

export const PostLink = styled.a`
    color: #23eadf;
    font-size: 0.9em;
    text-align: center;
    border: 2px solid #23eadf;
    border-radius: 10px;
    padding: 8px;
    margin: 15px;
    width: 30%;
    display: block;
    @media(max-width:1439px) {
        width: 80%;
        margin: 15px auto;
    }
`;

export const ContainerButtonLoading = styled.div`
    display:flex;
    justify-content: space-between;
`;

export const ButtonLoading= styled.button`
    color: #23eadf;
    font-size: 0.9em;
    text-align: center;
    border: 2px solid #23eadf;
    border-radius: 10px;
    padding: 8px;
    margin: 15px;
    width: 10%;
    display: block;
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    background: #292929;
    @media(max-width:1439px) {
        width: 30%;
    }
    
`;
