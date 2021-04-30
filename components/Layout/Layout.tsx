import styles from './Layout.module.scss';
import Navbar from '../Navbar'

interface LayoutProps { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.appLayout}>
      <header>
        <div className={styles.headerLayout}>
          <Navbar />
        </div>
      </header>
      <main>
        <div className={styles.mainLayout}>{ children }</div>
      </main>
      <footer>
        <div className={styles.footerLayout}>
          <section>COVID 19 TRACKER | 2021</section>
        </div>
      </footer>
    </div>
  )
}

export default Layout
