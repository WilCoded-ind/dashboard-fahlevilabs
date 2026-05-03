import { Head } from '@inertiajs/react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';
import { Trash, Pen, Shield } from 'lucide-react';

// datatable
import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';

// definisi kolom
const columns: ColumnDef<any>[] = [
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
        cell: ({ row }) => (
            <div className="flex gap-2">
                <a href={`/roles/${row.original.id}/permission`}>
                    <Button variant="secondary" size="sm">
                            <Shield className='h-4 w-4'/>
                    </Button>
                </a>
                <a href={`/roles/${row.original.id}/edit`}>
                    <Button variant="outline" size="sm">
                        <Pen className='h-4 w-4'/>
                    </Button>
                </a>
                <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => {
                        if (confirm('Yakin mau hapus role ini?')) {
                            router.delete(`/roles/${row.original.id}`);
                        }
                    }}
                >
                    <Trash className="h-4 w-4" />
                </Button>
            </div>
        ),
    },
];

export default function RoleIndex({ roles }: { roles: any }) {
    return (
        <>
            <Head title="User Management" />
            <div className="max-w-8xl overflow-x-auto rounded-xl p-4 md:p-8">
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
                    <a href="roles/create">
                        <Button variant="secondary" size="sm">
                            + Add New Role
                        </Button>
                    </a>
                </div>

                {/* garis pembatas */}
                <div className="border-t border-gray-400/70 shadow" />

                {/* datatable */}
                <div className="mt-3">
                    <DataTable columns={columns} data={roles.data} />
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
