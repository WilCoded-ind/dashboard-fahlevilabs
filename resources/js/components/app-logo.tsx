export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center md:size-10">
                <img src="/images/logo-02.png" alt="FahleviLabs" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="pt-1 truncate leading-tight font-semibold">
                    <span className="text-primary">Fahlevi&nbsp;  
                    </span>
                    Dashboard Kit
                </span>
            </div>
        </>
    );
}
