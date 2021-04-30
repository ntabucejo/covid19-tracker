import Image from 'next/image'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/covid19-tracker-logo.svg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </nav>
  )
}

export default Navbar
