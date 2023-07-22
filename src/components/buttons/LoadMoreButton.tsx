import './buttons.css';

export function LoadMoreButton({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick} className='button'>
            Load more
        </button>
    );
}
