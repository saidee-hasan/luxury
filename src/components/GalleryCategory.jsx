import React from 'react'

export default function GalleryCategory() {
  // Gallery categories data
  const categories = [
    { 
      title: "Full Gallery", 
      description: "Click to view full gallery",
      bgColor: "bg-black"
    },
    { 
      title: "Portraits", 
      description: "Click to view portraits gallery",
      bgColor: "bg-blue-400"
    },
    { 
      title: "Landscapes", 
      description: "Click to view landscapes gallery",
      bgColor: "bg-blue-900"
    },
    { 
      title: "Events", 
      description: "Click to view events gallery",
      bgColor: "bg-blue-600"
    },
    { 
      title: "Abstract", 
      description: "Click to view abstract gallery",
      bgColor: "bg-blue-800"
    }
  ];

  return (
    <div className='mt-20 text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  px-4'>
      {categories.map((category, index) => (
        <div 
          key={index}
          className={`h-48 ${category.bgColor} p-6 flex flex-col justify-center items-start cursor-pointer transition-transform hover:scale-105 hover:shadow-xl `}
          role="button"
          tabIndex={0}
          aria-label={`View ${category.title} gallery`}
        >
          <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-2'>
            {category.title}
          </h2>
          <p className='text-sm md:text-base opacity-90'>{category.description}</p>
        </div>
      ))}
    </div>
  )
}