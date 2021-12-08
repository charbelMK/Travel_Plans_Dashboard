import Image from "next/image";
import SidebarLink from "./SidebarLink";

function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col items-center
        xl:items-start xl:w-[340px] p-2 fixed h-full">
            <div className="hidden sm:flex items-center justify-center w-14 h-14 
            hoverAnimation p-0 xl:ml-10">
                <Image src="https://cdn-icons-png.flaticon.com/512/6319/6319744.png" width={30} height={30}/>
            </div>
            <div className="space-y-3 mt-4 mb-2.5 xl:ml-10">
                <a href="/"><SidebarLink text="MY LIST" active/></a>
                <SidebarLink text="VISITED"/>
                <SidebarLink text="TO VISIT"/>
            </div>
        </div>
    );
}

export default Sidebar;
