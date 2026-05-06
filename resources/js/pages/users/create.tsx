import { Head } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function CreateUser() {
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
                            <BreadcrumbLink href="/users">
                                User Management
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Create New User</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* header */}
                <div className="">
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

                    <div>
                        {/* garis pembatas */}
                        <div className="border-t border-gray-400/70 shadow" />

                        <div className="mt-3">
                            <Card className="p-5 md:w-1/2 md:p-6">
                                <div className="flex flex-col text-left">
                                    <h1 className="text-xl font-bold">
                                        Form New User
                                    </h1>
                                    <span className="text-sm text-muted-foreground">
                                        Fields marked with{' '}
                                        <span className="text-destructive">
                                            *
                                        </span>{' '}
                                        are required
                                    </span>
                                </div>

                                <div className="pt-6">
                                    {/* form */}
                                    <form action="" method="post">
                                        <div className="flex flex-col gap-4">
                                            {/* foto */}
                                            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                                <Label>
                                                    Photo
                                                </Label>
                                                <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-2">

                                                    {/* preview */}
                                                    <img
                                                        src="https://source.unsplash.com/random/200x200?face"
                                                        alt="Preview"
                                                        className="h-24 w-24 rounded-xl border border-gray-300/50 object-cover"
                                                    />
                                                    <Input
                                                        type="file"
                                                        className="col-span-2 w-full"
                                                    />
                                                </div>
                                            </div>

                                            {/* nama user */}
                                            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                                <Label>
                                                    Name
                                                    <span className="text-destructive">
                                                        *
                                                    </span>
                                                </Label>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter name"
                                                    className="col-span-2 w-full"
                                                />
                                            </div>

                                            {/* username */}
                                            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                                <Label>
                                                    Username
                                                    <span className="text-destructive">
                                                        *
                                                    </span>
                                                </Label>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter username"
                                                    className="col-span-2 w-full"
                                                />
                                            </div>

                                            {/* email */}
                                            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                                <Label>
                                                    Email
                                                    <span className="text-destructive">
                                                        *
                                                    </span>
                                                </Label>
                                                <Input
                                                    type="email"
                                                    placeholder="Enter email"
                                                    className="col-span-2 w-full"
                                                />
                                            </div>

                                            {/* password */}
                                            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                                <Label>
                                                    Password
                                                    <span className="text-destructive">
                                                        *
                                                    </span>
                                                </Label>
                                                <Input
                                                    type="password"
                                                    placeholder="Enter password"
                                                    className="col-span-2 w-full"
                                                />
                                            </div>

                                            {/* konfirmasi password */}
                                            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                                <Label>
                                                    Confirm Password
                                                    <span className="text-destructive">
                                                        *
                                                    </span>
                                                </Label>
                                                <Input
                                                    type="password"
                                                    placeholder="Re-enter password"
                                                    className="col-span-2 w-full"
                                                />
                                            </div>

                                            {/* role */}
                                            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                                <Label>
                                                    Role
                                                    <span className="text-destructive">
                                                        *
                                                    </span>
                                                </Label>

                                                <Select>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Theme" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem value="role">
                                                                roles
                                                            </SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* border */}
                                <div className="border-t border-gray-400/30" />

                                {/* button */}
                                <div className="flex justify-end gap-2">
                                    {/* simpan */}
                                    <Button className="">Save</Button>

                                    {/* batal */}
                                    <a href="/users">
                                        <Button variant="outline" className="">
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

CreateUser.layout = {
    breadcrumbs: [
        {
            title: 'Create User',
            href: '#',
        },
    ],
};
