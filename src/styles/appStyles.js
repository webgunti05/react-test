import styled from 'styled-components';
import { AppStyleConstants } from '../config/globalConstants';

export const AppMainBg = styled.div`
    padding:20px 40px;
`;

export const HeaderContainer = styled.div`
    display:flex;
    justify-content: space-between;
`;

export const LeftHeader = styled.div`
    display:flex;
    width:80%;
`;

export const SearchInput = styled.input`
    width:70%;
    padding:10px;
    appearance:none;
    -webkit-border-radius:${AppStyleConstants.CARD_RADIUS.RADIUS_SM};
    -moz-border-radius:${AppStyleConstants.CARD_RADIUS.RADIUS_SM};
    -ms-radius:${AppStyleConstants.CARD_RADIUS.RADIUS_SM};
    border-radius:${AppStyleConstants.CARD_RADIUS.RADIUS_SM};
    border:1px solid ${AppStyleConstants.BG_COLORS.BORDER_GRAY};
    background-color:${AppStyleConstants.BG_COLORS.BG_WHITE};
    &:focus{
        outline:none;
        box-shadow:0px 0px 1px ${AppStyleConstants.COLORS.PRIMARY_FONT_COLOR};
        
    }
`;
export const FilterButton = styled.button`
    margin: ${props => props.position === "right" ? '0px' : '0 20px'};
    padding: 10px 14px;
    background-color:${AppStyleConstants.BG_COLORS.BG_GRAY};
    -webkit-border-radius:${AppStyleConstants.CARD_RADIUS.RADIUS_SM};
    -moz-border-radius:${AppStyleConstants.CARD_RADIUS.RADIUS_SM};
    -ms-radius:${AppStyleConstants.CARD_RADIUS.RADIUS_SM};
    border-radius:${AppStyleConstants.CARD_RADIUS.RADIUS_SM};
    border:1px solid ${AppStyleConstants.BG_COLORS.BORDER_GRAY};
    color:${props => 
        props.position === "right" ? AppStyleConstants.COLORS.SECONDARY_FONT_COLOR :
        AppStyleConstants.COLORS.PRIMARY_FONT_COLOR
     };
     cursor:pointer;
`;

export const RightHeader = styled.div`

`;