'use client'
export default function Button(){
    return <div>
        <button className="bg-blue-500 px-4 py-1" onClick={()=> console.log('Click me here')}>Click Me</button>
    </div>
}