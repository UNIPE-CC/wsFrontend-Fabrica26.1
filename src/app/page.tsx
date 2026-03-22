import Rick from "@/components/Rick"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home - Rick e Morty',
  description: 'Página inicial',
  openGraph:{
    title: 'API do Rick e Morty',
    description: 'API do Rick and Morty com Nexr JS',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH1cm3tYrx9WdK1JB6IK6mRoOsDGU5VAt8xQ&s']
  }
}

export default function Home() {
  return (
    <div>
      <Rick />
    </div>
  );
}