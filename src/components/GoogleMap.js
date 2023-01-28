import React from "react";

const GoogleMap = () => {
  return (
    <div>
      {" "}
      <iframe
        title="kutaisi"
        className="w-full h-64"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=kutaisi white bdge&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
