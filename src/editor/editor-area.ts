export class EditorArea {

  public EditorAreaElement: Element;

  constructor() {
    this.EditorAreaElement = document.createElement('div');
    this.EditorAreaElement.id = 'wysiwyg_area';
    this.EditorAreaElement.setAttribute('contentEditable', 'true');
  }
}
