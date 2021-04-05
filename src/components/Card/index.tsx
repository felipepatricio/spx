import styles from './styles/Card.module.css'

const Card = ({data}) => {
  return (
    <ul className={styles.container}>
      {data.map(({name, id}) => (
        <li key={id} className={styles.card}>
          <a href={`/launches/${id}`} className={styles.anchor}>{name}</a>
        </li>
      ))}
    </ul>
  )
}

export default Card
