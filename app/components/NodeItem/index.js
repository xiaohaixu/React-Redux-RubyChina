/**
 * Created by Bonnie on 20/06/17.
 */
import React from 'react';
import 'public/styles/homepage.css';

export default class NodeItem extends React.PureComponent {
    render(){
        return(
            <div className="node-item">
                <label>Ruby</label>
                <div className="node-data">
                    Rails
                </div>
            </div>
        )
    }
}