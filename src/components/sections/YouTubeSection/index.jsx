import * as React from 'react';

export default function YouTubeSection(props) {

    let youTubeLink = props.url;
    let youTubeID;
    let iframeLink;

    if (videoLink.includes('youtu.be')) {
        youTubeID = youTubeLink.split('.be/')[1];
        youTubeID = youTubeID.split('?')[0];
        iframeLink = `https://www.youtube-nocookie.com/embed/${youTubeID}`
    } else {
        youTubeID = youTubeLink.split('v=')[1];
    }

    return (
        <div className="flex justify-center">
            <iframe class="mb-3" width="560" height="315" src={youTubeID} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    );
}
