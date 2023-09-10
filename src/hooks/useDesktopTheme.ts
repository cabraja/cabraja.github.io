import {create} from 'zustand'

interface DesktopThemeStore{
    themes:Theme[];
    currentTheme:Theme;
    changeTheme:() => void;
}

interface Theme{
    image:string;
    color:string;
}

const useDesktopTheme = create<DesktopThemeStore>(set => ({
    themes:[
        {
            image:'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
            color: '#3b0764'
        },
        {
            image:'https://images.unsplash.com/photo-1576502200916-3808e07386a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80',
            color: '#0ec2f1'
        }
    ],
    currentTheme: {
        image:'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        color: '#3b0764'
    },
    changeTheme:() => set({currentTheme:{
        image:'https://images.unsplash.com/photo-1576502200916-3808e07386a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80',
        color: '#0ec2f1'
    }})
}));

export default useDesktopTheme;