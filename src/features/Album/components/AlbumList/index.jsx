import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Album from '../../components/Album'
AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

AlbumList.defaultProps = {
    albumList: [],
}

function AlbumList(props) {
    const {albumList} = props;
    return (
        <ul className='album-List'>
            {albumList.map(album => (
                <li key={album.id}>
                    <Album album={album}/>
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;