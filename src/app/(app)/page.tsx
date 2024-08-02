import React from 'react'
import colors from './css/colors'

const Page = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-background">
      <div className='flex flex-col items-center gap-10'>
        <h1 className='text-6xl text-foreground'>This is your App Theme</h1>
        <div className="flex gap-2 flex-wrap w-[70%] min-w-[300px] max-w-[700px]">
          {Object.entries(colors).map(([variableName, variable]) => (
            <div className="flex gap-1 items-center">
              <div
                style={{ backgroundColor: `hsl(var(${variable}))` }}
                className={` h-9 w-9 rounded-full border-white border-[1px] border-solid`}
              ></div>
              <div className="text-foreground">{variableName}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
