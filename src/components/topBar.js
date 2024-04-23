import React from 'react';
import * as STYLE from '../styles/appStyles';
import { AppContentConstants } from '../config/globalConstants';
import { IconsObj } from '../config/icons'; 

const TopBar = ({onSearchProducts, onOpenFilterSearch}) => {
    return(
        <STYLE.HeaderContainer>

            <STYLE.LeftHeader>
                <STYLE.SearchInput onChange={onSearchProducts} placeholder={AppContentConstants.PLACEHOLDERS.SEARCH_PLACEHOLDER} />
                <STYLE.FilterButton onClick={onOpenFilterSearch}>
                    <STYLE.FilterIcon src={IconsObj.FILTERS_ICON}></STYLE.FilterIcon>
                    {AppContentConstants.TITLES.FILTERS}
                </STYLE.FilterButton>
            </STYLE.LeftHeader>

            <STYLE.RightHeader>
                <STYLE.FilterButton position="right">
                    <STYLE.FilterIcon src={IconsObj.SURPRISE_ICON}></STYLE.FilterIcon>
                    {AppContentConstants.TITLES.SURPRISE}
                </STYLE.FilterButton>
            </STYLE.RightHeader>

        </STYLE.HeaderContainer>
    )
}

export default TopBar;