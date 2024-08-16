export default function Button({children, ...props}){
    return <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white
    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full" {...props}>{children}</button>
}