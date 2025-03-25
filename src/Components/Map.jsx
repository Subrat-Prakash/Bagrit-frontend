import React from 'react';

const Map = () => {
    return (
        <div className="w-full h-[400px]">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            />
        </div>
    );
};

export default Map;
