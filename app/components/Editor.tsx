import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const EditorComp = dynamic(() => import('./Molecules/EditorComponent'), { ssr: false })

const markdown = `
# Are you ready to lay down your thoughts?
`
export default function Editor() {
  return (
    
      <div className=' flex h-screen w-1/2 p-4 shadow-md border-2'>
        <Suspense fallback={null}>
          <EditorComp markdown={markdown} />
        </Suspense>
      </div>
    
    
  )
}