import styled from "styled-components";
import { AppStyleConstants } from "../config/globalConstants";
import SerachIcon from "../icons/search-symbol.png";

export const AppMainBg = styled.div`
  padding: 20px 40px;
`;

export const HeaderContainer = styled.div`
  width:100%;
  display:flex;
  justify-content: space-between;
  @media screen and (max-width:599px){
    width: 100%;
    flex-direction:column;
  }
`;

export const LeftHeader = styled.div`
  display: flex;
  width: 70%;
  @media screen and (max-width:1024px){
    width: auto;
  }
  @media screen and (max-width:599px){
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 70%;
  padding: 10px 20px 10px 40px;
  appearance: none;
  font-family: "Open Sans", sans-serif;
  -webkit-border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_SM};
  -moz-border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_SM};
  -ms-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_SM};
  border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_SM};
  border: 1px solid ${AppStyleConstants.BG_COLORS.BORDER_GRAY};
  background-color: ${AppStyleConstants.BG_COLORS.BG_WHITE};
  background-image: url(${SerachIcon});
  background-repeat: no-repeat;
  background-size: 18px;
  font-size: ${AppStyleConstants.FONT_SIZES.FONT_SM};
  background-position: left 10px center;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 1px ${AppStyleConstants.COLORS.PRIMARY_FONT_COLOR};
  }
  @media screen and (max-width:599px){
    width: 100%;
    margin-bottom:20px;
  }
`;
export const FilterButton = styled.button`
  margin: ${(props) => (props.position === "right" ? "0px" : "0 20px")};
  padding: 10px 14px;
  background-color: ${AppStyleConstants.BG_COLORS.BG_GRAY};
  -webkit-border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_SM};
  -moz-border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_SM};
  -ms-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_SM};
  border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_SM};
  border: 1px solid ${AppStyleConstants.BG_COLORS.BORDER_GRAY};
  color: ${(props) =>
    props.position === "right"
      ? AppStyleConstants.COLORS.SECONDARY_FONT_COLOR
      : AppStyleConstants.COLORS.PRIMARY_FONT_COLOR};
  cursor: pointer;
  @media screen and (max-width:599px){
    margin: ${(props) => (props.position === "right" ? "0px" : "0px")};
  }
`;

export const FilterIcon = styled.img`
  padding: 0px;
  width: 18px;
  position: relative;
  top: 3px;
  right: 5px;
`;

export const RightHeader = styled.div`
display: flex;
  justify-content: space-between;
`;

export const ProductContainer = styled.div`
  padding: 30px 0px;
  margin: 0px;
`;

export const Card = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardList = styled("li")`
  width: ${(props) => (props.viewtype === "list" ? "100%" : "18%")};
  margin: 1% 0;
  display: ${(props) => props.viewtype === "list" && "flex"};
  -webkit-border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_MD};
  -moz-border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_MD};
  -ms-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_MD};
  border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_MD};
  border: 1px solid ${AppStyleConstants.BG_COLORS.BORDER_GRAY};
  box-sizing: border-box;
  box-shadow: 0px 0px 6px ${AppStyleConstants.BG_COLORS.BORDER_GRAY};
  overflow: hidden;
  position:relative;
  @media screen and (max-width:925px){
    width: ${(props) => (props.viewtype === "list" ? "100%" : "31%")};
  }
  @media screen and (max-width:767px){
    width: ${(props) => (props.viewtype === "list" ? "100%" : "48%")};
  }
  @media screen and (max-width:559px){
    width: ${(props) => (props.viewtype === "list" ? "100%" : "100%")};
  }
`;

export const CardImage = styled("img")`
  padding: 0px;
  width: ${(props) => (props.viewtype === "list" ? "20%" : "100%")};
`;

export const ActionIcons = styled.div`
  display:flex;
  position:absolute;
  right:10px;
  top:10px;
  & > img{
    width:18px;
    margin:0 5px;
  }
`;
export const CardDesc = styled("div")`
  padding: 20px;
  position: relative;
  & > h3 {
    max-width: ${(props) => (props.viewtype === "list" ? "100%" : "160px")};
  }
  & > span {
    position: ${(props) => (props.viewtype === "list" ? "static" : "absolute")};
  }
`;
export const CardDescTitlte = styled.h3`
  font-size: ${AppStyleConstants.FONT_SIZES.FONT_MD};
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const CardDescPrice = styled.span`
  display: inline-block;
  position: absolute;
  top: 38px;
  right: 20px;
`;
export const CardDescContent = styled.p`
  font-size: ${AppStyleConstants.FONT_SIZES.FONT_SM};
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ProductViewer = styled.div`
  display: flex;
  @media screen and (max-width:767px){
    display:none;
  }
`;
export const ProductView = styled.button`
  width: 35px;
  height: 35px;
  margin: 2px 3px;
  padding: 4px;
  background-color: ${AppStyleConstants.BG_COLORS.BG_WHITE};
  -webkit-border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_MD};
  -moz-border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_MD};
  -ms-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_MD};
  border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_MD};
  border: 1px solid ${AppStyleConstants.BG_COLORS.BORDER_GRAY};
  box-sizing: border-box;
  box-shadow: 0px 0px 6px ${AppStyleConstants.BG_COLORS.BORDER_GRAY};
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${(props) => props.viewtype === "grid" && "0px 0px 8px #000"};
  &:focus {
    box-shadow: 0px 0px 8px #000;
  }
`;
export const ProductViewIcon = styled.img`
  padding: 0px;
`;

export const FilterSearchMask = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  height: 100%;
  width: 100%;
  background-color: ${AppStyleConstants.BG_COLORS.BG_MASK};
  z-index: 150;
  left: 0px;
`;

export const FilterSearchContainer = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  width: 500px;
  right: 0px;
  z-index: 300;
  background-color: ${AppStyleConstants.BG_COLORS.BG_WHITE};
  @media screen and (max-width:559px){
    width: 90%;
  }
`;

export const FilterSearchTitle = styled.h3`
  font-size: ${AppStyleConstants.FONT_SIZES.FONT_LG};
`;

export const SelectLabel = styled.label`
  margin: 20px 0px;
  display: block;
`;
export const SelectBox = styled.select`
  padding: 10px;
  background-color: ${AppStyleConstants.BG_COLORS.BG_WHITE};
  -webkit-border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_MD};
  -moz-border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_MD};
  -ms-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_MD};
  border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_MD};
  border: 1px solid ${AppStyleConstants.BG_COLORS.BORDER_GRAY};
  box-sizing: border-box;
  box-shadow: 0px 0px 6px ${AppStyleConstants.BG_COLORS.BORDER_GRAY};
  width: 100%;
`;
export const SelectOption = styled.option``;

export const FilterActions = styled.div`
  position: absolute;
  bottom: 1px;
  background-color: ${AppStyleConstants.BG_COLORS.BG_WHITE};
  box-shadow: 0px 0px 12px ${AppStyleConstants.BG_COLORS.BORDER_GRAY};
  padding: 10px 10px;
  width: 100%;
  box-sizing: border-box;
  left: 0px;
  display: flex;
  justify-content: space-between;
`;

export const ActionButton = styled('button')`
  width: 80px;
  margin: 2px 3px;
  padding: 8px 4px;
  background-color: ${props => props.applybtn === "true" ? AppStyleConstants.COLORS.SECONDARY_FONT_COLOR : 'none'};
  -webkit-border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_MD};
  -moz-border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_MD};
  -ms-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_MD};
  border-radius: ${AppStyleConstants.CARD_RADIUS.RADIUS_MD};
  border: ${props => props.applybtn === "true" ? `1px solid ${AppStyleConstants.BG_COLORS.BORDER_GRAY}` : 'none'};
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  color:${props => props.applybtn === "true" ? AppStyleConstants.BG_COLORS.BG_WHITE : 'inherit'};
  background:${props => props.clearbtn === "true" && 'none'};
`;
