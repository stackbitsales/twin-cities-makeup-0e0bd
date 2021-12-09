import * as React from 'react';
import { getDataAttrs } from '../../../utils/get-data-attrs';

export default function YouTubeSection(props) {

    let youTubeLink = props.url;
    let youTubeID;
    let iframeLink;

    if (youTubeLink.includes('youtu.be')) {
        youTubeID = youTubeLink.split('.be/')[1];
        youTubeID = youTubeID.split('?')[0];
    } else {
        youTubeID = youTubeLink.split('v=')[1];
    }

    iframeLink = `https://www.youtube-nocookie.com/embed/${youTubeID}`

    return (
        <div
             
            className="flex justify-center"
        >
            <iframe class="mb-3" width="560" height="315" src={iframeLink} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    );
}
