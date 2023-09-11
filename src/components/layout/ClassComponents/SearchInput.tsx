import imageLupa from './ImagesClass/lupa.svg'
import styles from './SearchInput.module.css'
import { text } from 'stream/consumers';
interface SearchInputProps {
    searchTerm?: string;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    text?: string;
  }
  
  function SearchInput(props: SearchInputProps) {
    return (
      <div className={styles.search_input}>
        <img src={imageLupa} alt="Lupa" className="search-icon" />
        <input 
        
          type="text"
          placeholder={props.text}
          value={props.searchTerm}
          onChange={props.handleChange}
          className={styles.searchText}
        />
        {/* <span className="user-input">{props.text}</span> */}
      </div>
    )
  }
  
  export default SearchInput;