import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList'

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhac Xuan',
            thumbnailUrl: 'https://data.chiasenhac.com/data/cover_thumb/147/146853.jpg'
        },
        {
            id: 2,
            name: 'Nhac He',
            thumbnailUrl: 'https://data.chiasenhac.com/data/cover_thumb/147/146853.jpg'
        },
        {
            id: 3,
            name: 'Nhac Thu',
            thumbnailUrl: 'https://data.chiasenhac.com/data/cover_thumb/147/146853.jpg'
        },
        {
            id: 4,
            name: 'Nhac Dong',
            thumbnailUrl: 'https://data.chiasenhac.com/data/cover_thumb/147/146853.jpg'
        },
    ];
    return (
        <div>
            <h1>Có thể bạn sẽ thích</h1>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;