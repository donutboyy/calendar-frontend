import { ModeToggle } from "./mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

export default function NavBar() {
  return (
    <NavigationMenu className="sticky max-w-full w-full top-0 left-0 flex items-center select-none justify-left border-b p-4 text-xl font-semibold">
      <NavigationMenuList>
        <NavigationMenuItem>
          <h2>Calendar</h2>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
