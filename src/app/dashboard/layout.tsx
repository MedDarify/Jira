


function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen">
            <div className="flex w-full h-full">
                <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">

                </div>
                <div
                    className=""
                >
                    <div className="mx-auto max-w-screen-2xl h-full">
                        <main className="h-full flex flex-col">
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;