import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const menuItems = [
  { label: "About me", link: "/blog" },
  { label: "Tech", link: "/tech" },
  { label: "Blog", link: "/blog" },
  { label: "Games", link: "/blog" },
  { label: "Blog", link: "/blog" },
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <NavigationMenu className="p-2">
          <NavigationMenuList>
            {menuItems.map((menuItem, idx) => (
              <NavigationMenuItem key={idx} className="hover:bg-slate-600">
                <Link href={menuItem.link} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
