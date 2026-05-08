import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function CreateRole() {
    // handle form
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        initials: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/roles');
    };

    return (
        <>
            <Head title="Create Role" />
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
                            <BreadcrumbLink href="/users">
                                Role & Permission
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Create New Role</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* header */}
                <div className="">
                    <div>
                        <div className="mb-4">
                            <h1 className="text-2xl font-bold">
                                Add your new role
                            </h1>
                            <span className="text-md text-gray-600/90">
                                Create and manage your application's roles for
                                better access control and security.
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
                                        Form New Role
                                    </h1>
                                    <span className="text-sm text-muted-foreground">
                                        Fields marked with{' '}
                                        <span className="text-destructive">
                                            *
                                        </span>{' '}
                                        are required
                                    </span>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="pt-6">
                                        {/* form */}
                                        <div className="flex flex-col gap-4">
                                            {/* nama role */}
                                            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                                <Label>
                                                    Role Name
                                                    <span className="text-destructive">
                                                        *
                                                    </span>
                                                </Label>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter role name"
                                                    className="col-span-2 w-full"
                                                    value={data.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                />

                                                {/* error */}
                                                {errors.name && (
                                                    <p className="text-sm text-destructive">
                                                        {errors.name}
                                                    </p>
                                                )}
                                            </div>

                                            {/* initials */}
                                            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                                <Label>
                                                    Initials
                                                    <span className="text-destructive">
                                                        *
                                                    </span>
                                                </Label>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter initials (e.g., admin, editor)"
                                                    className="col-span-2 w-full"
                                                    value={data.initials}
                                                    onChange={(e) => setData('initials', e.target.value)}
                                                />

                                                {/* error */}
                                                {errors.initials && (
                                                    <p className="text-sm text-destructive">
                                                        {errors.initials}
                                                    </p>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                </form>
                                {/* border */}
                                <div className="border-t border-gray-400/30" />

                                {/* button */}
                                <div className="flex justify-end gap-2">
                                    {/* simpan */}
                                    <Button type="submit" disabled={processing}>Save</Button>

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

                {/* body */}
            </div>
        </>
    );
}

CreateRole.layout = {
    breadcrumbs: [
        {
            title: 'Create Role',
            href: '#',
        },
    ],
};
