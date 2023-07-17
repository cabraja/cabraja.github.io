import {create} from 'zustand';

interface ProjectsWindowStore{
    isOpen:boolean;
    isMinimized:boolean;
    onMinimize:() => void;
    onQuit:() => void;
    onOpen:() => void;
    onClose:() => void;
}

const useProjectsWindow = create<ProjectsWindowStore>(set => ({
    isOpen:false,
    isMinimized:false,
    onMinimize:() => set({isMinimized:true}),
    onQuit:() => set({isMinimized:false}),
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useProjectsWindow;