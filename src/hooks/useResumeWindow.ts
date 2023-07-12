import {create} from 'zustand';

interface ResumeWindowStore{
    isOpen:boolean;
    onOpen:() => void;
    onClose:() => void;
}

const useResumeWindow = create<ResumeWindowStore>(set => ({
    isOpen:true,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})

}))

export default useResumeWindow;