import * as React from 'react';
import { getDataAttrs } from '../../../utils/get-data-attrs';

export default function MapSection(props) {

    return (
        <div
        {...getDataAttrs(props)}
            className="flex justify-center"
            
        >
            <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.678502474199!2d-93.05779688445632!3d45.05174557909823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa3701502e20c7bd5!2sLisa+Reinhardt+Makeup+and+Hair+Artistry!5e0!3m2!1sen!2sus!4v1534961565240" width="750" height="200" frameborder="0" allowfullscreen=""></iframe>
        </div>
    );
}
