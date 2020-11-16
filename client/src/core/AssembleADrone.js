import React from 'react'
import Menu from './Menu'
import Jumbotron4 from './Jumbotron4';

const AssembleaDrone = () => {
    return (
        <div>
            <Menu />
            <div className="documentation-video" style={{ position: "relative", paddingBottom: "56.25%" /* 16:9 */, paddingTop: 25, height: 0 }}>
                <iframe
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    src={`https://www.youtube.com/embed/XvMdL1PncEQ`}
                    frameBorder="0"
                />
            </div>
            <div className="about darken-overlay4">
                <h2>HOW TO ASSEMBLE A DRONE</h2>
                <br />
                <h4>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad nesciunt est, dolores vitae inventore culpa nobis illo eaque commodi error corrupti et itaque temporibus doloribus quas adipisci esse odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam odit dolorum accusamus ex aut eum fuga corporis dolore optio aspernatur, minus saepe quibusdam non architecto.<br /><br />
                </h4>
                <h4>Propellers</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad nesciunt est, dolores vitae inventore culpa nobis illo eaque commodi error corrupti et itaque temporibus doloribus quas adipisci esse odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam odit dolorum accusamus ex aut eum fuga corporis dolore optio aspernatur, minus saepe quibusdam non architecto.<br /><br />
                </p>
                <h4>Landing Gear</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad nesciunt est, dolores vitae inventore culpa nobis illo eaque commodi error corrupti et itaque temporibus doloribus quas adipisci esse odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam odit dolorum accusamus ex aut eum fuga corporis dolore optio aspernatur, minus saepe quibusdam non architecto.<br /><br />
                </p>
                <h4>Camera gear</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad nesciunt est, dolores vitae inventore culpa nobis illo eaque commodi error corrupti et itaque temporibus doloribus quas adipisci esse odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam odit dolorum accusamus ex aut eum fuga corporis dolore optio aspernatur, minus saepe quibusdam non architecto.<br /><br />
                </p>
                <h4>Charging Batteries</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad nesciunt est, dolores vitae inventore culpa nobis illo eaque commodi error corrupti et itaque temporibus doloribus quas adipisci esse odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam odit dolorum accusamus ex aut eum fuga corporis dolore optio aspernatur, minus saepe quibusdam non architecto.<br /><br />
                </p>
                <br /><br /><br />
            </div>
            <Jumbotron4 />
        </div>
    )
}

export default AssembleaDrone;