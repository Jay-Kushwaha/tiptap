import { useState } from "react";
import Tiptap from "../Tiptap"
import ShowPost from "./ShowPost";

const NewPost = () => {
    const[htmlContent, setHtmlContent] = useState('');
    const handleEditorContentSave =(html)=>{
          
        setHtmlContent(html);

        // call the api form here for backend use
    }
    return (
      <div>
         <Tiptap onEditorContentSave={handleEditorContentSave}></Tiptap>
         <hr />
         <ShowPost content={htmlContent}/>
      </div>
    )
  }
  
  export default NewPost