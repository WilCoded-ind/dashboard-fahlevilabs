import { Head, router } from '@inertiajs/react';
import type { ColumnDef } from '@tanstack/react-table';
import { Pen, Shield, Trash } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';

type Role = {
    id: number;
    name: string;
    initials: string;
    users_count: number;
};

// definisi kolom
const columns: ColumnDef<Role>[] = [
    {
        accessorKey: 'name',
        header: 'Role Name',
    },
    {
        accessorKey: 'initials',
        header: 'Initial',
    },
    // {
    //     accessorKey: 'users_count',
    //     header: 'Total Users',
    // },
    {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
            const role = row.original;
            const canDelete = role.users_count === 0;

            return (
                <div className="flex gap-2">
                    <a href={`/roles/${role.id}/permission`}>
                        <Button variant="secondary" size="sm">
                            <Shield className="h-4 w-4" />
                        </Button>
                    </a>
                    <a href={`/roles/${role.id}/edit`}>
                        <Button variant="outline" size="sm">
                            <Pen className="h-4 w-4" />
                        </Button>
                    </a>

                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button
                                variant="destructive"
                                size="sm"
                                disabled={!canDelete}
                            >
                                <Trash className="h-4 w-4" />
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    Delete this role?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    This role will be permanently deleted. Roles
                                    that are still assigned to users cannot be
                                    deleted.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                    onClick={() =>
                                        router.delete(`/roles/${row.original.id}`)
                                    }
                                >
                                    Continue
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            );
        },
    },
];

export default function RoleIndex({ roles }: { roles: any }) {
    return (
        <>
            <Head title="User Management" />
            <div className="max-w-8xl overflow-x-auto rounded-xl p-2 md:px-6">
                {/* breadcrumbs */}
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
                            <BreadcrumbPage>Roles & Permissions</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* header */}
                <div className="mb-4">
                    <h1 className="text-2xl font-bold">Roles & Permissions</h1>
                    <span className="text-md text-gray-600/90">
                        Manage your application's roles and permissions for
                        better access control and security.
                    </span>
                </div>

                {/* body */}
                <div className="mb-2 flex flex-wrap justify-start gap-2 md:justify-end">
                    {/* tombol header */}
                    {/* add */}
                    <a href="/roles/create">
                        <Button variant="secondary" size="sm">
                            + Add New Role
                        </Button>
                    </a>
                </div>

                {/* garis pembatas */}
                <div className="border-t border-gray-400/70 shadow" />

                {/* datatable */}
                <div className="mt-3">
                    <DataTable
                        columns={columns}
                        data={roles.data}
                        meta={roles}
                    />
                </div>
            </div>
        </>
    );
}

RoleIndex.layout = {
    breadcrumbs: [
        {
            title: 'Role & Permisson',
            href: 'roles/index',
        },
    ],
};
