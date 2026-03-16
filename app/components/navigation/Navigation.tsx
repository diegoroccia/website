import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "Blog", link: "/blog" },
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-primary">Diego.</span>
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {menuItems.map((menuItem, idx) => (
              <NavigationMenuItem key={idx}>
                <Link href={menuItem.link} legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(), 
                      "bg-transparent hover:text-primary transition-colors"
                    )}
                  >
                    {menuItem.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
