import './not-found.css';
import { MdOutlineSearchOff } from 'react-icons/md';

export default function NotFound() {
    return (
        <div className='not-found-container'>
            <MdOutlineSearchOff className='not-found-container__icon' size={100} />
            <h1 className='not-found-container__title'>Country not found</h1>
        </div>
    );
}
