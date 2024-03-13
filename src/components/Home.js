import styled from "styled-components";
import ImgSlider from "./ImgSlider";

import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import db from "../firebase";
import { collection, onSnapshot } from 'firebase/firestore';
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";



const Home = (props) => {


    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];


    useEffect(() => {
      const unsubscribe = onSnapshot(collection(db, "movies"), (snapshot) => {
        let recommends = [];
        let newDisneys = [];
        let originals = [];
        let trending = [];
  
        snapshot.docs.forEach((doc) => {
          console.log(doc.data());
          const movieData = { id: doc.id, ...doc.data() };
          switch (movieData.type) {
            case "recommend":
              recommends = [...recommends, movieData];
              break;
  
            case "new":
              newDisneys = [...newDisneys, movieData];
              break;
  
            case "original":
              originals = [...originals, movieData];
              break;
  
            case "trending":
              trending = [...trending, movieData];
              break;
          }
        });
  
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
          })
        );
      });
  
   }, [userName]);
    




    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />


        </Container>
    )
}


const Container = styled.main`

    position: relative;
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    min-height: calc(100vh - 250px); /* Corrected the syntax error here */
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
        /* Removed the background property here */
    }

`;


export default Home;