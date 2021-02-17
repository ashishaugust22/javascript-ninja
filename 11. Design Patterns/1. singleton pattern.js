// implement Process Manager 

// as process manager can only be one


const Singleton = (
    function () {
        function ProcessManager () {
            this.count = 0;
        }

        let pManager;

        function createProcessManager () {
            pManager = new ProcessManager();
            return pManager;
        }

        return {
            getProcessManager: function () {
                if (!pManager)
                    pManager = createProcessManager();
                return pManager;
            }
        };
    }
)();

const pManager1 = Singleton.getProcessManager();
const pManager2 = Singleton.getProcessManager();


console.log(pManager1 === pManager2);