import React from 'react';
import { BellIcon } from '@heroicons/react/outline'
import Search from './Search';
import Filter from './Filter';

function Feed() {
    return (
        <div >

            {/* Title bar */}
            <div className="flex items-center justify-center
            sm:justify-between py-3 px-3 sticky z-50">
                <h1 className="font-bold mr-auto ">MY LIST</h1>
                <div className="flex space-x-7 items-center justify-center">
                    <h3>DARK MODE</h3>
                    <BellIcon className="hidden xl:inline h-5 rounded-full cursor-pointer"/>

                    {/* Profile */}
                    <div className="flex items-center justify-center hoverAnimation xl:mr-auto">
                        <div className="hidden xl:inline mr-2">
                            <p className="text-gray-600 text-xs">Hey, Chuck</p>
                        </div>
                        <img src="https://yt3.ggpht.com/yti/APfAmoEgs3lBTwnbXAPAGWfhK2F52wnmE2bDPSxNxKW1-g=s88-c-k-c0x00ffffff-no-rj-mo"
                         alt=""
                         className="hidden md:inline h-8 w-8 rounded-full border-2 border-black" />
                    </div>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="sm:inline sm:py-2 md:inline-flex items-center py-3 ml-5">
                <Search />
                
                <Filter className="mr-auto"/>
                
            </div>

            
            
        </div>
    )
}

export default Feed
