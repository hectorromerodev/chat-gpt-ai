import NewChat from "@/app/components/NewChat";

function SideBar() {
    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="">
                <div className="flex-1">
                    <div>
                        <NewChat />

                        <div>
                            {/*Module Selection*/}
                        </div>

                        {/*Map through the ChatRows*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar