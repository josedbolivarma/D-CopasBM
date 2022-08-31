import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ListContainer } from "../../containers/ListContainer/ListContainer";
import { Link } from 'react-router-dom';

import styles from './Detail.module.scss';

export const Detail = () => {

  const [ data, setData ] = useState();
  const [ secondCoctail, setSecondCoctail ] = useState();
  const [ thirdCoctail, setThirdCoctail ] = useState();
  const [ isLoading, setIsLoading ] = useState( true );
  const { id } = useParams();

const getData = async ( url ) => {
    setIsLoading( true );
    const response = await fetch( url );
    const data = await response.json();
    setData(data.drinks[0]);
    console.log( data );
    setIsLoading( false );
}

const getRandomOne = async ( url ) => {
  const response = await fetch( url );
  const data = await response.json();
  setSecondCoctail(data.drinks[0]);
}

const getRandomTwo = async ( url ) => {
  const response = await fetch( url );
  const data = await response.json();
  setThirdCoctail(data.drinks[0]);
}


  const renderData = () => {
    return (
        <div className={ styles.coctail__container }>
            <div className={ styles.coctail__oneImage }>
              <img 
              src={ data?.strDrinkThumb }
              alt={ data?.strDrink }
              />
            <span className={`markPrice ${ styles.detail__price }`}>$20.00</span>
            <div className={ styles.content__hover }>
              <div className={ styles.detail__contentBox }>
              <h2>{ data?.strDrink }</h2>
              <p>{ data?.strAlcoholic }</p>
              </div>
              <div className={ styles.detail__contentBox }>
                <p>{ data?.strCategory }</p>
                <p>{ data?.strGlass }</p>
              </div>
              
              <div className={ styles.detail__contentBox }>
                <p>{ data?.strInstructions }</p>
              </div>
              <div className={ styles.detail__contentBox }>
              <p>{ data?.strIngredient1 }</p>
              <p>{ data?.strIngredient2 }</p>
              <p>{ data?.strIngredient3 }</p>
              <p>{ data?.strIngredient4 }</p>
              </div>
            </div>
            </div>
            <div className={ styles.coctail__otherImages}>
              <div className={ styles.coctail__twoImage }>
              <Link to={`/detail/${ secondCoctail?.idDrink }`}>
                <img 
                src={ secondCoctail?.strDrinkThumb } 
                alt={ secondCoctail?.strDrink } 
                />
              </Link>
              <span className={`markPrice ${ styles.detail__price }`}>$20.00</span>
              </div>
              <div className={ styles.coctail__twoImage }>
              <Link to={`/detail/${ thirdCoctail?.idDrink }`}>
              <img 
                src={ thirdCoctail?.strDrinkThumb } 
                alt={ thirdCoctail?.strDrink } 
                />
              </Link>
                <span className={`markPrice ${ styles.detail__price }`}>$20.00</span>
              </div>
            </div>
        </div>
    )
  }

  useEffect(() => {
    window.scroll(0, 0);
    getRandomOne('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    getRandomTwo('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    getData(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ id }`);
  }, [ id ]);

  return (
    <section className={ styles.detail }>
        <div className={ styles.divider }></div>
        <div className='container'>
        <h2 className='title'><i>THE BAR</i></h2>
        {
            ( isLoading )
            ? <h2>Loading...</h2>
            : ( !isLoading && data )
            ? renderData()
            : <h2>Error</h2> 
        }
        <ListContainer />
        </div>
    </section>
  )
}
