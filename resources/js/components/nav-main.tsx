import { Link } from '@inertiajs/react';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { LayoutGrid } from 'lucide-react';
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { dashboard } from '@/routes';

type SidebarMenuItem = {
    id: number;
    name: string;
    url: string | null;
    icon: string | null;
    children: SidebarMenuItem[];
};

function resolveIcon(name: string | null): LucideIcon | null {
    if (!name) return null;
    const Icon = (Icons as Record<string, unknown>)[name] as LucideIcon | undefined;
    return Icon ?? null;
}

export function NavMain({ menus }: { menus: SidebarMenuItem[] }) {
    const { isCurrentUrl } = useCurrentUrl();
    const safeMenus = Array.isArray(menus) ? menus : [];

    return (
        <>
            <SidebarGroup className="px-2 py-0 mt-2">
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                asChild
                                isActive={isCurrentUrl(dashboard())}
                                tooltip="Dashboard"
                                className="text-sidebar-foreground"
                            >
                                <Link href={dashboard()} prefetch>
                                    <LayoutGrid />
                                    <span>Dashboard</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            {safeMenus.map((menu) => {
                const Icon = resolveIcon(menu.icon);

                if (!menu.children?.length) {
                    return (
                        <SidebarGroup key={menu.id} className="px-2 py-0">
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isCurrentUrl(menu.url ?? '')}
                                            tooltip={menu.name}
                                            className="text-sidebar-foreground"
                                        >
                                            <Link href={menu.url ?? '#'} prefetch>
                                                {Icon && <Icon />}
                                                <span>{menu.name}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    );
                }

                return (
                    <SidebarGroup key={menu.id} className="px-2 py-0">
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuSub>
                                    {menu.children.map((child) => {
                                        const ChildIcon = resolveIcon(child.icon);

                                        return (
                                            <SidebarMenuSubItem key={child.id}>
                                                <SidebarMenuSubButton
                                                    asChild
                                                    isActive={isCurrentUrl(child.url ?? '')}
                                                    className="text-sidebar-foreground"
                                                >
                                                    <Link href={child.url ?? '#'} prefetch>
                                                        {ChildIcon && <ChildIcon />}
                                                        <span>{child.name}</span>
                                                    </Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        );
                                    })}
                                </SidebarMenuSub>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                );
            })}
        </>
    );
}
