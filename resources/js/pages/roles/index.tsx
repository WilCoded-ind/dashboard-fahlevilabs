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
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { dashboard } from '@/routes';

export default function Dashboard() {
    return (
        <>
            <Head title="User Management" />
            <div className="max-w-8xl overflow-x-auto rounded-xl p-4 md:p-8">
                {/* breadcrumbs */}
                <Breadcrumb className='pb-3'>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
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

                <div className="flex items-center justify-between gap-2 md:flex-row">
                    {/* show entry */}
                    <div className="mt-3 flex items-center justify-start gap-2">
                        <span className="text-sm text-gray-600/90">Show</span>
                        <select className="focus:ring-opacity-50 rounded border border-gray-300 bg-white px-2 py-1 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        <span className="text-sm text-gray-600/90">
                            entries
                        </span>
                    </div>

                    {/* search */}
                    <div className="mt-3 flex items-center justify-start gap-2">
                        <Input
                            type="text"
                            id="search"
                            placeholder="Type to search..."
                        />
                    </div>
                </div>

                {/* datatable */}
                <div className="mt-3">
                    {/* datatable sementara buat preview aja */}
                    <Card>
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 pb-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                    >
                                        Role Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 pb-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                    >
                                        Initial
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 pb-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                    >
                                        Total Users
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 pb-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                </div>

                {/* informasi data */}
                <div className="mt-4 flex items-center justify-between gap-2">
                    <p className="text-sm text-gray-600/90">
                        Showing 1 to 10 of 57 entries
                    </p>
                </div>

                {/* pagination */}
                <div className="mt-4 flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm">
                        Previous
                    </Button>
                    <Button variant="outline" size="sm">
                        Next
                    </Button>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
