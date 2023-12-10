import {BorderedComtainer, Table, TableCell, TableRow} from "../../pages/TenderCard/styles";
import {FlexTextColumn, FlexTextRow} from "../../containers/containers";
import {TextBlack14pxBold, TextBlack14pxRegular, TextBlack22pxBold, TextGray14pxRegular} from "../../constants/fonts";
import {FC} from "react";


interface IZakupkiInfo {
    data?: any
}

interface IPurchaseObject {
    KTRU?: any,
    OKPD2?: any,
    name: string,
    OKEI: any,
    price: string,
    sum: string,
    quantity: any
}

interface Info {
    characteristics: any,
    OKPD2: any,
    name: any,
    OKEI: any,
    price: any,
    sum: string,
    quantity: any
}
//@ts-ignore
export  const ZakupkiInfo: FC<IZakupkiInfo> = ({data}) => {
 setTimeout(() => console.log(data), 3000);
//@ts-ignore
   const info: Info[] | null = data?.purchaseObject ? [data.purchaseObject].flat().map((one: IPurchaseObject&unknown) => {
        let characteristics;
        let OKPD2;
        const { name, OKEI, price, sum, quantity } = one
        switch (true) {
            case !(one.KTRU == undefined) : {
                characteristics = one.KTRU.characteristics.characteristicsUsingTextForm ||
                   one.KTRU.characteristics.characteristicsUsingReferenceInfo;
                OKPD2 = one.KTRU?.OKPD2;
                break
            }
            case !(one.OKPD2 == undefined) : {
                OKPD2 = one.OKPD2;
                characteristics = one.OKPD2?.characteristics.characteristicsUsingTextForm;
                break
            }
            default:
                return null;
        }
        console.log(OKPD2)
        return { characteristics, OKPD2, name, OKEI, price, sum, quantity }
    }) : null

    if (data && info) {
                    return(
                        <BorderedComtainer style={{flexDirection: 'row' ,justifyContent: 'space-between', padding: '25px 50px 25px 50px'}}>
                            <FlexTextColumn>
                                <Table>
                                    <tbody>
                                    <TableRow>
                                        <TableCell><TextBlack14pxBold>КОД ПОЗИЦИИ</TextBlack14pxBold></TableCell>
                                        <TableCell><TextBlack14pxBold>НАИМЕНОВАНИЕ ТОВАРА, РАБОТЫ, УСЛУГИ</TextBlack14pxBold></TableCell>
                                        <TableCell><TextBlack14pxBold>ЕД. ИЗМЕРЕНИЯ</TextBlack14pxBold></TableCell>
                                        <TableCell><TextBlack14pxBold>КОЛИЧЕСТВО (ОБЪЕМ РАБОТЫ, УСЛУГИ)</TextBlack14pxBold></TableCell>
                                        <TableCell><TextBlack14pxBold>ЦЕНА ЗА ЕД., ₽</TextBlack14pxBold></TableCell>
                                        <TableCell><TextBlack14pxBold>СТОИМОСТЬ, ₽</TextBlack14pxBold></TableCell>
                                    </TableRow>
                                    {
                                        info.map((item, index: number) => item ? (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        {item.OKPD2?.code}
                                                    </TableCell>
                                                    <TableCell>
                                                        <FlexTextColumn key={index}>
                                                            <FlexTextRow>
                                                                {item.name ? (
                                                                    <TextBlack14pxRegular key={index}>{item?.name}</TextBlack14pxRegular>
                                                                ) : null}
                                                            </FlexTextRow>
                                                            {
                                                                item.characteristics ? (

                                                                    <FlexTextColumn key={index}>
                                                                        {[item.characteristics].flat().map((item,index) => (
                                                                            <FlexTextRow>
                                                                                    <TextGray14pxRegular key={index}>{item?.name } {JSON.stringify(item?.values?.value) || ''}</TextGray14pxRegular>
                                                                            </FlexTextRow>
                                                                         ))
                                                                        }
                                                                    </FlexTextColumn>
                                                                ) :   null
                                                            }
                                                        </FlexTextColumn>
                                                    </TableCell>
                                                    <TableCell>{item?.OKEI?.name}</TableCell>
                                                    <TableCell>{item?.quantity?.value}</TableCell>
                                                    <TableCell>{item?.price}</TableCell>
                                                    <TableCell>{item?.sum}</TableCell>
                                                </TableRow>
                                            ) : null)
                                    }
                                    </tbody>
                                </Table>
                                <FlexTextRow style={{justifyContent: 'flex-end'}}>
                                    <TextBlack22pxBold>Итого: {data.totalSum} ₽</TextBlack22pxBold>
                                </FlexTextRow>
                            </FlexTextColumn>
                        </BorderedComtainer>
                        )}
                    else return null
}