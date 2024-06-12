import React from "react";
import { getHeaderRail } from "../../utils/api.services";

export default function HeaderRail(props) {
  const railItems = getHeaderRail();

  return (
    <>
      <div className="listScroller" >
        <div className="scroller-horizontal">
          {railItems.map((item, index) => {
            const url = new URL(item.link);
            const baseUrl = `${url.protocol}//${url.hostname}`;

            return (
              <a href={item.link} style={{ textDecoration: "none" }} key={index}>
                <div className="menuborderbutton">
                  <div className="glass">
                    {/* You can put content here if needed */}
                  </div>
                  {/* Uncomment below if you want to use the image */}
                  {/* <img className='icon' src={baseUrl + "/favicon.ico"} alt="icon" /> */}
                  <div
                    style={{
                      display: "block",
                      // minWidth: "80px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.description}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
