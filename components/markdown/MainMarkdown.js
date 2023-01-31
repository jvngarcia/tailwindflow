import { useEffect } from "react"
import Prism from 'prismjs'
import "prismjs/themes/prism-tomorrow.css";
import 'prismjs/components/prism-jsx'

require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')


export default function MainMarkdown({ content }){

    useEffect(() => {
        Prism.highlightAll();
      }, []);
    
    return (
        <pre className="language-jsx h-full px-8 py-8 m-0 rounded-md" tabIndex="0">
            <code className="language-jsx">
                {content}
            </code>
        </pre>
    )
}