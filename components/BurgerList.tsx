import styles from '../styles/BurgerList.module.scss';
import BurgerCard from './BurgerCard';

const BurgerList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best Burger in Town</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus facere ut sed accusantium,
        cupiditate necessitatibus molestiae atque. Ea quisquam suscipit tempore beatae officiis assumenda
        temporibus sed, ullam vitae fuga iusto?
      </p>
      <div className={styles.wrapper}>
        <BurgerCard />
        <BurgerCard />
        <BurgerCard />
        <BurgerCard />
        <BurgerCard />
        <BurgerCard />
        <BurgerCard />
        <BurgerCard />
      </div>
    </div>
  )
}

export default BurgerList