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
            image:'https://i.imgur.com/TvfzTOo.jpg',
            color: '#000e61'
        },
        {
            image:'https://i.imgur.com/MLEY0DH.jpg',
            color: '#2f2f30'
        },
        {
            image:'https://i.imgur.com/aMr5CGQ.jpg',
            color: '#b38697'
        },
        {
            image:'https://i.imgur.com/uKy0lQx.jpg',
            color: '#232727'
        },
        {
            image:'https://i.imgur.com/wOjcwsg.jpg',
            color: '#0c378f'
        },
        {
            image:'https://i.imgur.com/mU58jWA.jpg',
            color: '#199838'
        },
        {
            image:'https://i.imgur.com/4nPIv6h.jpg',
            color: '#332820'
        },
    ],
    currentTheme: {
        image:'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        color: '#3b0764'
    },
    changeTheme:(index) => set((state) => ({ currentTheme: state.themes[index]}))
}));

export default useDesktopTheme;