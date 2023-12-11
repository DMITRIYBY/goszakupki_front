import {BorderedComtainer} from "../../TenderCard/styles";
import {TextBlack14pxBold, TextBlack14pxRegular, TextGray14pxRegular} from "../../../constants/fonts";
import {FlexTextColumn} from "../../../containers/containers";
import {FC, useEffect, useState} from "react";
import {Table, TableCell, TableRow} from "./styles";

interface Criterion {
    name: string;
    value: string;
    indicators?: Indicator[];
}

interface Indicator {
    name: string | undefined;
    value: string;
    details: Detail[];
    purchaseObjectCharsInfo: PurchaseObjectCharsInfo;
    addInfo?: string;
}

interface Detail {
    name: string | undefined;
    value: string;
}

interface PurchaseObjectCharsInfo {
    name: string;
    code: string
}

export const CriterialInfo: FC<{ criterias: any[] }> = ({ criterias }) => {

    const critData = criterias.map((crit: Criterion) => {
        if (Object.keys(crit)[0] === 'costCriterionInfo') {
            const value = Object.values(crit)[0].valueInfo.value;
            return {
                name: "Цена контракта, сумма цен единиц товара, работы, услуги",
                value: value,
            };
        } else if (Object.keys(crit)[0] === 'qualitativeCriterionInfo') {
            const { code, valueInfo, indicatorsInfo } = Object.values(crit)[0];

            let name = '';
            switch (code) {
                case 'QF':
                {
                    name = "Качественные, функциональные и экологические характеристики объекта закупки";
                    break;
                }
                case 'QO':
                {
                    name = `Квалификация участников закупки, в том числе наличие у них финансовых ресурсов,
            на праве собственности или ином законном основании оборудования и других материальных ресурсов,
            опыта работы, связанного с предметом контракта, и деловой репутации, специалистов и иных работников определенного уровня квалификации`;
                    break;
                }
            }

            const { indicatorInfo } = indicatorsInfo;

            const indicators: Indicator[] = [indicatorInfo].flat().map((one) => {
                const name = one.qualPurchaseParticipantsInfo?.name;
                const { value, detailIndicatorsInfo, purchaseObjectCharsInfo, addInfo } = one;
                const details: Detail[] = [detailIndicatorsInfo].flat().map((one) => {
                    return [one.detailIndicatorInfo].flat().map((one) => {
                        const { value, indicatorInfo } = one;
                        const { manualEnteredName, indicatorDictInfo } = indicatorInfo;
                        const name = manualEnteredName || indicatorDictInfo?.name;
                        return {
                            name,
                            value,
                        };
                    });
                }).flat();
                return {
                    name,
                    value,
                    details,
                    purchaseObjectCharsInfo,
                    addInfo,
                };
            });

            const { value } = valueInfo;
            return {
                name,
                value,
                indicators,
            };
        }
    });

    return (
            <BorderedComtainer>
                <TextBlack14pxBold>Критерии оценки заявок участиков</TextBlack14pxBold>
                <Table>
            <thead>
              <TableRow>
                  <TableCell> <TextGray14pxRegular style={{width: '35%'}}>Наименование критерия </TextGray14pxRegular> </TableCell>
                  <TableCell><TextGray14pxRegular style={{width: '35%'}}>Значимость критерия, %</TextGray14pxRegular> </TableCell>
            </TableRow>
            </thead>
            <tbody>
            {critData.map((crit, index) => (
                <TableRow key={index}>
                    <TableCell>
                        <Table>
                            <thead>
                            <TableRow>
                                <TableCell><TextBlack14pxRegular style={{width: '35%'}}>{crit?.name}</TextBlack14pxRegular></TableCell>
                                <TableCell><TextBlack14pxRegular style={{width: '35%'}}>{crit?.value}</TextBlack14pxRegular></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell> <TextGray14pxRegular> Показатели критерия оценки заявок </TextGray14pxRegular></TableCell>
                            </TableRow>
                            </thead>
                            <tbody>

                                    {crit?.indicators?.map((indicator, indIndex) => (
                                        <TableRow>
                                            <TableCell>
                                                <Table>
                                                    <thead>
                                                    <TableRow>
                                                        <TableCell><TextBlack14pxRegular style={{width: '35%'}}>{indicator.name}</TextBlack14pxRegular></TableCell>
                                                        <TableCell><TextBlack14pxRegular style={{width: '35%'}}>{indicator.value}</TextBlack14pxRegular></TableCell>
                                                    </TableRow>
                                                    </thead>
                                                         <tbody>
                                                            {indicator.details.map((detail, detailIndex) => (
                                                                <TableRow>
                                                                    <TableCell><TextBlack14pxRegular style={{width: '35%'}}>{detail.name}</TextBlack14pxRegular></TableCell>
                                                                    <TableCell><TextBlack14pxRegular style={{width: '35%'}}>{detail.value}</TextBlack14pxRegular></TableCell>
                                                                </TableRow>
                                                            ))}
                                                         </tbody>
                                                </Table>
                                            </TableCell>
                                        </TableRow>
                                    ))}

                            </tbody>
                        </Table>
                    </TableCell>

                                {/*        <TableCell>{crit?.indicators?.map((indicator) => indicator.purchaseObjectCharsInfo?.name)}</TableCell>*/}
                                {/*        <TableCell>{crit?.indicators?.map((indicator) => indicator.addInfo)}</TableCell>*/}

                </TableRow>
            ))}
            </tbody>
        </Table>
            </BorderedComtainer>
    );
};
