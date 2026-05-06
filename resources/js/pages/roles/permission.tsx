import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
    Table,
    TableHead,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function Permission() {
    return (
        <>
            <Head title="Permission Settings" />

            <div className="max-w-8xl overflow-x-auto rounded-xl p-4 md:p-8">
                {/* Breadcrumb */}
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
                            <BreadcrumbLink href="/roles">
                                Role & Permission
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />

                        <BreadcrumbItem>
                            <BreadcrumbPage>Permission Settings</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">
                        Manage Role Permissions
                    </h1>
                    <p className="text-md text-gray-600/90">
                        Configure access rights for each role to control what
                        users can view and perform within the application.
                    </p>
                </div>

                <div className="mb-4 border-t border-gray-400/70" />

                {/* Card */}
                <Card className="p-5 md:p-6">
                    {/* Title */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold">Permissions</h2>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Role:</span>
                            <span className="font-medium">Administrator</span>
                        </div>
                    </div>

                    {/* Table */}
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Menu</TableHead>
                                <TableHead>Create</TableHead>
                                <TableHead>Edit</TableHead>
                                <TableHead>Delete</TableHead>
                                <TableHead>View</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            <TableRow>
                                <TableCell className="font-bold">
                                    Administrator
                                </TableCell>
                                <TableCell>
                                    {/* <Checkbox /> */}
                                </TableCell>
                                <TableCell>
                                    {/* <Checkbox /> */}
                                </TableCell>
                                <TableCell>
                                    {/* <Checkbox /> */}
                                </TableCell>
                                <TableCell>
                                    {/* <Checkbox /> */}
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">
                                    Users
                                </TableCell>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">
                                    Roles
                                </TableCell>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-bold">
                                    Menu Management
                                </TableCell>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    {/* Footer */}
                    <div className="mt-6 flex justify-end gap-2 border-t border-gray-400/30 pt-4">
                        <Button>Save</Button>

                        <a href="/roles">
                            <Button variant="outline">Cancel</Button>
                        </a>
                    </div>
                </Card>
            </div>
        </>
    );
}

Permission.layout = {
    breadcrumbs: [
        {
            title: 'Permission Settings',
            href: '/roles/permission',
        },
    ],
};

