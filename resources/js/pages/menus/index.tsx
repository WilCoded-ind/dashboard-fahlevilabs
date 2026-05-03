import { Head } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { dashboard } from '@/routes';
import { router } from '@inertiajs/react';
import { Trash, Pen, Eye } from 'lucide-react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

// datatable
import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';

// datatable
const columns: ColumnDef<any>[] = [
    {
        accessorKey: 'name',
        header: 'Menu Name',
    },
    {
        accessorKey: 'slug',
        header: 'Slug',
    },
    {
        accessorKey: 'url',
        header: 'URL',
    },
    {
        accessorKey: 'menus.parent_id',
        header: 'Parent Menu',
    },
    {
        accessorKey: 'icon',
        header: 'Icon',
    },
    {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
            <div className="flex gap-2">
                <a href={`/menus/${row.original.id}`}>
                    <Button variant="secondary" size="sm">
                        <Eye className="h-4 w-4" />
                    </Button>
                </a>
                <a href={`/menus/${row.original.id}/edit`}>
                    <Button variant="outline" size="sm">
                        <Pen className="h-4 w-4" />
                    </Button>
                </a>
                <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => {
                        if (confirm('Yakin mau hapus menu ini?')) {
                            router.delete(`/menus/${row.original.id}`);
                        }
                    }}
                >
                    <Trash className="h-4 w-4" />
                </Button>
            </div>
        ),
    },
];

export default function MenusIndex({ menus }: { menus: any }) {
    const menuRows = menus?.data ?? [];

    return (
        <>
            <Head title="Menu Management" />
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
                            <BreadcrumbLink href="/menus">
                                Menu Management
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* header */}
                <div className="mb-4">
                    <h1 className="text-2xl font-bold">Menu Management</h1>
                    <span className="text-md text-gray-600/90">
                        Manage your application's menus for better navigation
                        and Menu experience.
                    </span>
                </div>

                {/* body */}
                <div className="mb-2 flex flex-wrap justify-start gap-2 md:justify-end">
                    {/* tombol header */}
                    {/* add */}
                    <a href="menus/create">
                        <Button variant="secondary" size="sm">
                            Add New
                        </Button>
                    </a>


                    {/* refresh */}
                    {/* <Button variant="secondary" size="sm" >
                        Refresh
                    </Button> */}
                </div>

                {/* garis pembatas */}
                <div className="border-t border-gray-400/70 shadow" />

                {/* datatable */}
                <div className="mt-3">
                    <DataTable columns={columns} data={menuRows} meta={menus}/>
                </div>
            </div>
        </>
    );
}

MenusIndex.layout = {
    breadcrumbs: [
        {
            title: 'Menu Management',
            href: '/menus',
        },
    ],
};
