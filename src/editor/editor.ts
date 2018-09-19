import { Toolbar } from "../toolbar/toolbar";
import { EditorArea } from "./editor-area";
import { Config } from "../config/config";

export class Editor {

    private editorNode: Element;
    public editorArea: EditorArea;
    public toolbar: Toolbar;

    constructor(private eNode: Element){
        this.editorNode = eNode;
        this.editorArea = new EditorArea();
        this.toolbar = new Toolbar();
    }

    public init(config?: Config): void {
      if(config != null) this.toolbar.createToolbarButtons(config);
      this.editorNode.appendChild(this.toolbar.ToolbarElement);
      this.editorNode.appendChild(this.editorArea.EditorAreaElement);
    }
}
