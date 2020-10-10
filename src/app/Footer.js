import React from 'react';
import Link from '../components/Link';

const Footer = () => {
    const source = "https://pt.wikipedia.org/wiki/Elei%C3%A7%C3%A3o_municipal_de_S%C3%A3o_Paulo_em_2020";

    return <div className="Footer">
        <small>
            Fonte: <Link href={source} newWindow={true}>https://pt.wikipedia.org</Link>
        </small>
        <br />
        <small>
            Feito por <Link href="https://www.linkedin.com/in/igorminotto/" newWindow={true}>Igor Minotto</Link>
        </small>
    </div>;
}

export default Footer;