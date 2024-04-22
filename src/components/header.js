import React from 'react';
import * as STYLE from '../styles/appStyles';
import { AppContentConstants } from '../config/globalConstants';

const HeaderComponent = () => {
    return(
        <STYLE.HeaderContainer>

            <STYLE.LeftHeader>
                <STYLE.SearchInput></STYLE.SearchInput>
                <STYLE.FilterButton>
                    {AppContentConstants.TITLES.FILTERS}
                </STYLE.FilterButton>
            </STYLE.LeftHeader>

            <STYLE.RightHeader>
                <STYLE.FilterButton position="right">
                    {AppContentConstants.TITLES.SURPRISE}
                </STYLE.FilterButton>
            </STYLE.RightHeader>

        </STYLE.HeaderContainer>
    )
}

export default HeaderComponent;