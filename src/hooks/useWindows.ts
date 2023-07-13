import {create,SetState} from 'zustand';

interface Window{
    id:string;
    isOpen:boolean;
    isMinimized:boolean;
    onMinimize:() => void;
    onQuit:() => void;
    onOpen:() => void;
    onClose:() => void;
}

interface WindowStore{
    windows: Window[]
}

const useWindows = create<WindowStore>(set => {

    class Window{
        constructor(id:string){
            this.id = id;
        }

        id:string;
        isOpen:boolean;
        isMinimized:boolean;
        onMinimize():void{
            set((state) => ({ windows: state.windows.map((window) => window.id === this.id ? { ...window, isMinimized: true } : window) }))
        }
        onQuit():void{
            set((state) => ({ windows: state.windows.map((window) => window.id === this.id ? { ...window, isMinimized: false } : window) }))
        }
        onOpen():void{
            set((state) => ({ windows: state.windows.map((window) => window.id === this.id ? { ...window, isOpen: true } : window) }))
        }
        onClose():void{
            set((state) => ({ windows: state.windows.map((window) => window.id === this.id ? { ...window, isOpen: false } : window) }))
        }
    }

    return({
        windows:[
            new Window('resume'),
            new Window('about'),
            new Window('skills')
        ]
    })
})

export default useWindows;