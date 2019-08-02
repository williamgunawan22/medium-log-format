class MyProgram {
    constructor() {
        this.TAG="MyProgram:";
        // this.TAG=this.constructor.name + ":"; // or you can use this
    }

    boot() {
        console.log(this.TAG, "process a");
        console.log(this.TAG, "process b");
        console.log(this.TAG, "process c");
    }

    openFile(filePath) {
        console.log(this.TAG, "path", filePath);
    }

    newTab() {
        console.log(this.TAG, "open tab");
    }

    search(keyword) {
        console.log(this.TAG, "keyword is", keyword);
    }

    viewDetail() {
        console.log(this.TAG, "open detail");
    }

    closeTab(tabIndex) {
        console.log(this.TAG, "tab index", tabIndex);
    }

    shutDown() {
        console.log(this.TAG, "turn off x");
    }
}

let program = new MyProgram();
program.boot();
program.openFile("myfile.txt");
program.newTab();
program.search("new food");
program.viewDetail();
program.closeTab(0);
program.shutDown();