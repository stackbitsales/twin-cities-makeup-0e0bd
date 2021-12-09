import * as React from 'react';
import { getDataAttrs } from '../../../utils/get-data-attrs';

export default function SubmitReviewsSection(props) {

    return (
        <div
            {...getDataAttrs(props)}
            className="flex justify-center"
        >
            <a href="http://www.theknot.com/Vendors/Lisa-Reinhardt-Makeup-and-Hair-Artistry/Profile/HBF/004/333949/Profile?g=0#reviewAdd&utm_source=vendor_website&utm_medium=banner&utm_term=a39a436b-b79f-41d1-bc5a-ce088a58027b&utm_campaign=vendor_badge_assets" target="_blank">
                <img className="mr-10" src="/images/theknot-logo.jpeg"></img>
            </a>
            <a href="https://www.weddingwire.com/reviews/lisa-reinhardt-makeup-hair-artistry-llc-roseville/954f301ec297f2d0.html" target="_blank">
                <img className="mr-10" src="/images/weddingwire-logo.jpeg"></img>
            </a>
            <a href="http://www.facebook.com/pages/Lisa-Reinhardt-Makeup-Hair-Artistry-LLC/284684804885522" target="_blank">
                <img className="" src="/images/facebook-logo.jpeg"></img>
            </a>

        </div>
    );
}
