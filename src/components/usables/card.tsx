import React, { useContext } from "react";
import { observer } from "mobx-react";
import historyStored from "../../stores/historyStore";

const Card: React.FC = observer(() => {
    const HistoryContextStore = useContext(historyStored);

    const time:string = "9";
    const curse_name:string = "curso de manejo defensivo";

    function handleCardClick(event:any){
        HistoryContextStore.history.push("/home");
        HistoryContextStore.history.go();
    }

    return (
        <div className="home_cards">
            <section onClick={handleCardClick} className="cards">
                <article className="card card--1">
                    <div className="card__info-hover">
                        <div className="card__clock-info">
                            <svg className="card__clock" viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                            </svg><span className="card__time"> {time} modules </span>
                        </div>

                    </div>
                    <div className="card__img"></div>
                    <div className="card_link">
                        <div className="card__img--hover"></div>
                    </div>
                    <div className="card__info">
                        <span className="card__category"> Curso</span>
                        <h3 className="card__title">{curse_name}</h3>
                        <span className="card__by">Por <a href="http://18.188.57.98/" className="card__author" title="author">SCA Soluciones</a></span>
                    </div>
                </article>
            </section>
        </div>
    );
})

export default Card;
