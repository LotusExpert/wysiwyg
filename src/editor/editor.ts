import { Toolbar } from "./toolbar";
import { EditorArea } from "./editor-area";

export class Editor {

    private editorNode: Element;
    public editorArea: EditorArea;
    public toolbar: Toolbar;
    // private sourceArea: Element;

    constructor(private eNode: Element){
        this.editorNode = eNode;
        this.editorArea = new EditorArea();
        this.toolbar = new Toolbar();
    }

    public init(): void {
      document.execCommand("defaultParagraphSeparator", false, "br");

      this.editorNode.appendChild(this.toolbar.ToolbarElement);
      this.editorNode.appendChild(this.editorArea.EditorAreaElement);
    }
}
