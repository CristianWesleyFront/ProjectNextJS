import { MainNav } from "../main-nav";
import { ModeToggle } from "../mode-toggle";
import { Search } from "../search";
import { UserNav } from "../user-nav";


export default function HeaderLayout() {
  return (
    <>
      <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ModeToggle />
          <UserNav /> 
        </div>
      </div>
    </div>
    </>
  )
}