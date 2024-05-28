import { SearchBarComponent } from "@/components/SearchBar";
import { ReactNode } from "react";

interface Layoutprops {
    children: ReactNode
}

export default function Home({ children }: Layoutprops) {


  return (
    <div className="w-[100vw] h-[100vh] flex flex-col gap-10 justify-center items-center">
      <SearchBarComponent/>
      {children}
    </div>
  )
}