import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/eu.jpg';

import "../styles/components/sidebar.sass";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Joel Silva" />
            <p className="title">Desenvolvedor Front-End Jr</p>
            <SocialNetworks />
            <InformationContainer />
            <a 
            href="Joel Curriculo Dev -2022.pdf" 
            download={'Joel Curriculo Dev -2022.pdf'}
            className="btn">
                Download currículo
            </a>
        </aside>
    );
};

export default Sidebar