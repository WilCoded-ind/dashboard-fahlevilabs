import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
    Table,
    TableHead,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

type Menu = {
    id: number;
    name: string;
    url: string | null;
    children: Menu[];
};

type PermFlags = {
    can_view: boolean;
    can_create: boolean;
    can_update: boolean;
    can_delete: boolean;
};

type Permission = { menu_id: number } & PermFlags;

const FIELDS: { key: keyof PermFlags; label: string }[] = [
    { key: 'can_create', label: 'Create' },
    { key: 'can_update', label: 'Edit' },
    { key: 'can_delete', label: 'Delete' },
    { key: 'can_view', label: 'View' },
];

const emptyFlags = (): PermFlags => ({
    can_view: false,
    can_create: false,
    can_update: false,
    can_delete: false,
});

export default function RolePermission({
    role,
    menus,
    permissions,
}: {
    role: any;
    menus: Menu[];
    permissions: Permission[];
}) {
    // build initial form state
    const initial: Record<number, PermFlags> = {};

    menus.forEach((menu) => {
        if (!menu.children?.length) initial[menu.id] = emptyFlags();
        menu.children?.forEach((child) => {
            initial[child.id] = emptyFlags();
        });
    });

    permissions.forEach((p) => {
        initial[p.menu_id] = {
            can_view: p.can_view,
            can_create: p.can_create,
            can_update: p.can_update,
            can_delete: p.can_delete,
        };
    });

    const { data, setData, put, processing } = useForm<{
        permissions: Record<number, PermFlags>;
    }>({ permissions: initial });

    const toggle = (menuId: number, field: keyof PermFlags) => {
        setData('permissions', {
            ...data.permissions,
            [menuId]: {
                ...(data.permissions[menuId] ?? emptyFlags()),
                [field]: !(data.permissions[menuId]?.[field] ?? false),
            },
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/roles/${role.id}/permission`);
    };

    // row dengan checkbox (child & standalone)
    const renderCheckboxRow = (menu: Menu) => (
        <TableRow key={menu.id}>
            <TableCell className="font-medium">{menu.name}</TableCell>
            {FIELDS.map(({ key }) => (
                <TableCell key={key}>
                    <Checkbox
                        checked={data.permissions[menu.id]?.[key] ?? false}
                        onCheckedChange={() => toggle(menu.id, key)}
                    />
                </TableCell>
            ))}
        </TableRow>
    );

    return (
        <>
            <Head title="Permission Settings" />

            <div className="max-w-8xl overflow-x-auto rounded-xl p-4 md:p-8">
                {/* Breadcrumb */}
                <Breadcrumb className="pb-3">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard">
                                Dashboard
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">
                                Administrator
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/roles">
                                Role & Permission
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Permission Settings</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">
                        Manage Role Permissions
                    </h1>
                    <p className="text-md text-gray-600/90">
                        Configure access rights for each role to control what
                        users can view and perform within the application.
                    </p>
                </div>

                <div className="mb-4 border-t border-gray-400/70" />

                {/* Card */}
                <Card className="p-5 md:p-6">
                    {/* Title */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold">Permissions</h2>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Role:</span>
                            <span className="font-medium">{role.name}</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Menu</TableHead>
                                    {FIELDS.map(({ key, label }) => (
                                        <TableHead key={key}>{label}</TableHead>
                                    ))}
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {menus.map((menu) =>
                                    menu.children?.length ? (
                                        <>
                                            {/* parent — bold, no checkbox */}
                                            <TableRow key={`group-${menu.id}`}>
                                                <TableCell className="font-bold">
                                                    {menu.name}
                                                </TableCell>
                                                {FIELDS.map(({ key }) => (
                                                    <TableCell key={key} />
                                                ))}
                                            </TableRow>
                                            {/* children — checkbox */}
                                            {menu.children.map(
                                                renderCheckboxRow,
                                            )}
                                        </>
                                    ) : (
                                        // standalone — bold + checkbox
                                        <TableRow key={menu.id}>
                                            <TableCell className="font-bold">
                                                {menu.name}
                                            </TableCell>
                                            {FIELDS.map(({ key }) => (
                                                <TableCell key={key}>
                                                    <Checkbox
                                                        checked={
                                                            data.permissions[
                                                                menu.id
                                                            ]?.[key] ?? false
                                                        }
                                                        onCheckedChange={() =>
                                                            toggle(menu.id, key)
                                                        }
                                                    />
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ),
                                )}
                            </TableBody>
                        </Table>

                        {/* Footer */}
                        <div className="mt-6 flex justify-end gap-2 border-t border-gray-400/30 pt-4">
                            <Button type="submit" disabled={processing}>
                                Save
                            </Button>
                            <a href="/roles">
                                <Button type="button" variant="outline">
                                    Cancel
                                </Button>
                            </a>
                        </div>
                    </form>
                </Card>
            </div>
        </>
    );
}

RolePermission.layout = {
    breadcrumbs: [
        {
            title: 'Permission Settings',
            href: '/roles/permission',
        },
    ],
};
