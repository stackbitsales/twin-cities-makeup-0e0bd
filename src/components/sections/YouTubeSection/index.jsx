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
            {...getDataAttrs(props)}
            className="flex justify-center"
        >
            <iframe class="mb-3" width="560" height="315" src={iframeLink} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div className="w-full sm:w-11/12 lg:w-3/4 mx-auto mt-5 mb-10" {...getDataAttrs(props)}>
            <div className="w-full h-0 relative" style={{ paddingBottom: '56.25%' }} data-sb-field-path={annotationPrefix}>
                <iframe className="absolute top-0 left-0 w-full h-full" src={iframeLink} title={videoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div
    );
}
