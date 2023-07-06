"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Code from "@tiptap/extension-code";
import Image from "@tiptap/extension-image";
import { useCallback } from "react";

Image.configure({
  inline: true,
  HTMLAttributes: {
    class: "w-full",
  },
});

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Code, Image],
    content: `
        <p>Hello World! 🌎️</p>
        <code>const a = "abc"</code>
        <img src="https://source.unsplash.com/random/800x600" />
    `,
  });
  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  return (
    <div>
      <button onClick={addImage} className="px-4 py-2 bg-slate-900 text-white">
        Add Image
      </button>
      <div
        className="w-full h-96 overflow-auto border-gray-400 border-2"
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          if (!(e.dataTransfer && e.dataTransfer.files.length > 0)) return;

          const file = e.dataTransfer?.files[0];
          console.log(file);
        }}
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
