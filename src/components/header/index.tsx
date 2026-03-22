import Link from "next/link"

export function Header(){
    return(
        <header>
            <div>
                Rick e Morty
            </div>
            <nav>
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