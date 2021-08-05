import React, { Fragment, useState } from 'react';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json';

export default function EmaillistApp() {
    const [emails] = useState(data);
    const [keyword, setKeyword] = useState('');

    const notifyKeywordChanged = function (keyword) {
        setKeyword(keyword);
    }
    return (
        <div className={'EmaillistApp'}>
            <Searchbar 
                callback = {notifyKeywordChanged}
                keyword = {keyword}
            />
            <Emaillist 
                emails={ emails }
                keyword = {keyword}
            />
        </div>
    );
}