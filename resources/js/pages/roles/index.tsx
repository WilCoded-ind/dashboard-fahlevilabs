import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Dashboard() {
    return (
        <>
            <Head title="User Management" />
            <div className="max-w-8xl overflow-x-auto rounded-xl p-4 md:p-8">
                {/* breadcrumbs */}
                <div>
                    {/* breadcrumbs sementara buat preview aja */}
                    <nav
                        className="flex justify-start pb-4"
                        aria-label="Breadcrumb"
                    >
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <a
                                    href="/dashboard"
                                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg
                                        className="h-6 w-6 text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M7.05 4.05a.5.5 0 1 0-.707.707L10.293 8l-3.95 3.95a.5.5 0 1 0 .707.707l4.646-4.647a.5.5 0 0 0 0-.707L7.05 4.05z" />
                                    </svg>
                                    <a
                                        href="#"
                                        className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2"
                                    >
                                        Roles & Permissions
                                    </a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                {/* header */}
                <div className="mb-4">
                    <h1 className="text-2xl font-bold">Roles & Permissions</h1>
                    <span className="text-md text-gray-600/90">
                        Manage your application's roles and permissions for better access
                        control and security.
                    </span>
                </div>

                {/* stat */}
                {/* <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <Card className="gap-1 p-4">
                        <h3 className="text-md font-semibold">Total Users</h3>
                        <span>123</span>
                    </Card>
                    <Card className="gap-1 p-4">
                        <h3 className="text-md font-semibold">Active Users</h3>
                        <span>987</span>
                    </Card>
                    <Card className="gap-1 p-4">
                        <h3 className="text-md font-semibold">
                            Inactive Users
                        </h3>
                        <span>247</span>
                    </Card>
                </div> */}

                {/* body */}
                <div className="mb-2 flex flex-wrap justify-start gap-2 md:justify-end">
                    {/* tombol header */}
                    {/* add */}
                    <a href="roles/create">
                        <Button variant="secondary" size="sm">
                            + Add New Role
                        </Button>
                    </a>
                    

                    {/* filter */}
                    {/* <Button variant="secondary" size="sm">
                        Filter Data
                    </Button> */}

                    {/* export */}
                    {/* <Button variant="secondary" size="sm">
                        Export Excel
                    </Button> */}

                    {/* import */}
                    {/* <Button variant="secondary" size="sm">
                        Import Excel
                    </Button> */}
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
