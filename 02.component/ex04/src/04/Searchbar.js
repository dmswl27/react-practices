import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function Searchbar({callback, keyword}) {
    // const [keyword, setKeyword] = useState('');   // 상태를 유지하고 있다가 또 호출 후크
    console.log('keyword ->' +keyword);

    const handleChange = function (e) {
        callback(e.target.value);
    }

    return (
        <div className={'Searchbar'}>
                찾기: <input type='text' placeholder='search' value={keyword} onChange={handleChange}/>
        </div>
    )
    
}

Searchbar.propTypes = {
    keyword : PropTypes.string.isRequired,
    callback : PropTypes.func.isRequired
}