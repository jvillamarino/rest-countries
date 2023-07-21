import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';
import './buttons.css';

export function BackButton() {
    return (
        <Link href='/' className='back-button'>
            <BiArrowBack />
            Back
        </Link>
    );
}
