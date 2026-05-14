import { Link } from '@inertiajs/react';
import type { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';
import { ChevronRight, LayoutGrid } from 'lucide-react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
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
    if (!name) {
        return null;
    }

    const Icon = (Icons as Record<string, unknown>)[name] as LucideIcon | undefined;

    return Icon ?? null;
}

function BranchContent({
    icon: Icon,
    label,
}: {
    icon: LucideIcon | null;
    label: string;
}) {
    return (
        <>
            <span className="flex min-w-0 flex-1 items-center gap-2 pr-8">
                {Icon && <Icon className="size-4 shrink-0" />}
                <span className="truncate">{label}</span>
            </span>
            <ChevronRight className="absolute right-2 top-1/2 size-4 -translate-y-1/2 shrink-0 transition-transform duration-200 ease-out group-data-[state=open]/collapsible:rotate-90" />
        </>
    );
}

export function NavMain({ menus }: { menus: SidebarMenuItem[] }) {
    const { isCurrentUrl } = useCurrentUrl();
    const safeMenus = Array.isArray(menus) ? menus : [];

    const hasActiveChild = (items: SidebarMenuItem[]): boolean =>
        items.some(
            (item) =>
                isCurrentUrl(item.url ?? '') ||
                (item.children?.length ? hasActiveChild(item.children) : false),
        );

    const renderNestedMenus = (
        items: SidebarMenuItem[],
        level = 0,
    ): React.ReactNode =>
        items.map((item) => {
            const Icon = resolveIcon(item.icon);
            const isLeaf = !item.children?.length;
            const isActive = isCurrentUrl(item.url ?? '');
            const isBranchActive = item.children?.length
                ? hasActiveChild(item.children)
                : false;

            if (isLeaf) {
                return (
                    <SidebarMenuSubItem key={item.id}>
                        <SidebarMenuSubButton
                            asChild
                            isActive={isActive}
                            className="text-sidebar-foreground"
                        >
                            <Link href={item.url ?? '#'} prefetch>
                                {Icon && <Icon />}
                                <span>{item.name}</span>
                            </Link>
                        </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                );
            }

            return (
                <SidebarMenuSubItem key={item.id}>
                    <Collapsible
                        defaultOpen={isBranchActive}
                        className="group/collapsible"
                    >
                        <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton
                                isActive={isBranchActive}
                                className="relative h-auto min-h-7 w-full text-sidebar-foreground transition-colors duration-200"
                            >
                                <BranchContent
                                    icon={Icon}
                                    label={item.name}
                                />
                            </SidebarMenuSubButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent className="data-[state=closed]:opacity-80 data-[state=open]:opacity-100">
                            <SidebarMenuSub
                                className={level === 0 ? 'border-primary' : undefined}
                            >
                                {renderNestedMenus(item.children, level + 1)}
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </Collapsible>
                </SidebarMenuSubItem>
            );
        });

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
                                <SidebarMenuItem>
                                    <Collapsible
                                        defaultOpen={hasActiveChild(menu.children)}
                                        className="group/collapsible"
                                    >
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton
                                                isActive={hasActiveChild(menu.children)}
                                                tooltip={menu.name}
                                                className="relative w-full text-sidebar-foreground transition-colors duration-200"
                                            >
                                                <BranchContent
                                                    icon={Icon}
                                                    label={menu.name}
                                                />
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>

                                        <CollapsibleContent className="data-[state=closed]:opacity-80 data-[state=open]:opacity-100">
                                            <SidebarMenuSub className="border-primary">
                                                {renderNestedMenus(menu.children)}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </Collapsible>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                );
            })}
        </>
    );
}
