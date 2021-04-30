import styles from './Inspector.module.scss'
import type { Records } from '../../pages/index.page'

const Inspector = ({ inspectorStatistics }: Statistics) => {
  return (
    <section className={styles.inspector}>
      <div className={styles.location}>
        <div className={styles.indicator}></div>
        <h3>{inspectorStatistics.location}</h3>
      </div>
      <ul className={styles.cards}>
        <Card
          primaryCategory="TOTAL CONFIRMED"
          primaryDigit={inspectorStatistics.totalConfirmed}
          secondaryCategory="NEW CONFIRMED"
          secondaryDigit={inspectorStatistics.newConfirmed}
        />
        <Card
          primaryCategory="TOTAL DEATHS"
          primaryDigit={inspectorStatistics.totalDeaths}
          secondaryCategory="NEW DEATHS"
          secondaryDigit={inspectorStatistics.newDeaths}
        />
        <Card
          primaryCategory="TOTAL RECOVERED"
          primaryDigit={inspectorStatistics.totalRecovered}
          secondaryCategory="NEW RECOVERED"
          secondaryDigit={inspectorStatistics.newRecovered}
        />
        <Card
          primaryCategory="ACTIVE CASES"
          primaryDigit={inspectorStatistics.activeCases}
          secondaryCategory="CLOSE CASES"
          secondaryDigit={inspectorStatistics.closeCases}
        />
      </ul>
    </section>
  )
}

export default Inspector

const Card = ({ primaryDigit, primaryCategory, secondaryDigit, secondaryCategory }: Details) =>  {
  return (
    <li className={styles.card}>
      <div className={styles.indicator}></div>
      <div className={styles.details}>
        <span className={styles.category}>{primaryCategory}</span>
        <span className={styles.digit}>{ new Intl.NumberFormat().format(primaryDigit)}</span>
      </div>
      <div className={styles.details}>
        <span className={styles.category}>{secondaryCategory}</span>
        <span className={styles.digit}>{ new Intl.NumberFormat().format(secondaryDigit)}</span>
      </div>
    </li>
  )
}

interface Statistics {
  inspectorStatistics: Records
}

interface Details {
  primaryCategory: string,
  primaryDigit: number,
  secondaryCategory: string,
  secondaryDigit: number
}
