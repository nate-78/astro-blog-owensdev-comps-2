import styles from './card.module.css';

export default function Card(props: any) {
  return (
    <div className={styles.card} suppressHydrationWarning={true}>
      <div className={styles.cardHeadline}>
        <h3>{props.title}</h3>
      </div>
      <div className={styles.cardBody} dangerouslySetInnerHTML={{ __html: props.content }}>
      </div>
    </div>
  );
}