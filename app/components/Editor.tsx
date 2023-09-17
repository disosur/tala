import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const EditorComp = dynamic(() => import('./Molecules/EditorComponent'), { ssr: false })

const markdown = `
# Are you ready to lay down your thoughts?
`
export default function Editor() {
  return (
    
      <div className=' flex max-h-full min-h-[60rem] w-1/2 min-w-[26rem] p-4 shadow-md border-2'>
        <Suspense fallback={null}>
          <EditorComp markdown={markdown} />
        </Suspense>
      </div>
    
  )
}