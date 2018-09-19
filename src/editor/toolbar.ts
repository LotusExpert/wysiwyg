export class Toolbar {

  public ToolbarElement: Element;

  constructor() {
    this.ToolbarElement = document.createElement('div');
    this.ToolbarElement.id = 'wysiwyg_toolbar';
    this.createToolbarButton('B', 'bold');
    this.createToolbarButton('H1', 'h1');

  }

  private createToolbarButton(caption: string, command: string): void {
    const button = document.createElement('button');
    button.innerText = caption;
    button.onclick = () => {
      this.executeCommand(command);
    }
    this.ToolbarElement.appendChild(button);
  }

  private executeCommand(command: string): void {
    console.log(command);
    switch(command) {
      case 'bold':
        document.execCommand('bold', false, null);
        break;
      case 'h1':
        document.execCommand('formatBlock', false, command);
        break;
      default:
    }
  }
}
