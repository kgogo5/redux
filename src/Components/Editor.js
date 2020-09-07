import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import Axios from "axios";

function MyEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [filesState, setFiles] = useState(null);

  // const FileList = () => {
  //   console.log(filesState);
  //   return (
  //     <ul>
  //       {filesState !== null
  //         ? filesState.map((e) => {
  //             return (
  //               <li>
  //                 <span>{e.name}</span>
  //                 <span>{e.lastModified}</span>
  //               </li>
  //             );
  //           })
  //         : null}
  //     </ul>
  //   );
  // };

  // 키보드 단축키 기능
  function handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  }

  // 버튼 클릭시 볼드
  function _onBoldClick() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  }

  function fileUpload(e) {
    setFiles({
      filesState: e.target.files[0],
    });
  }

  const fileSelectedHandler = () => {
    const filesData = new FormData();
    filesData.append("image", filesState.name, filesState.lastModified);
    console.log(filesState);
  };

  return (
    <>
      <button onClick={_onBoldClick}>Bold</button>
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={setEditorState}
      />
      <form method="post" encType="multipart/form-data">
        <input type="file" onChange={fileUpload} />
        <input type="button" value="추가하기" onClick={fileSelectedHandler} />
        {/* <FileList /> */}
      </form>
    </>
  );
}

export default MyEditor;
