import styles from './styles/Card.module.css'

const Card = ({data}: any) => {
  return (
    <ul className={styles.container}>
      {data.map(({name, id}: any) => (
        <li key={id} className={styles.card}>
          <a href={`/launches/${id}`} className={styles.anchor}>{name}</a>
        </li>
      ))}
    </ul>
  )
}

export default Card
