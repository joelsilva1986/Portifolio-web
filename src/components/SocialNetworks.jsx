import {FaLinkedinIn, FaGithub} from 'react-icons/fa';

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
    {
        name: "linkedin", 
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/joel-archanjo"
    },
    {
        name: "github", 
        icon: <FaGithub />,
        link: "https://github.com/joelsilva1986"
    }
]

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a 
                    href={network.link} 
                    className="social-btn" 
                    id={network.name} 
                    key={network.name}>
                        {network.icon}
                </a>
            ))}
    </section>
    )
};

export default SocialNetworks;