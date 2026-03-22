import Link from "next/link";

export default function notFound(){
    return(
        <div>
            <h1>Error 404</h1>
            <p>Página não encontrada</p>
            <Link href='/' >
                Voltar
            </Link>
        </div>
    )
}