import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select,  } from '@/components/ui/select';

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
                                        Users
                                    </a>
                                </div>
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
                                        Add New Role
                                    </a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                {/* header */}
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-3">
                    {/* grid kiri */}
                    <div>
                        <div className="mb-4">
                            <h1 className="text-2xl font-bold">
                                Add your new role
                            </h1>
                            <span className="text-md text-gray-600/90">
                                Create a new role to manage access and
                                permissions in your application.
                            </span>
                        </div>
                    </div>

                    {/* grid kanan */}
                    <div className="col-span-2">
                        {/* garis pembatas */}
                        <div className="border-t border-gray-400/70 shadow" />

                        <div className="mt-3">
                            <Card>
                                <div className='flex flex-col text-center '>
                                    <h1 className="text-xl font-bold">
                                        Form New Role
                                    </h1>
                                    <span className='text-muted-foreground text-xs'>
                                        Fields marked with <span className='text-destructive'>*</span> are required
                                    </span>
                                </div>

                                <div className="px-6 pt-6">
                                    {/* form */}
                                    <div className="flex flex-col gap-4">
                                        {/* nama user */}
                                        <div className="flex flex-col gap-2">
                                            <Label>Name Role<span className='text-destructive'>*</span></Label>
                                            <Input
                                                type="text"
                                                placeholder="Enter role name"
                                                className="w-full md:w-1/2"
                                            />
                                        </div>

                                        {/* inisial */}
                                        <div className="flex flex-col gap-2">
                                            <Label>Initials<span className='text-destructive'>*</span></Label>
                                            <Select>

                                            </Select>
                                            <Input
                                                type="text"
                                                placeholder="Enter initials"
                                                className="w-full md:w-1/2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* border */}
                                <div className="border-t border-gray-400/30 shadow mx-4 mt-0" />

                                {/* button */}
                                <div className='flex gap-2 mx-6'>
                                    {/* simpan */}
                                    <Button className=''>
                                        Save Role
                                    </Button>

                                    {/* batal */}
                                    <a href="/roles">
                                        <Button variant="outline" className=''>
                                            Cancel
                                        </Button>
                                    </a>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* body */}
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
