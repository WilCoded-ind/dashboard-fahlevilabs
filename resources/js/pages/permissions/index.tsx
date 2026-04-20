import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
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
                        <ol className="flex flex-wrap items-center space-x-2 md:space-x-3 space-y-1">
                            <li className="flex items-center">
                                <a
                                    href="/dashboard"
                                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                    <a
                                        href="#"
                                        className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2"
                                    >
                                        Roles & Permissions
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                    <a
                                        href="#"
                                        className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2"
                                    >
                                        Permission Settings
                                    </a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                {/* header */}
                <div className="mb-4">
                    <h1 className="text-2xl font-bold">Set Your Permission</h1>
                    <span className="text-md text-gray-600/90">
                        Configure permissions for each role to control what
                        actions and features they can access.
                    </span>
                </div>

                {/* checkbox permission */}
                <div className="">
                    {/* garis pembatas */}
                    <div className="border-t border-gray-400/70 shadow" />

                    <div className="mt-3">
                        <Card>
                            <div className="flex flex-col text-center">
                                <h1 className="text-xl font-bold">
                                    Choose Permissions for Admin Role   
                                </h1>
                                <span className="text-xs text-muted-foreground md:mx-100">
                                    Select the permissions that should be assigned to the Admin role. These permissions will determine what actions users with the Admin role can perform within the application.
                                </span>
                            </div>


                            {/* grid */}
                            <div className="mx-6 mt-4 grid grid-cols-1 md:grid-cols-2">
                                {/* grid 1 */}
                                <div>
                                    <h1>Menu Name</h1>
                                </div>

                                {/* grid 2 */}
                                <div className="grid grid-cols-4">
                                    <h1>Create</h1>
                                    <h1>Edit</h1>
                                    <h1>Delete</h1>
                                    <h1>Show</h1>
                                </div>
                            </div>

                            {/* border */}
                            <div className="mx-4 mt-0 border-t border-gray-400/30 shadow" />

                            {/* button */}
                            <div className="mx-6 flex gap-2">
                                {/* simpan */}
                                <Button className="">Save Permission</Button>

                                {/* batal */}
                                <a href="/roles">
                                    <Button variant="outline" className="">
                                        Cancel
                                    </Button>
                                </a>
                            </div>
                        </Card>
                    </div>
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
