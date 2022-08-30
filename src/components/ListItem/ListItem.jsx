
import styles from './ListItem.module.scss';

export const ListItem = () => {

  return (
    <div className={ styles.listFlex }>
            <div className={ styles.listBox }>
              <div className={ styles.imgBx }>
                <img 
                src="https://i.pinimg.com/originals/9d/c2/77/9dc27772e26f5f3ebc6f6d2a6aedac6d.png" 
                alt="List Box" 
                />
                </div>
                <div className={ styles.itemContent }>
                    HOLA QUE HACE
                </div>
            </div>
        </div>
  )
}
