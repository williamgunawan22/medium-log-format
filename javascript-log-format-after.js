class MyProgram {
    constructor() {
        this.TAG = "MyProgram:";
        // this.TAG=this.constructor.name + ":"; // or you can use this
    }

    boot() {
        console.log(this.TAG, "boot -", "process a");
        console.log(this.TAG, "boot -", "process b");
        console.log(this.TAG, "boot -", "process c");
    }

    openFile(filePath) {
        console.log(this.TAG, "openFile -", "path", filePath);
    }

    newTab() {
        console.log(this.TAG, "newTab -", "open tab");
    }

    search(keyword) {
        console.log(this.TAG, "search -", "keyword is", keyword);
    }

    viewDetail() {
        console.log(this.TAG, "viewDetail -", "trigger");
    }

    closeTab(tabIndex) {
        console.log(this.TAG, "closeTab -", "tab index", tabIndex);
    }

    shutDown() {
        console.log(this.TAG, "shutDown -", "turn off x");
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