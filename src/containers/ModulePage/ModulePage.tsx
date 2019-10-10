import React from 'react';
import Module1 from '../../components/Module/Module1';

type moduleProps = {
    id:number,
    name:string
}

const ModulePage: React.FC<moduleProps> = (props: moduleProps) => {

    return (
        <div>
            <Module1></Module1>
        </div>
    );
}

export default ModulePage;