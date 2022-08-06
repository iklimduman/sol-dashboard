import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const SearchInput = styled.input`
    outline: 0;
    background : transparent;
    padding: 1em 2em;
    border-radius: 0.7rem 0 0 0.7rem;
    margin: 0.5em 0;
    cursor : pointer ;
    color: #CECECE;
    border : 1px solid #4D4AE8 ;
    font-size: 12px;
    width : 90% ;
`



const Searchbar = () => {
    return (
        <div style ={{width : "50%"}}>
            <form>
                <SearchInput id="search" type="search" placeholder="Search for..." autoFocus required autocomplete="false" />
                <IconButton
                    sx={{
                        backgroundColor: '#4D4AE8',
                        borderRadius: '0 0.7rem 0.7rem 0',
                        top: 0,
                        right: 0,
                        "&:hover": { backgroundColor: "#4D4AE8" }
                    }}><SearchIcon fontSize="12px"/></IconButton>
            </form>
        </div>
    )
}

export default Searchbar;