import Link from "next/link"
import styles from "./footer.module.css"

export function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Link href='/'>
                    <img src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png" alt="logo" />
                </Link>
            </div>
                <hr />
            <div className={styles.copy}>
                <p>&copy; 2026 Rick and Morty</p>
            </div>
        </footer>
    )
}