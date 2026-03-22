import Link from "next/link"
import styles from "./header.module.css"

export function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <img src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png" alt="logo" />
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='/characters'>
                            Personagens
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}