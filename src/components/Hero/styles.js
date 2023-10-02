import styled from "styled-components";
import heroBackground from "../../assets/img/hero-background.jpg"

export const Container = styled.div`
    margin-top: 130px;

    .main-titles {
        display: flex;
        flex-direction: column;
        gap: 25px;
       
        h1 {
            font-size: 65pt;
            font-family: 'LaLuxesScript', sans-serif;
        }

        h3 {
            text-transform: uppercase;
            font-size: 15pt;
            font-weight: 900;
            color: #000;
        }

        h2 {
            font-size: 35pt;
            max-width: 700px;
        }

    }

`

export const MainPicture = styled.div`
    width: 30%;
    position: relative;
    z-index: 1;

    .back {
        background-color: #84b59f;
        width: 100vw;
        height: 110%;
        position: absolute;
        left: -250%;
        z-index: -1;
        bottom: 0;
    }

    img {
        width: 100%;
    }
`

export const PictureWrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 15%;
    margin: 0 100px;
    z-index: 2;

`

export const HeroBackground = styled.div`
    width: 100%;
    height: 97%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: url(${heroBackground});
    background-position: center;
    background-size: cover;
    opacity: 0.4;
    z-index: -1;
`