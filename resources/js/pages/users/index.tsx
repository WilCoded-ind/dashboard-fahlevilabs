import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
    return (
        <>
            <Head title="User Management" />
            <div className="max-w-8xl overflow-x-auto rounded-xl p-4 md:p-8">
                {/* breadcrumbs */}
                <div>
                    {/* breadcrumbs sementara buat preview aja */}
                    <nav className="flex justify-start pb-4" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <a
                                    href='/dashboard'
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
                                        Users
                                    </a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                {/* header */}
                <div className="mb-4">
                    <h1 className="text-2xl font-bold">User Management</h1>
                    <span className='text-md text-gray-600/90'>
                        Manage your application's users for better access control and security.
                    </span>
                </div>

                {/* stat */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <Card className="p-4 gap-1">
                        <h3 className="text-md font-semibold">Total Users</h3>
                        <span>123</span>
                    </Card>
                    <Card className="p-4 gap-1">
                        <h3 className="text-md font-semibold">Active Users</h3>
                        <span>987</span>
                    </Card>
                    <Card className="p-4 gap-1">
                        <h3 className="text-md font-semibold">Inactive Users</h3>
                        <span>247</span>
                    </Card>
                </div>


                {/* body */}
                <div className="flex gap-2 flex-wrap justify-start md:justify-end mb-2">
                    {/* botton header */}
                    {/* add */}
                    <Button variant="outline" size="sm">
                        Add User
                    </Button>

                    {/* filter */}
                    <Button variant="outline" size="sm">
                        Filter Data
                    </Button>

                    {/* export */}
                    <Button variant="outline" size="sm">
                        Export Excel
                    </Button>

                    {/* import */}
                    <Button variant="outline" size="sm">
                        Import Excel
                    </Button>
                </div>

                {/* garis pembatas */}
                <div className="border-t border-gray-400/70 shadow" />
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
