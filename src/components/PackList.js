import React, {PureComponent} from 'react';
import Pack from "./Pack";

export default class PackList extends PureComponent{

    render(){
        const packElement=this.props.packs.map((pack)=>
       
            <Pack
                pack={pack}
                key={pack.id}
            />  
        )

        return(
            <div className="pack-list">
                {packElement}
            </div>
        )
    }
}