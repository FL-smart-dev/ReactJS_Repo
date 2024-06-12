import React from "react";
import LinkType1 from "../LinkTypes/LinkType1";
import LinkType2 from '../LinkTypes/LinkType2';
import LinkType3 from '../LinkTypes/LinkType3';
import LinkType6 from '../LinkTypes/LinkType6';
import LinkType4 from '../LinkTypes/LinkType4';
import "./LinkCarousel.css"; 

function LinkCarousel({ merchantLinks }) {
    return (
        <div className="listScroller" style={{height:'150px'}}>
        <div className="scroll-container">
            <div className="scroll-item">
            {merchantLinks.map((item, index) => {
                let link = item.linkItem;
                switch (link.linkType) {
                    case "arrow":
                      return <LinkType1 linkItem={link} />
                    case "gradient":
                      return <LinkType2 linkItem={link}  />
                      case "info":
                        return <LinkType3 linkItem={link}  />
                      case "event":
                          return <LinkType4 linkItem={link}  />
                      case "button":
                            return <LinkType6 linkItem={link}  />
                    default:
                      return <div></div>
                  }
             
            })}
            </div>
        </div>
        </div>
    );
}

export default LinkCarousel;