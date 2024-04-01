import styles from "./intro.module.css";
import { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default function Intro() {
    const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className={styles.container}>
        {isShowMore && (
       <p> expedita,</p>
         )}
        
       <button onClick={toggleReadMoreLess}>
         {isShowMore ? <div className={styles.click}>Read Less...</div> : <div className={styles.click}>ReadMore...</div>}
        </button>
        {/* ckeditor */}
        <div>
     <CKEditor
        editor={ ClassicEditor }
      />
  </div>
    </div>
  )
} 
