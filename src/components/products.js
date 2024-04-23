import React, {useState} from 'react';
import * as STYLE from '../styles/appStyles';
import { IconsObj } from '../config/icons'; 

const ProductsComponent = ({productsList, searchItem, filterProductsList}) => {
    const [view, setView] = useState('grid');

    const onChangeView = type => {
        setView(type)
    }

    return(
        <STYLE.ProductContainer>
            <STYLE.ProductViewer>
                <STYLE.ProductView onClick={() => onChangeView('list')}>
                    <STYLE.ProductViewIcon src={IconsObj.LIST_VIEW_ICON} width="100%"></STYLE.ProductViewIcon>
                </STYLE.ProductView>
                <STYLE.ProductView onClick={() => onChangeView('grid')} viewtype={view}>
                    <STYLE.ProductViewIcon src={IconsObj.GRID_VIEW_ICON} width="100%"></STYLE.ProductViewIcon>
                </STYLE.ProductView>
            </STYLE.ProductViewer>
           {searchItem !=="" ? (
             <STYLE.Card>
             {filterProductsList?.length > 0 && filterProductsList?.map(item => (
                 <STYLE.CardList key={item.id} viewtype={view}>
                     <STYLE.CardImage src={item?.category?.image} viewtype={view} />
                     <STYLE.CardDesc viewtype={view}>
                         <STYLE.CardDescTitlte>{item.title}</STYLE.CardDescTitlte>
                         <STYLE.CardDescPrice>${item.price}</STYLE.CardDescPrice>
                         <STYLE.CardDescContent>{item.description}</STYLE.CardDescContent>
                     </STYLE.CardDesc>
                 </STYLE.CardList>
             ))}
         </STYLE.Card>
           ) : (
            <STYLE.Card>
            {productsList?.length > 0 && productsList?.map(item => (
                <STYLE.CardList key={item.id} viewtype={view}>
                    <STYLE.CardImage src={item?.category?.image} viewtype={view} />
                    <STYLE.CardDesc viewtype={view}>
                        <STYLE.CardDescTitlte>{item.title}</STYLE.CardDescTitlte>
                        <STYLE.CardDescPrice>${item.price}</STYLE.CardDescPrice>
                        <STYLE.CardDescContent>{item.description}</STYLE.CardDescContent>
                    </STYLE.CardDesc>
                </STYLE.CardList>
            ))}
        </STYLE.Card>
           )}
        </STYLE.ProductContainer>
    )
}

export default ProductsComponent;