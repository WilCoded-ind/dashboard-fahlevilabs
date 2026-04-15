import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { Card } from '@/components/ui/card';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard"/>
            <div className="max-w-8xl overflow-x-auto rounded-xl p-4 md:p-8">
                {/* breadcrumbs */}
                <div>
                        {/* breadcrumbs */}
                </div>


                {/* header */}
                <div className="mb-4">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                </div>


                {/* body */}
                <div>
                    <Card className="w-full p-4 py-4">
                        Selamat datang di dashboard!
                    </Card>
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
