import { FiSearch } from 'react-icons/fi';
import { searchStyles } from './search.styles';

export const Search = ({ onChange }: { onChange: (e: any) => void }) => {
  return (
    <>
      <form>
        <input type='search' placeholder='Search contact' onChange={onChange} />
        <span>
          <FiSearch color='var(--secondary-color-dark)' size={20} />
        </span>
      </form>
      <style jsx>{searchStyles}</style>
    </>
  );
};
