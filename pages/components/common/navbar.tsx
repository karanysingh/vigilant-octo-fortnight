
export const Navbar = () => {

    const menus = [
        {
            title: "dashboard",
            link: "/dashboard"
        },
        {
            title: "Login",
            link: "/login"
        },
    ]

    return (
        <div className="fixed top-0 w-full flex justify-between h-[100px] bg-white items-center text-primary">
            <div>
                <div className="gap-2 flex justify-center items-center px-4 py-2 text-2xl font-semibold">{"</> "}Codely</div>
            </div>
            <div className="flex justify-center items-center font-medium gap-2 mx-2 uppercase">
                {
                    menus.map((ele, index) => (<a className="px-4 py-1 hover:text-green-300" key={index} href={ele.link}>
                        <div >{ele.title}</div></a>
                    ))
                }
            </div>

        </div>
    )
}