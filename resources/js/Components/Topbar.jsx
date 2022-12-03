import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

library.add(faGithub);

export default function Topbar({...props}) {
    return (
        <div className="topbar">
            <div className="topcontent">
                <a href="https://github.com/xurape/">
                    Visit my <span>GitHub</span> <FontAwesomeIcon icon="fab fa-github" />
                </a>
            </div>
        </div>
    )
}