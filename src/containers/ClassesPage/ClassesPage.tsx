import React from 'react';
import Classes from '../../components/Classes/Classes';

const ClassesPage: React.FC = () => {
    const curso: string = "curso de manejo defensivo";

    return (
        <div className="classes_page">
            <div className="class_banner">
                <h1>{curso}</h1>
                <h3 className="curse_name">Modulos de curso</h3>
            </div>
            <div>
                <Classes />
            </div>
        </div>
    );
}

export default ClassesPage;