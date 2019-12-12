import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const withCustomScroll = WrappedComponent => {
    return class extends React.Component{
        render(){            
            return(
                <div className={`col-12 col-md-6 p-0 right-side overflow-hidden`}>
                    {
                        (window.innerWidth > 767) ?
                            <Scrollbars renderThumbVertical={() => <div className="rounded" style={{backgroundColor: 'rgb(184, 162, 255)'}} />}>
                                <div className="p-3">
                                    <WrappedComponent {...this.props} />
                                </div>
                            </Scrollbars> :
                            <div className="py-3 px-2">
                                <WrappedComponent {...this.props} />
                            </div>
                    }
                </div>
            );
        }
    }
}

export default withCustomScroll;
