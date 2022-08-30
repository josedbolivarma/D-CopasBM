import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

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
   
    setIsLoading( false );
}

const getRandomOne = async ( url ) => {
  const response = await fetch( url );
  const data = await response.json();
  console.log( data );
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
              src={ data.strDrinkThumb }
              alt={ data.strDrink }
              />
            </div>
            <div className={ styles.coctail__otherImages}>
              <div className={ styles.coctail__twoImage }>
                <img 
                src={ secondCoctail?.strDrinkThumb } 
                alt={ secondCoctail?.strDrink } 
                />
              </div>
              <div className={ styles.coctail__twoImage }>
              <img src={ thirdCoctail?.strDrinkThumb } 
                alt={ thirdCoctail?.strDrink } 
                />
              </div>
            </div>
        </div>
    )
  }

  useEffect(() => {
    getRandomOne('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    getRandomTwo('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    getData(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ id }`);
  }, [ id ]);

  return (
    <section className={ styles.detail }>
        <div className={ styles.divider }></div>
        <div className={ styles.container }>
        <h2 className='title'><i>THE BAR</i></h2>
        {
            ( isLoading )
            ? <h2>Loading...</h2>
            : ( !isLoading && data )
            ? renderData()
            : <h2>Error</h2> 
        }
        </div>
    </section>
  )
}
