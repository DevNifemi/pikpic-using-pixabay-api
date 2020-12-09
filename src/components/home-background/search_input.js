import React, { useState } from 'react';
import axios from 'axios';
import styles from './home-bg.module.css';
import {Link} from 'react-router-dom'
import {apiUrl, apiKey} from '../../assets/helpers/constant'
import {InputGroup,InputGroupAddon,InputGroupButtonDropdown,Input,Button,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';

const SearchInput = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [values, setValues] = useState('')

  // handle the click for search inputs
  const handleTextChange = (e) => {
     setSearchText(e.target.value)
     axios.get(`${apiUrl }/?key=${apiKey}&q=${searchText}&image_type=${values}&per_page=100`)
      .then(response => setImages(response.data.hits))
      .catch(err => console.log(err ))
      console.log(`fetching ${images.length} for you`)
      console.log(images)

  }

  // handle the click for drop down change
  const handleDropDown = (e, index, value) => {
      setValues(value)
  }

  // API FOR PICTURE IS BEING CALLED HERE
  const handleClick = (e) => {
         
  }


  return (
    <div>
      <InputGroup className={styles.input_container}>
      <InputGroupAddon color="dark" addonType="prepend">

        <Link to={{pathname: "/image-result",
         state: {images}}}>
           
          <Button className="bx bx-search-alt solid"
            onClick={handleClick} to="image-result">
          </Button>
        </Link>
      </InputGroupAddon>

        {/* input button for home page goes here */}
        <Input
          className="font-weight-normal text-capitalize" 
          name="searchText"
          value={searchText}
          placeholder="Search For Images"
          onChange={handleTextChange}
        />

        <InputGroupButtonDropdown        
           addonType="append"
           isOpen={dropdownOpen}
           toggle={toggleDropDown}>

          <DropdownToggle value={values}  onChange={handleDropDown} color="dark" caret>
           All
          </DropdownToggle>

          <DropdownMenu>
            <DropdownItem value={'vector'}>Vector</DropdownItem>
            <DropdownItem value={'illustration'}>Illustrations</DropdownItem>
            <DropdownItem value={'photo'}>photo</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>

      </InputGroup>
      <br />
      
    </div>
  );
}


export default SearchInput;