import React, { Component } from 'react';

class componentName extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }


    initFacebookSDK() {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: "337222631900373",
                cookie: true,  // enable cookies to allow the server to access
                // the session
                xfbml: true,  // parse social plugins on this page
                version: 'v2.5' // use version 2.1
            });
        };
        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = `https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v14.0&appId=337222631900373&autoLogAppEvents=1`;
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }



        componentDidMount(){
            this.initFacebookSDK();
        }


    render() {
        let {dataHref} = this.props;
        return (
            <div>
                <h1>Bình luận</h1>
                 <div
                        className="fb-comments"
                        // data-href={dataHref}
                        data-href="http://facebook.com"
                        data-href="http://localhost"
                        data-width="100%"
                        data-numposts={5}
                />  
             </div>   
        );
    }
}

export default componentName;