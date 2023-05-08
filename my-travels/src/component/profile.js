import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";


function Profile ({data}){
    const profiles = data.map( (tData) => {
        return(
            <div className="profile" key={tData.id}>
                <div className="proImage">
                    <img src={process.env.PUBLIC_URL + '/static/images/'+ tData.imageURL}  
                    alt={tData.title} width="250px"/>
                </div>
                <div className="proBody">
                    <div className="topRow">
                        <div className="icon">
                            <FaMapMarkerAlt style={{color: 'red', fontSize: '12px'}}/>
                        </div>
                        <div className="location">
                            {tData.location}
                        </div>
                        <div className="googleLink">
                            <a href={tData.googleMapsURL}>View on Google Maps</a>
                        </div>
                    </div>
                    
                    <div className="title">
                        <span>
                            {tData.title}
                        </span>
                    </div>
                    <div className="dates">
                        <div className="startDate">
                            {tData.startDate} -
                        </div>
                        <div className="endDate">
                        {tData.endDate}
                        </div>
                    </div>
                    <div className="description">
                        {tData.description}
                    </div>
                </div>            
            </div>
        );
    });

    return(
        <div>{profiles}</div>
    );
}

export default Profile;