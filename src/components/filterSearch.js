import React, {useState} from 'react';
import * as STYLE from '../styles/appStyles';
import { AppContentConstants } from '../config/globalConstants'; 
import MultiRangeSlider from "multi-range-slider-react";

const FilterSearch = ({onFilterProductsRange}) => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

const handleInput = (e) => {
	setMinValue(e.minValue);
	setMaxValue(e.maxValue);
};
    return (
      <>
        <STYLE.FilterSearchMask />

        <STYLE.FilterSearchContainer>

          <STYLE.FilterSearchTitle>
            {AppContentConstants.TITLES.FILTER_SEARCH}
          </STYLE.FilterSearchTitle>

          <STYLE.SelectLabel htmlFor={AppContentConstants.LABELS.DYNASTY}>
            {AppContentConstants.LABELS.DYNASTY}
            <STYLE.SelectBox>
              <STYLE.SelectOption value={AppContentConstants.OPTIONS.ALL}>
                {AppContentConstants.OPTIONS.ALL}
              </STYLE.SelectOption>
            </STYLE.SelectBox>
          </STYLE.SelectLabel>

          <STYLE.SelectLabel htmlFor={AppContentConstants.LABELS.PERIOD}>
            {AppContentConstants.LABELS.PERIOD}
            <MultiRangeSlider
			min={10}
			max={100}
			step={5}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}
		/>

          </STYLE.SelectLabel>

          <STYLE.SelectLabel htmlFor={AppContentConstants.LABELS.MATERIAL}>
            {AppContentConstants.LABELS.MATERIAL}
            <STYLE.SelectBox>
              <STYLE.SelectOption value={AppContentConstants.OPTIONS.ALL}>
                {AppContentConstants.OPTIONS.ALL}
              </STYLE.SelectOption>
            </STYLE.SelectBox>
          </STYLE.SelectLabel>

          <STYLE.SelectLabel htmlFor={AppContentConstants.LABELS.REGION}>
            {AppContentConstants.LABELS.REGION}
            <STYLE.SelectBox>
              <STYLE.SelectOption value={AppContentConstants.OPTIONS.ALL}>
                {AppContentConstants.OPTIONS.ALL}
              </STYLE.SelectOption>
            </STYLE.SelectBox>
          </STYLE.SelectLabel>


          <STYLE.FilterActions>
                <STYLE.ActionButton clearbtn="true">{AppContentConstants.TITLES.CLEAR_ALL}</STYLE.ActionButton>
                <STYLE.ActionButton onClick={() => onFilterProductsRange(minValue, maxValue)} applybtn="true">{AppContentConstants.TITLES.APPLY}</STYLE.ActionButton>
          </STYLE.FilterActions>

        </STYLE.FilterSearchContainer>
      </>
    );
}

export default FilterSearch;