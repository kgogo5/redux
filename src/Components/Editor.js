import React, { useState, useEffect } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import axios from "axios";

function MyEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [filesState, setFiles] = useState(null);

  const [title, setTitle] = useState(0);

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
    filesData.append(
      "image",
      filesState.filesState,
      filesState.filesState.name
    );
    axios
      .post("주소", filesData)
      .then((ref) => {
        return console.log(ref);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    document.title = `클릭 횟수 ${title}번 사이트`;
  });

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
      </form>
      <br />
      <button onClick={() => setTitle(title + 1)}>title change button</button>
    </>
  );
}

export default MyEditor;
