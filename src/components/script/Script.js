import React, { Component } from 'react';
import '../script/Script.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare} from '@fortawesome/free-solid-svg-icons'

class Script extends Component {
    render() {
        return(
            <div className="your-script">
                <h1>Girugascript 1's Summary</h1>
                <hr></hr>
                <div className="summary">
                    <div className="summary-option">
                        <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'orange' }} size="2x" />
                        <h3 className="thinga">Node</h3>
                    </div>
                    <div className="summary-option">
                        <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'orange' }} size="2x" />
                        <h3 className="thinga">Python</h3>
                    </div>
                    <div className="summary-option">
                        <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'orange' }} size="2x" />
                        <h3 className="thinga">Golang</h3>
                    </div>
                    <div className="summary-option">
                        <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'orange' }} size="2x" />
                        <h3 className="thinga">Rust</h3>
                    </div>
                    <div className="summary-option">
                        <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'orange' }} size="2x" />
                        <h3 className="thinga">Ruby</h3>
                    </div>
                    <div className="summary-option">
                        <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'orange' }} size="2x" />
                        <h3 className="thinga">Iterm2</h3>
                    </div>
                    <div className="summary-option">
                        <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'orange' }} size="2x" />
                        <h3 className="thinga">Friendly Interactive Shell</h3>
                    </div>
                    <div className="summary-option">
                        <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'orange' }} size="2x" />
                        <h3 className="thinga">Firefox</h3>
                    </div>
                    <div className="summary-option">
                        <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'orange' }} size="2x" />
                        <h3 className="thinga">Atom</h3>
                    </div>

                </div>
            </div>
        );
    }
}

export default Script;