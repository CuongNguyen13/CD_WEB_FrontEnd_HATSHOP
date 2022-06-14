import React, { Component } from 'react';
import { FacebookProvider, Comments } from 'react-facebook';
class componentName extends Component {

    render() {
        return (
            <div>
                <FacebookProvider appId="337222631900373">
                      <Comments href="http://www.facebook.com" />
                </FacebookProvider>
            </div>
        );
    }
}

export default componentName;