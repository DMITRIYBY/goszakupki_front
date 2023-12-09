import {BorderedComtainer} from "../../TenderCard/styles";
import {TextBlack14pxBold, TextBlack14pxRegular, TextGray14pxRegular} from "../../../constants/fonts";
import {FlexTextColumn} from "../../../containers/containers";
import {FC, useEffect, useState} from "react";

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
        <table>
            <thead>
            <tr>
                <th> <TextGray14pxRegular style={{width: '35%'}}>Наименование критерия </TextGray14pxRegular></th>
                  <TextGray14pxRegular style={{width: '35%'}}>Значимость критерия, %</TextGray14pxRegular>
            </tr>
            </thead>
            <tbody>
            {critData.map((crit, index) => (
                <tr key={index}>
                    <td>
                        <table>
                            <thead>
                            <tr>
                                <td><TextBlack14pxRegular style={{width: '35%'}}>{crit?.name}</TextBlack14pxRegular></td>
                                <td><TextBlack14pxRegular style={{width: '35%'}}>{crit?.value}</TextBlack14pxRegular></td>
                            </tr>
                            <tr>
                                <td> <TextGray14pxRegular> Показатели критерия оценки заявок </TextGray14pxRegular></td>
                            </tr>
                            </thead>
                            <tbody>

                                    {crit?.indicators?.map((indicator, indIndex) => (
                                        <tr>
                                            <td>
                                                <table>
                                                    <thead>
                                                    <tr>
                                                        <td><TextBlack14pxRegular style={{width: '35%'}}>{indicator.name}</TextBlack14pxRegular></td>
                                                        <td><TextBlack14pxRegular style={{width: '35%'}}>{indicator.value}</TextBlack14pxRegular></td>
                                                    </tr>
                                                    </thead>
                                                         <tbody>
                                                            {indicator.details.map((detail, detailIndex) => (
                                                                <tr>
                                                                    <td><TextBlack14pxRegular style={{width: '35%'}}>{detail.name}</TextBlack14pxRegular></td>
                                                                    <td><TextBlack14pxRegular style={{width: '35%'}}>{detail.value}</TextBlack14pxRegular></td>
                                                                </tr>
                                                            ))}
                                                         </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    ))}

                            </tbody>
                        </table>
                    </td>

                                {/*        <td>{crit?.indicators?.map((indicator) => indicator.purchaseObjectCharsInfo?.name)}</td>*/}
                                {/*        <td>{crit?.indicators?.map((indicator) => indicator.addInfo)}</td>*/}

                </tr>
            ))}
            </tbody>
        </table>
            </BorderedComtainer>
    );
};
