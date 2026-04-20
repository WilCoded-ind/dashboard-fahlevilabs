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
                                        Add New User
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
                                Add your new user
                            </h1>
                            <span className="text-md text-gray-600/90">
                                Create a new user to manage access and
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
                                        Form New User
                                    </h1>
                                    <span className='text-muted-foreground text-sm'>
                                        form with * must be
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 px-6 py-6 md:grid-cols-2 gap-8">
                                    {/* form */}
                                    <div className="space-y-5">
                                        {/* nama user */}
                                        <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
                                            <Label>Name<span className='text-destructive'>*</span></Label>
                                            <Input
                                                type="text"
                                                placeholder="Enter user's name"
                                                className="col-span-2 w-full"
                                            />
                                        </div>

                                        {/* inisial */}
                                        <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
                                            <Label>Initials<span className='text-destructive'>*</span></Label>
                                            <Select>

                                            </Select>
                                            <Input
                                                type="text"
                                                placeholder="Enter user's initials"
                                                className="col-span-2 w-full"
                                            />
                                        </div>

                                        {/* superios - select */}
                                        <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
                                            <Label>Superior<span className='text-destructive'>*</span></Label>
                                            <Input
                                                type="text"
                                                placeholder="Choose Superior"
                                                className="col-span-2 w-full"
                                            />
                                        </div>

                                        {/* email */}
                                        <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
                                            <Label>Email Address<span className='text-destructive'>*</span></Label>
                                            <Input
                                                type="email"
                                                placeholder="Enter user's email"
                                                className="col-span-2 w-full"
                                            />
                                        </div>

                                        {/* password */}
                                        <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
                                            <Label>Password<span className='text-destructive'>*</span></Label>
                                            <Input
                                                type="password"
                                                placeholder="Enter the password"
                                                className="col-span-2 w-full"
                                            />
                                        </div>

                                        {/* konfirmasi password */}
                                        <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
                                            <Label>Password Confirmation<span className='text-destructive'>*</span></Label>
                                            <Input
                                                type="password"
                                                placeholder="Re-enter the Password"
                                                className="col-span-2 w-full"
                                            />
                                        </div>

                                        {/* role */}
                                        <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
                                            <Label>Role<span className='text-destructive'>*</span></Label>
                                            <Input
                                                type="text"
                                                placeholder="Choose Role"
                                                className="col-span-2 w-full"
                                            />
                                        </div>
                                    </div>
                                    {/* foto user */}
                                    <div>
                                        <Card>Foto</Card>
                                    </div>
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
