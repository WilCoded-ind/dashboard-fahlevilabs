// import
import type {
    ColumnDef,
    SortingState,
    VisibilityState,
} from '@tanstack/react-table';
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';

import { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// pagination meta
interface Meta {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
}

// interface props
interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    meta: Meta;
}

// export
export function DataTable<TData, TValue>({
    columns,
    data,
    meta,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [search, setSearch] = useState('');
    const [perPage, setPerPage] = useState(meta.per_page);

    // debounce search
    useEffect(() => {
        const timeout = setTimeout(() => {
            router.get(
                window.location.pathname,
                { search, per_page: perPage, page: 1 },
                { preserveState: true, replace: true },
            );
        }, 400);
        return () => clearTimeout(timeout);
    }, [search]);

    const table = useReactTable({
        data,
        columns,
        state: { sorting, columnVisibility },
        onSortingChange: setSorting,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        manualSorting: true,
        manualFiltering: true,
        pageCount: meta.last_page,
    });

    return (
        <div className="space-y-4">
            {/* toolbar */}
            <div className="flex items-center justify-between">
                {/* show entries */}
                <div className="flex items-center gap-2">
                    <span className="text-sm">Show</span>
                    <Select
                        value={String(perPage)}
                        onValueChange={(val) => {
                            const newPerPage = Number(val);
                            setPerPage(newPerPage);
                            router.get(
                                window.location.pathname,
                                { search, per_page: newPerPage, page: 1 },
                                { preserveState: true, replace: true },
                            );
                        }}
                    >
                        <SelectTrigger className="w-17 border-dark bg-muted" size="sm">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {[10, 20, 30, 40, 50].map((size) => (
                                <SelectItem key={size} value={String(size)}>
                                    {size}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <span className="text-sm">entries</span>
                </div>

                {/* search */}
                <div className='grid grid-cols-2 gap-2 items-center'>
                    <span className='text-right text-base text-muted-foreground '>Search :</span>
                    <Input
                        placeholder="..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="max-w-sm"
                    />
                </div>
            </div>

            {/* table */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef.header,
                                                  header.getContext(),
                                              )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* footer */}
            <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                    {meta.total === 0
                        ? 'No entries'
                        : `Showing ${meta.from} to ${meta.to} of ${meta.total} entries`}
                </span>

                {/* pagination */}
                <div className="flex items-center gap-1">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                            router.get(
                                window.location.pathname,
                                { search, per_page: perPage, page: 1 },
                                { preserveState: true, replace: true },
                            )
                        }
                        disabled={meta.current_page === 1}
                    >
                        «
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                            router.get(
                                window.location.pathname,
                                { search, per_page: perPage, page: meta.current_page - 1 },
                                { preserveState: true, replace: true },
                            )
                        }
                        disabled={meta.current_page === 1}
                    >
                        ‹
                    </Button>

                    {Array.from({ length: meta.last_page }, (_, i) => (
                        <Button
                            key={i}
                            variant={meta.current_page === i + 1 ? 'default' : 'outline'}
                            size="sm"
                            onClick={() =>
                                router.get(
                                    window.location.pathname,
                                    { search, per_page: perPage, page: i + 1 },
                                    { preserveState: true, replace: true },
                                )
                            }
                        >
                            {i + 1}
                        </Button>
                    ))}

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                            router.get(
                                window.location.pathname,
                                { search, per_page: perPage, page: meta.current_page + 1 },
                                { preserveState: true, replace: true },
                            )
                        }
                        disabled={meta.current_page === meta.last_page}
                    >
                        ›
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                            router.get(
                                window.location.pathname,
                                { search, per_page: perPage, page: meta.last_page },
                                { preserveState: true, replace: true },
                            )
                        }
                        disabled={meta.current_page === meta.last_page}
                    >
                        »
                    </Button>
                </div>
            </div>
        </div>
    );
}
