import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
type Theme='light'|'dark';
const ThemeContext=createContext({theme:'light' as Theme,toggle:()=>{}});
export function ThemeProvider({children}:{children:ReactNode}){const [theme,setTheme]=useState<Theme>('light');useEffect(()=>{const saved=localStorage.getItem('theme') as Theme|null;const next=saved??(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');setTheme(next);document.documentElement.classList.toggle('dark',next==='dark')},[]);const toggle=()=>setTheme(t=>{const n=t==='dark'?'light':'dark';document.documentElement.classList.toggle('dark',n==='dark');localStorage.setItem('theme',n);return n});return <ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>};
export const useTheme=()=>useContext(ThemeContext);
