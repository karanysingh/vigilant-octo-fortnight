import clsx from "clsx"
import { useState } from "react"
export const Sidebar = () => {
    const [selected, setSelected] = useState("home")
    const menus = [
        {
            title: "home",
            key: "home"
        },
        {
            title: "dashboard",
            key: "dashboard"
        },
        {
            title: "Login",
            key: "login"
        }
    ]
    return (<div className="bg-white h-[100vh] left-0 w-[20%] border border-r-primary/0.5 px-4 py-8">
        <div className="font-bold text-4xl text-primary mb-10">
            {"</> Codely"}
        </div>
        <div className="text-secondary">
            Menus
        </div>
        <hr className="border-0.5 border-primary/0.7 w-full px-2 my-4"></hr>
        <div className="">
            {
                menus.map((ele, index) => (
                    <div
                        onClick={() => setSelected(ele.key)}
                        className={clsx("font-medium px-4 py-3  cursor-pointer duration-240 ease-in-out capitalize w-full my-4 rounded-lg ", selected == ele.key ? "bg-primary hover:bg-primary text-white" : "text-secondary  hover:bg-green-50")} key={index}>{ele.title}</div>))
            }
        </div>
    </div>)
}