import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { HiFolderRemove } from 'react-icons/hi';
import { BiCopyAlt, BiSolidSelectMultiple } from 'react-icons/bi';
import { MdClear } from 'react-icons/md';
import YtTagEditor from './YtTagEditor';

const youtube = () => {
    return (
        <div className="lg:p-24 md:p-24 py-28 flex flex-wrap gap-5">
            <YtTagEditor />
        </div>
    )
}

export default youtube;