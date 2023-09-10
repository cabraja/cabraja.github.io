import {create} from 'zustand'

interface DesktopThemeStore{
    themes:Theme[];
    currentTheme:Theme;
    changeTheme:any;
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
            image:'https://images.unsplash.com/photo-1472803828399-39d4ac53c6e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2153&q=80',
            color: '#2f2f30'
        },
        {
            image:'https://images.unsplash.com/photo-1565099999544-27eca1cf8d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            color: '#ff80fa'
        },
        {
            image:'https://images.unsplash.com/photo-1586776977607-310e9c725c37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            color: '#232727'
        },
        {
            image:'https://images.unsplash.com/photo-1544371273-5464838150ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            color: '#0c378f'
        },
        {
            image:'https://images.unsplash.com/photo-1624644128945-920c0da6931b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            color: '#199838'
        },
        {
            image:'https://images.unsplash.com/photo-1499241142330-28701ea87ff4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
            color: '#332820'
        },
        {
            image:'https://images.unsplash.com/photo-1548268274-565207facb00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            color: '#242524'
        },
    ],
    currentTheme: {
        image:'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        color: '#3b0764'
    },
    changeTheme:(index) => set((state) => ({ currentTheme: state.themes[index]}))
}));

export default useDesktopTheme;