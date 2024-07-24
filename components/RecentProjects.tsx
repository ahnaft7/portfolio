import { projects } from '@/data'
import React from 'react'

const RecentProjects = () => {
  return (
    <div className="py-20">
        <h1 className="heading">
            Here are some of my {' '}
            <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap item-center justify-center p-4 gap-16 mt-10">
            {projects.map(({id, title, des, img, iconLists, link }) => (
                <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                    {title}
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects