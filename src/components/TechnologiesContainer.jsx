import { 
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
} from 'react-icons/di'

import {SiTypescript} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'

import '../styles/components/technologiesContainer.sass'

const technologies = [
    {id:"html", name:"HTML5", icon: <DiHtml5 />},
    {id:"css", name:"CSS3", icon: <DiCss3 />},
    {id:"js", name:"Javascript", icon: <DiJsBadge />},
    {id:"react", name:"ReactJS", icon: <DiReact />},
    {id:"typescript", name:"Typescript", icon: <SiTypescript />},
    {id:"next", name:"NextJS", icon: <TbBrandNextjs />},
];

const TechnologiesContainer = () => {
    return <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) =>(
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    </section>
}

export default TechnologiesContainer