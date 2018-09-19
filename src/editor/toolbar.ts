export class Toolbar {

  public ToolbarElement: Element;

  constructor() {
    this.ToolbarElement = document.createElement('div');
    this.ToolbarElement.id = 'wysiwyg_toolbar';
  //  this.bold('B');
    this.createToolbarButton('B', 'bold');
    this.createToolbarButton('H1', 'h1');

  }

/*   private bold(caption: string) {
    const button = document.createElement('button');
    button.classList.add('bold');
    button.innerText = caption;
    button.onclick = () => {
      this.toggleBold();
    }
    this.ToolbarElement.appendChild(button);

  } */

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

/*
  private hardCodedImage(caption: string) {
    const imgUrl = 'https://qph.fs.quoracdn.net/main-qimg-938d4619ade43560eec771b8f991e18a-c';
    const button = document.createElement('button');
    button.classList.add('hard-code-image');
    button.innerText = caption;
    this.ToolbarElement.appendChild(button);
  }

  private toggleBold() {
    document.execCommand('bold', true, null);
  } */
}
