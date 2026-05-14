import { Head, router } from '@inertiajs/react';
import type { ColumnDef } from '@tanstack/react-table';
import { Eye, Pen, Plus, RefreshCcw, Trash } from 'lucide-react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
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
        accessorKey: 'parent.name',
        header: 'Parent Menu',
        cell: ({ row }) => row.original.parent?.name ?? '-',
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
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="sm" ><Trash className="h-4 w-4" /></Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account from our
                                servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                onClick={() => {
                                    router.delete(
                                            `/menus/${row.original.id}`,
                                        );
                                }}
                            >
                                Continue
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
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
                    <a href="/menus/create">
                        <Button
                            variant="secondary"
                            size="sm"
                            className="items-center text-xs"
                        >
                            <Plus className="size-3" />
                            Add New
                        </Button>
                    </a>

                    {/* refresh */}
                    <Button
                        variant="secondary"
                        size="sm"
                        className="items-center text-xs"
                    >
                        <RefreshCcw className="size-3" /> Refresh
                    </Button>
                </div>

                {/* garis pembatas */}
                {/* <div className="border-t border-gray-400/70 shadow" /> */}

                {/* datatable */}
                <div className="mt-3">
                    <DataTable columns={columns} data={menuRows} meta={menus} />
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
