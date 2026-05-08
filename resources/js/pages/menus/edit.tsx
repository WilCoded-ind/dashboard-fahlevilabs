import { Head } from '@inertiajs/react';
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

export default function EditteMenus() {
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
                            <BreadcrumbLink href="/users">
                                Menu Management
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Edit Menu</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* header */}
                <div className="">
                    <div>
                        <div className="mb-4">
                            <h1 className="text-2xl font-bold">
                                Add your new menu
                            </h1>
                            <span className="text-md text-gray-600/90">
                                Create a new menu to manage navigation in your
                                application.
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
                                        Form New Menu
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
                                    <div className="flex flex-col gap-4">
                                        {/* nama menu */}
                                        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                            <Label>
                                                Menu Name
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </Label>
                                            <Input
                                                type="text"
                                                placeholder="Enter menu name"
                                                className="col-span-2 w-full"
                                            />
                                        </div>

                                        {/* slug - otomatis fill */}
                                        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                            <Label>
                                                Slug
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </Label>
                                            <Input
                                                type="text"
                                                placeholder="Auto-generated slug"
                                                className="col-span-2 w-full"
                                                disabled
                                            />
                                        </div>

                                        {/* url */}
                                        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                            <Label>
                                                URL
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </Label>

                                            <div className="col-span-2 w-full">
                                                <div className="flex items-center gap-2">
                                                    <Input
                                                        type="text"
                                                        placeholder="Enter URL"
                                                    />
                                                </div>
                                                <span className="text-xs text-muted-foreground">
                                                    e.g. "users.index",
                                                    "roles.index", etc.
                                                </span>
                                            </div>
                                        </div>

                                        {/* parent */}
                                        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                            <Label>
                                                Parent
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </Label>
                                            <Input
                                                type="text"
                                                placeholder="Enter parent menu"
                                                className="col-span-2 w-full"
                                            />
                                        </div>

                                        {/* order */}
                                        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                            <Label>
                                                Order
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </Label>

                                            <Input
                                                type="number"
                                                placeholder="Enter menu order"
                                                className="col-span-2 w-full"
                                            />
                                        </div>

                                        {/* icon */}
                                        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                            <Label>
                                                Icon
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </Label>

                                            <div className="col-span-2 w-full">
                                                <div className="flex items-center gap-2">
                                                    <Input
                                                        type="text"
                                                        placeholder="Enter menu order"
                                                    />
                                                    <a
                                                        href="https://lucide.dev/icons/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Button variant="outline">
                                                            Browse Icons
                                                        </Button>
                                                    </a>
                                                </div>
                                                <span className="text-xs text-muted-foreground">
                                                    Use icon names from
                                                    lucide-react library, e.g.
                                                    "Home", "Settings", "User",
                                                    etc.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* border */}
                                <div className="border-t border-gray-400/30" />

                                {/* button */}
                                <div className="flex justify-end gap-2">
                                    {/* simpan */}
                                    <Button className="">Save</Button>

                                    {/* batal */}
                                    <a href="/menus">
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

EditteMenus.layout = {
    breadcrumbs: [
        {
            title: 'Menu Management',
            href: '/menus/create',
        },
    ],
};
