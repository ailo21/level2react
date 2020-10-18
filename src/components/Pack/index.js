import React,{ PureComponent} from 'react';
import './style.css';

export default class Pack extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            selected: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log(this.props.pack.soldout);
        if(!this.props.pack.soldout){
            this.setState({ selected : !this.state.selected} );
        }
        
    }

    render(){
        const {pack}=this.props;
        const desc=pack.description.map((text, i)=>
            <span key={i}>{text}</span>
        )
        const packClass= pack.soldout ? "pack is-soldout"
                                      : this.state.selected ? "pack is-selected" : "pack";

        const bottomText=pack.soldout?<span>Печалька, с курой закончился.</span>
                                     : this.state.selected ? 
                                     <span>Головы щучьи с чесноком да свежайшая сёмгушка.</span>
                                     :<span>Чего сидишь? Порадуй котэ, <span className="pack_buy" onClick={this.handleClick}>купи</span></span>
        
        
        return(
                    <div key={pack.id} className={packClass}
                    onClick={this.handleClick}
                  
                    >
                        <div className="pack_header">
                            <span>{pack.header}</span>
                        </div>
                        <div className="pack_content">
                            <h4>{pack.title}</h4>
                            <span className="pack_postname">{pack.composition}</span>
                            <p>{desc}</p>
                            <div className="volume">
                                <div className="volume_lemgth">{pack.volume_langth}</div>
                                <div className="volume_unit">{pack.volume_unit}</div>
                            </div>
                        </div>
                        <div className="pack_bottom">
                            {bottomText}
                        </div>
                    </div>
        )
    }
}