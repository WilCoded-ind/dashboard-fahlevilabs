import { Head, useForm } from '@inertiajs/react';
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
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

type MenuOption = {
    id: number;
    name: string;
};

type PaginatedMenus = {
    data: MenuOption[];
};

const STANDALONE_PARENT = 'standalone';

const createSlug = (value: string) =>
    value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

export default function CreateMenus({ parent }: { parent: PaginatedMenus }) {
    // handle form
    const { data, setData, post, processing, transform } = useForm({
        name: '',
        slug: '',
        url: '',
        parent_id: STANDALONE_PARENT,
        order: '',
        icon: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        transform((data) => ({
            ...data,
            parent_id:
                data.parent_id === STANDALONE_PARENT ? null : data.parent_id,
        }));
        post('/menus');
    };

    const handleNameChange = (value: string) => {
        setData((data) => ({
            ...data,
            name: value,
            slug: createSlug(value),
        }));
    };

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
                            <BreadcrumbPage>Create New Menu</BreadcrumbPage>
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

                                {/* form */}
                                <form onSubmit={handleSubmit}>
                                    <div className="pt-6">
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
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        handleNameChange(
                                                            e.target.value,
                                                        )
                                                    }
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
                                                    value={data.slug}
                                                    readOnly
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
                                                            value={data.url}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'url',
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
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
                                                <Select
                                                    value={data.parent_id}
                                                    onValueChange={(value) =>
                                                        setData(
                                                            'parent_id',
                                                            value,
                                                        )
                                                    }
                                                >
                                                    <SelectTrigger className="col-span-2 w-full">
                                                        <SelectValue placeholder="Select parent menu" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem
                                                            value={
                                                                STANDALONE_PARENT
                                                            }
                                                        >
                                                            - Standalone -
                                                        </SelectItem>
                                                        {parent.data.map((menu) => (
                                                            <SelectItem
                                                                key={menu.id}
                                                                value={String(
                                                                    menu.id,
                                                                )}
                                                            >
                                                                {menu.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
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
                                                    value={data.order}
                                                    onChange={(e) =>
                                                        setData(
                                                            'order',
                                                            e.target.value,
                                                        )
                                                    }
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
                                                            value={data.icon}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'icon',
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
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
                                                        lucide-react library,
                                                        e.g. "Home", "Settings",
                                                        "User", etc.
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
                                        <Button
                                            type="submit"
                                            disabled={processing}
                                        >
                                            Save
                                        </Button>

                                        {/* batal */}
                                        <a href="/menus">
                                            <Button
                                                variant="outline"
                                                className=""
                                            >
                                                Cancel
                                            </Button>
                                        </a>
                                    </div>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* body */}
            </div>
        </>
    );
}

CreateMenus.layout = {
    breadcrumbs: [
        {
            title: 'Menu Management',
            href: '/menus/create',
        },
    ],
};
