import { useState } from "react"

const Section = ({ title, description, isVisible, setIsVisible }) => {

    return (
        <>
            <div className="border-2 border-black my-2 mx-5" >
                <div className=" flex ">
                    <div className="mr-10 text-2xl">
                        <div className=" text-3xl font-semibold">{title}</div>
                        {isVisible ? (<>
                            <p>{description}</p></>)
                            :
                            (<button className="bg-slate-400 " onClick={setIsVisible}>
                                Show
                            </button>)}
                    </div>
                </div>
            </div>
        </>
    )
}
const Contact = () => {
    const [isVisibleSection, setIsVisibleSection] = useState("name")
    return (
        <>
            <Section title={"What is this Project?"} description={"In a general food app built with React, concepts like Hooks, including useState for managing local state and useContext for accessing global data, are employed extensively. These Hooks facilitate tasks such as managing authentication status or user preferences. Additionally, the app likely utilizes the pattern of lifting state up to share state between components, allowing for efficient management of shared data like food items or shopping cart contents. Other React features such as useEffect for handling side effects and Router for managing client-side routing are also utilized, along with CSS frameworks for styling and potentially other libraries for additional functionality like authentication and data fetching."}
                isVisible={(isVisibleSection === 'project')} setIsVisible={() => setIsVisibleSection("project")}
            />
            <Section title={"Who made this project"} description={"Biraj Regmi, a passionate frontend developer, created the general food app using React, incorporating concepts such as Hooks, including useState and useContext, for managing local and global state, respectively. The app also employs the pattern of lifting state up to efficiently share data between components, alongside other React features like useEffect and Router for handling side effects and client-side routing. Additionally, CSS frameworks and potentially other libraries are utilized for styling and additional functionality."}
                isVisible={(isVisibleSection === 'name')} setIsVisible={() => setIsVisibleSection("name")}
            />
            <Section title={"What's the authors Github?"} description={"birajregmi7"}
                isVisible={(isVisibleSection === 'github')} setIsVisible={() => setIsVisibleSection("github")}

            />


        </>
    )
}
export default Contact