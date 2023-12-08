import {FC, Fragment, useState, useEffect} from 'react'
import {
    Atext14pxBlue,
    BorderedComtainer, BorderFitContaienr,
    BorderOpeningContainer, Table, TableRow, TableCell,
    LeftSideSection35,
    PageContainer,
    RightSideSection65
} from "./styles";
import {
    TextBlack14pxBold,
    TextBlack14pxRegular,
    TextBlack22pxBold, TextBlack22pxRegular,
    TextBlue14pxRegular,
    TextGray14pxRegular
} from "../../constants/fonts";
import {FlexTextColumn, FlexTextRow} from "../../containers/containers";
import {ReactComponent as Arrow} from "../../assets/icons/arrow.svg";
import {Menu} from "../../components/Menu/Menu";
import axios from "axios";
import {useParams} from "react-router-dom";
import {format, parseISO} from "date-fns";
import JsonRenderer from "../JsonRenderer";
import {testTender1} from "./testTender1";

export const TenderCard = () => {

    const [tender, setTender] = useState(testTender1)
    const { id } = useParams();
    const [isSecondContainerVisible, setSecondContainerVisible] = useState(false);
    const [isThirdContainerVisible, setThirdContainerVisible] = useState(false);
    const [isProtocolsContainerVisible, setProtocolsContainerVisible] = useState(false);


    const formatDate = (originalDate) => {
        const parsedDate = parseISO(originalDate);
        return format(parsedDate, 'dd.MM.yyyy');
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}client/tender?id=${id}`);
                setTender(response.data);
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
            }
        };

        fetchData();
    },[id])

    // Обработчик клика по кнопке
    const handleClick = () => {
        // Изменяем состояние для показа/скрытия второго контейнера
        setSecondContainerVisible(!isSecondContainerVisible);
    };
    const handleClickThird = () => {
        // Изменяем состояние для показа/скрытия второго контейнера
        setThirdContainerVisible(!isThirdContainerVisible);
    };
    const handleClickProtocols = () => {
        // Изменяем состояние для показа/скрытия второго контейнера
        setProtocolsContainerVisible(!isProtocolsContainerVisible);
    };

    return (
        <Fragment>
            <PageContainer>
                <LeftSideSection35>
                    <BorderedComtainer>
                        <TextBlack14pxBold>Общая информация</TextBlack14pxBold>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Номер извещания</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender?.[0]?.commonInfo?.purchaseNumber}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Наименование объекта закупки</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender?.[0]?.commonInfo?.purchaseObjectInfo}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Способ определения поставщика (подрядчика, исполнителя)</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender?.[0]?.commonInfo?.placingWay?.name}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Наименование электронной площадки</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender?.[0]?.commonInfo?.ETP?.name}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Заказчик</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender?.[0]?.purchaseResponsibleInfo?.responsibleOrgInfo?.fullName}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Официальный сайт</TextGray14pxRegular>
                            <a href={'https://zakupki.gov.ru/epz/main/public/home.htmlhtki.gov.ru/epz/main/public/'}>
                            <TextBlack14pxRegular>https://zakupki.gov.ru/epz/main/public/home.htmlhtki.gov.ru/epz/main/public/</TextBlack14pxRegular>
                            </a>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    {/*<BorderedComtainer>*/}
                    {/*    <TextBlack14pxBold>Порядок размещения заказа</TextBlack14pxBold>*/}
                    {/*    <FlexTextColumn>*/}
                    {/*        <TextGray14pxRegular>Дата публикации извещения</TextGray14pxRegular>*/}
                    {/*        <TextBlack14pxRegular>31.12.2019 14:23 (МСК +00:00)</TextBlack14pxRegular>*/}
                    {/*    </FlexTextColumn>*/}
                    {/*    <FlexTextColumn>*/}
                    {/*        <TextGray14pxRegular>Дата и время окончания подачи заявок</TextGray14pxRegular>*/}
                    {/*        <TextBlack14pxRegular>15.01.2020 в 08:00 (МСК +00:00)</TextBlack14pxRegular>*/}
                    {/*    </FlexTextColumn>*/}
                    {/*    <FlexTextColumn>*/}
                    {/*        <TextGray14pxRegular>Место подачи заявок</TextGray14pxRegular>*/}
                    {/*        <TextBlack14pxRegular >{tender?.tender?.[0]?.printFormInfo?.url}</TextBlack14pxRegular>*/}
                    {/*    </FlexTextColumn>*/}
                    {/*    <FlexTextColumn>*/}
                    {/*        <TextGray14pxRegular>Порядок подачи заявок</TextGray14pxRegular>*/}
                    {/*        <TextBlack14pxRegular>В соответствии с пунктами 25, 26 раздела I документации</TextBlack14pxRegular>*/}
                    {/*    </FlexTextColumn>*/}
                    {/*    <FlexTextColumn>*/}
                    {/*        <TextGray14pxRegular>Дата рассмотрения и оценки заявок</TextGray14pxRegular>*/}
                    {/*        <TextBlack14pxRegular>16.01. 2020</TextBlack14pxRegular>*/}
                    {/*    </FlexTextColumn>*/}
                    {/*    <FlexTextColumn>*/}
                    {/*        <TextGray14pxRegular>Дата и время проведения аукциона в электронной форме</TextGray14pxRegular>*/}
                    {/*        <TextBlack14pxRegular>17.01.2020 в 09:00 (МСК +00:00)</TextBlack14pxRegular>*/}
                    {/*    </FlexTextColumn>*/}
                    {/*</BorderedComtainer>*/}
                    {tender.tender[0].purchaseResponsibleInfo?.responsibleOrgInfo ? (
                    <BorderedComtainer>
                        <TextBlack14pxBold>Контактная информация</TextBlack14pxBold>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Организация</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].purchaseResponsibleInfo?.responsibleOrgInfo?.fullName}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Фактический адрес</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].purchaseResponsibleInfo?.responsibleOrgInfo?.factAddress}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Почтовый адрес</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].purchaseResponsibleInfo?.responsibleOrgInfo?.postAddress}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Контакты</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].purchaseResponsibleInfo?.responsibleInfo?.contactPersonInfo?.firstName} {tender.tender[0].purchaseResponsibleInfo?.responsibleInfo?.contactPersonInfo?.middleName} {tender.tender[0].purchaseResponsibleInfo?.responsibleInfo?.contactPersonInfo?.lastName}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Телефон</TextGray14pxRegular>
                            <TextBlack14pxRegular>+{tender.tender[0].purchaseResponsibleInfo?.responsibleInfo?.contactPhone}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Электронная почта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].purchaseResponsibleInfo?.responsibleInfo?.contactEMail}</TextBlack14pxRegular>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    ) : null }
                </LeftSideSection35>
                <RightSideSection65>
                    <BorderedComtainer style={{flexDirection: 'row' ,justifyContent: 'space-between', padding: '25px 50px 25px 50px'}}>
                        <FlexTextColumn style={{width: 'fit-content'}}>
                            <TextGray14pxRegular>Цена контракта</TextGray14pxRegular>
                            <TextBlack22pxBold>{tender.tender[0]?.notificationInfo?.contractConditionsInfo?.maxPriceInfo?.maxPrice} ₽</TextBlack22pxBold>
                        </FlexTextColumn>
                        <FlexTextColumn style={{width: 'fit-content'}}>
                            <TextGray14pxRegular>Обеспечение заявки</TextGray14pxRegular>
                            <TextBlack22pxBold>{tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.applicationGuarantee?.amount} ₽</TextBlack22pxBold>
                        </FlexTextColumn>
                        <FlexTextColumn style={{width: 'fit-content'}}>
                            <TextGray14pxRegular>Обеспечение контракта</TextGray14pxRegular>
                            <TextBlack22pxBold>{tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.amount} ₽</TextBlack22pxBold>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    {tender.tender[0].notificationInfo?.purchaseObjectsInfo?.notDrugPurchaseObjectsInfo?.purchaseObject ? (
                    <BorderedComtainer style={{flexDirection: 'row' ,justifyContent: 'space-between', padding: '25px 50px 25px 50px'}}>
                        <FlexTextColumn>
                            <Table>
                                <tbody>
                                <TableRow>
                                    <TableCell><TextBlack14pxBold>Информация об объекте закупки</TextBlack14pxBold></TableCell>
                                    <TableCell><TextBlack14pxBold>ОКПД2</TextBlack14pxBold></TableCell>
                                    <TableCell><TextBlack14pxBold>Количество</TextBlack14pxBold></TableCell>
                                    <TableCell><TextBlack14pxBold>Цена</TextBlack14pxBold></TableCell>
                                    <TableCell><TextBlack14pxBold>Стоимость</TextBlack14pxBold></TableCell>
                                </TableRow>
                                {
                                    Object.values(tender.tender[0].notificationInfo?.purchaseObjectsInfo?.notDrugPurchaseObjectsInfo?.purchaseObject).map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{item?.name}</TableCell>

                                            <TableCell>
                                                {item.KTRU ? (item?.KTRU?.OKPD2?.OKPDCode) : item?.OKPD2?.OKPDCode }
                                            </TableCell>
                                            <TableCell>{item?.quantity?.value} {item?.OKEI?.nationalCode}</TableCell>
                                            <TableCell>{item?.price}</TableCell>
                                            <TableCell>{item?.sum}</TableCell>
                                        </TableRow>
                                    ))
                                }
                                </tbody>
                            </Table>
                            <FlexTextRow style={{justifyContent: 'flex-end'}}>
                                <TextBlack14pxBold>Итого: {tender.tender[0].notificationInfo?.purchaseObjectsInfo?.notDrugPurchaseObjectsInfo?.totalSum} ₽</TextBlack14pxBold>
                            </FlexTextRow>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    ) : null }
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
                                    Object.values(tender.tender[0].notificationInfo?.purchaseObjectsInfo?.notDrugPurchaseObjectsInfo?.purchaseObject)
                                        .map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                {item.KTRU ? (item?.KTRU?.OKPD2?.OKPDCode) : item?.OKPD2?.OKPDCode }
                                            </TableCell>
                                            <TableCell>
                                                <FlexTextColumn>
                                                    <FlexTextRow>
                                                        {item.name ? (
                                                            <TextBlack14pxRegular key={index}>{item?.name}</TextBlack14pxRegular>
                                                        ) : null}
                                                    </FlexTextRow>
                                                    {
                                                        item?.KTRU != null && item?.KTRU != undefined && item.KTRU.characteristics.characteristicsUsingTextForm ? (
                                                            <FlexTextColumn>
                                                                {item.KTRU && item.KTRU.characteristics.characteristicsUsingTextForm ? (Object.values(item.KTRU?.characteristics?.characteristicsUsingTextForm).map((item,index) => (
                                                                        <TextGray14pxRegular key={index}>{item?.name ? (item?.name) : ''} {item?.values?.value?.rangeSet?.min ? (item?.values?.value?.rangeSet?.min) : ''} {item?.values?.value?.OKEI?.nationalCode ? (item?.values?.value?.OKEI?.nationalCode) : ''}</TextGray14pxRegular>
                                                                    ))) :
                                                                    Object.values(item.OKPD2?.characteristics?.characteristicsUsingTextForm).map((item,index) => (
                                                                        <TextGray14pxRegular key={index}>{item?.name ? (item?.name) : ''} {item?.values?.value?.rangeSet?.min ? (item?.values?.value?.rangeSet?.min) : ''} {item?.values?.value?.OKEI?.nationalCode ? (item?.values?.value?.OKEI?.nationalCode) : ''}</TextGray14pxRegular>
                                                                    ))
                                                                }
                                                            </FlexTextColumn>
                                                        ) : ''
                                                    }
                                                </FlexTextColumn>
                                            </TableCell>
                                            <TableCell>{item?.OKEI?.name}</TableCell>
                                            <TableCell>{item?.OKEI?.name}</TableCell>
                                            <TableCell>{item?.quantity?.value}</TableCell>
                                            <TableCell>{item?.price}</TableCell>
                                            <TableCell>{item?.sum}</TableCell>
                                        </TableRow>
                                    ))
                                }
                                </tbody>
                            </Table>
                            <FlexTextRow style={{justifyContent: 'flex-end'}}>
                                <TextBlack22pxBold>Итого: {tender.tender[0].notificationInfo?.purchaseObjectsInfo?.notDrugPurchaseObjectsInfo?.totalSum} ₽</TextBlack22pxBold>
                            </FlexTextRow>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    <BorderedComtainer>
                        <TextBlack14pxBold>Условия контракта</TextBlack14pxBold>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Начальная (максимальная) цена контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.contractConditionsInfo?.maxPriceInfo?.maxPrice} российских рублей</TextBlack14pxRegular>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Источник финансирования</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.financingSourcesInfo?.budgetFinancingsInfo?.budgetInfo?.name}</TextBlack14pxRegular>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Идентификационный код закупки</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.IKZInfo?.purchaseCode}</TextBlack14pxRegular>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Место доставки товара, выполнения работы или оказания услуги</TextGray14pxRegular>
                            <TextBlack14pxRegular>
                                {tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.deliveryPlacesInfo?.deliveryPlaceInfo?.kladr?.fullName},
                                {tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.deliveryPlacesInfo?.deliveryPlaceInfo?.deliveryPlace}
                            </TextBlack14pxRegular>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Сроки поставки товара или завершения работы либо график оказания услуг</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].purchaseResponsibleInfo?.responsibleOrgInfo?.fullName}</TextBlack14pxRegular>
                        </FlexTextRow>
                    </BorderedComtainer>
                    <BorderedComtainer>
                        <TextBlack14pxBold>Преимущества и требования к участникам</TextBlack14pxBold>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Преимущества</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.preferensesInfo?.preferenseInfo?.preferenseRequirementInfo?.name}</TextBlack14pxRegular>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Требования к участникам</TextGray14pxRegular>
                            <ol>
                                {
                                    tender.tender[0].notificationInfo?.requirementsInfo?.requirementInfo?.map((item,index) => (
                                        <li>
                                            <TextBlack14pxRegular key={index}>{item.preferenseRequirementInfo?.name}</TextBlack14pxRegular>
                                        </li>
                                    ))
                                }
                            </ol>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Ограничения</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.restrictionsInfo?.restrictionInfo?.preferenseRequirementInfo?.name}</TextBlack14pxRegular>
                        </FlexTextRow>
                    </BorderedComtainer>
                    {tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee ? (
                    <BorderedComtainer>
                        <TextBlack14pxBold>Обеспечение исполнения контракта</TextBlack14pxBold>
                        {/*<FlexTextColumn>*/}
                        {/*    <TextGray14pxRegular style={{width: '35%'}}>Требуется обеспечение исполнения контракта</TextGray14pxRegular>*/}
                        {/*    <TextBlack14pxRegular></TextBlack14pxRegular>*/}
                        {/*</FlexTextColumn>*/}
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Размер обеспечения исполнения контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.amount} ({tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.part}) %</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Порядок предоставления обеспечения исполнения контракта, требования к обеспечению</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.procedureInfo}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Платежные реквизиты для обеспечения исполнения контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>р/с {tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.account?.settlementAccount} л/с {tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.account?.personalAccount}, БИК {tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.account?.bik}</TextBlack14pxRegular>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    ) : null }
                    {tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.applicationGuarantee ? (
                    <BorderedComtainer>
                        <TextBlack14pxBold>Обеспечение заявки</TextBlack14pxBold>
                        {/*<FlexTextColumn>*/}
                        {/*    <TextGray14pxRegular style={{width: '35%'}}>Требуется обеспечение исполнения контракта</TextGray14pxRegular>*/}
                        {/*    <TextBlack14pxRegular></TextBlack14pxRegular>*/}
                        {/*</FlexTextColumn>*/}
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Размер обеспечения исполнения контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.applicationGuarantee?.amount} ₽</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Порядок предоставления обеспечения исполнения контракта, требования к обеспечению</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.applicationGuarantee?.procedureInfo}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Платежные реквизиты для обеспечения исполнения контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>р/с {tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.applicationGuarantee?.account?.settlementAccount} л/с {tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.account?.personalAccount}, БИК {tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.account?.bik}</TextBlack14pxRegular>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    ) : null }
                    <BorderedComtainer>
                        <TextBlack14pxBold>Начальная(максимальная) цена контракта</TextBlack14pxBold>
                        {/*<FlexTextColumn>*/}
                        {/*    <TextGray14pxRegular style={{width: '35%'}}>Требуется обеспечение исполнения контракта</TextGray14pxRegular>*/}
                        {/*    <TextBlack14pxRegular></TextBlack14pxRegular>*/}
                        {/*</FlexTextColumn>*/}
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Начальная(максимальная) цена контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.contractConditionsInfo?.maxPriceInfo?.maxPrice}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Валюта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.contractConditionsInfo?.maxPriceInfo?.currency?.name}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Идентификационный номер закупки</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.IKZInfo?.purchaseCode}</TextBlack14pxRegular>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    <BorderOpeningContainer>
                        <FlexTextRow style={{alignItems: 'center'}}>
                            <TextBlack14pxBold style={{marginRight: '20px'}}>Документы закупки</TextBlack14pxBold>
                            <div
                                id="arrow"
                                onClick={handleClickThird}
                                style={{ transform: isThirdContainerVisible ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                                <Arrow />
                            </div>
                        </FlexTextRow>
                        {isThirdContainerVisible && (
                            <BorderFitContaienr >
                                {
                                    tender.tender[0]?.attachmentsInfo?.attachmentInfo?.map((item, index) => (
                                        <a key={index} href={`${item.url}`}>
                                            <TextBlue14pxRegular key={index}>{item.fileName}</TextBlue14pxRegular>
                                        </a>
                                    ))
                                }
                            </BorderFitContaienr>
                        )}
                    </BorderOpeningContainer>
                    <BorderOpeningContainer>
                        <FlexTextRow style={{alignItems: 'center'}}>
                            <TextBlack14pxBold style={{marginRight: '20px'}}>Протоколы</TextBlack14pxBold>
                            <div
                                id="arrow"
                                onClick={handleClickProtocols}
                                style={{ transform: isProtocolsContainerVisible ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                                <Arrow />
                            </div>
                        </FlexTextRow>
                        {isProtocolsContainerVisible && (
                            <BorderFitContaienr >
                                <FlexTextColumn>
                                    {
                                        tender.protocol?.map((item,index) => (
                                            <a href={`${item.id}`}>
                                                <TextBlue14pxRegular>Протокол {item.id} от {item.commonInfo?.signDT}</TextBlue14pxRegular>
                                            </a>
                                        ))
                                    }
                                </FlexTextColumn>
                            </BorderFitContaienr>
                        )}
                    </BorderOpeningContainer>
                    {tender.clarification[0]?.commonInfo ? (
                    <BorderOpeningContainer>
                        <FlexTextRow style={{alignItems: 'center'}}>
                            <TextBlack14pxBold style={{marginRight: '20px'}}>Разъяснения</TextBlack14pxBold>
                            <div
                                id="arrow"
                                onClick={handleClick}
                                style={{ transform: isSecondContainerVisible ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                                <Arrow />
                            </div>
                        </FlexTextRow>
                        {isSecondContainerVisible && (
                            <BorderFitContaienr >
                                <FlexTextColumn>
                                    {tender.clarification[0]?.commonInfo?.href ?
                                        (<a href={`${tender.clarification[0]?.commonInfo?.href}`}>
                                            <TextBlue14pxRegular>Запрос - ответ от {formatDate(tender.clarification[0]?.commonInfo?.docPublishDTInEIS)}</TextBlue14pxRegular>
                                        </a>) : null
                                    }
                                </FlexTextColumn>
                            </BorderFitContaienr>
                        )}
                    </BorderOpeningContainer>
                    ) : null }
                    <BorderedComtainer>
                        <TextBlack14pxBold>Информация о сроках исполнения контракта и источниках финансирования</TextBlack14pxBold>
                        {/*<FlexTextColumn>*/}
                        {/*    <TextGray14pxRegular style={{width: '35%'}}>Требуется обеспечение исполнения контракта</TextGray14pxRegular>*/}
                        {/*    <TextBlack14pxRegular></TextBlack14pxRegular>*/}
                        {/*</FlexTextColumn>*/}
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Дата начала исполнения контрактаы</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.contractExecutionTermsInfo?.notRelativeTermsInfo?.startDate}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Срок исполнения контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.contractExecutionTermsInfo?.notRelativeTermsInfo?.endDate}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Количество этапов</TextGray14pxRegular>
                            <TextBlack14pxRegular>{
                              tender.tender[0].notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.contractExecutionPaymentPlan.stagesInfo.length
                            }</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Наименование бюджета</TextGray14pxRegular>
                            <TextBlack14pxRegular>{
                                tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.financingSourcesInfo?.budgetFinancingsInfo?.budgetInfo?.name
                            }</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Код территории муниципального образования</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.contractExecutionPaymentPlan.financingSourcesInfo.budgetFinancingsInfo.OKTMOInfo.code}: {tender.tender[0].notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.contractExecutionPaymentPlan.financingSourcesInfo.budgetFinancingsInfo.OKTMOInfo.name}</TextBlack14pxRegular>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    <BorderedComtainer>
                        <TextBlack14pxBold>Требования к гарантии качества товара, работы, услуги</TextBlack14pxBold>
                        {/*<FlexTextColumn>*/}
                        {/*    <TextGray14pxRegular style={{width: '35%'}}>Требуется обеспечение исполнения контракта</TextGray14pxRegular>*/}
                        {/*    <TextBlack14pxRegular></TextBlack14pxRegular>*/}
                        {/*</FlexTextColumn>*/}
                        {tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.warrantyInfo ? (
                            <FlexTextColumn>
                                <TextGray14pxRegular style={{width: '35%'}}>Срок, на который предоставляется гарантия и (или) требования к объёму предоставления гарантий качества товара.</TextGray14pxRegular>
                                <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.warrantyInfo?.warrantyTerm}</TextBlack14pxRegular>
                            </FlexTextColumn>
                        ) : null}
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Финансовое обеспечение закупки</TextGray14pxRegular>
                            <Table>
                                <tbody>
                                <TableRow>
                                    <TableCell><TextGray14pxRegular>НА 2023 ГОД, ₽</TextGray14pxRegular></TableCell>
                                    <TableCell><TextGray14pxRegular>НА 2024 ГОД, ₽</TextGray14pxRegular></TableCell>
                                    <TableCell><TextGray14pxRegular>НА 2025 ГОД, ₽</TextGray14pxRegular></TableCell>
                                    <TableCell><TextGray14pxRegular>НА ПОСЛЕДУЩИЕ ГОДЫ, ₽</TextGray14pxRegular></TableCell>
                                    <TableCell><TextGray14pxRegular>ВСЕГО, ₽</TextGray14pxRegular></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{tender.tender[0].notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.contractExecutionPaymentPlan.financingSourcesInfo.financeInfo.currentYear}</TableCell>
                                    <TableCell>{tender.tender[0].notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.contractExecutionPaymentPlan.financingSourcesInfo.financeInfo.firstYear}</TableCell>
                                    <TableCell>{tender.tender[0].notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.contractExecutionPaymentPlan.financingSourcesInfo.financeInfo.secondYear}</TableCell>
                                    <TableCell>{tender.tender[0].notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.contractExecutionPaymentPlan.financingSourcesInfo.financeInfo.subsecYears}</TableCell>
                                    <TableCell>{tender.tender[0].notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.contractExecutionPaymentPlan.financingSourcesInfo.financeInfo.total}</TableCell>
                                </TableRow>
                                </tbody>
                            </Table>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>За счет бюджетных средств</TextGray14pxRegular>
                            <Table>
                                <tbody>
                                <TableRow>
                                    <TableCell><TextGray14pxRegular>КБК</TextGray14pxRegular></TableCell>
                                    <TableCell><TextGray14pxRegular>НА 2023 ГОД, ₽</TextGray14pxRegular></TableCell>
                                    <TableCell><TextGray14pxRegular>НА 2024 ГОД, ₽</TextGray14pxRegular></TableCell>
                                    <TableCell><TextGray14pxRegular>НА 2025 ГОД, ₽</TextGray14pxRegular></TableCell>
                                    <TableCell><TextGray14pxRegular>НА ПОСЛЕДУЩИЕ ГОДЫ, ₽</TextGray14pxRegular></TableCell>
                                    <TableCell><TextGray14pxRegular>ВСЕГО, ₽</TextGray14pxRegular></TableCell>
                                </TableRow>
                                {
                                    Object.values(tender.tender[0].notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.contractExecutionPaymentPlan.stagesInfo).map((item, index) => (
                                        <TableRow>
                                            <TableCell>{item?.budgetFinancingsInfo?.budgetFinancingInfo?.KBK}</TableCell>
                                            <TableCell>{item?.budgetFinancingsInfo?.budgetFinancingInfo?.paymentYearInfo?.currentYear}</TableCell>
                                            <TableCell>{item?.budgetFinancingsInfo?.budgetFinancingInfo?.paymentYearInfo?.firstYear}</TableCell>
                                            <TableCell>{item?.budgetFinancingsInfo?.budgetFinancingInfo?.paymentYearInfo?.secondYear}</TableCell>
                                            <TableCell>{item?.budgetFinancingsInfo?.budgetFinancingInfo?.paymentYearInfo?.subsecYears}</TableCell>
                                            <TableCell>{item?.budgetFinancingsInfo?.budgetFinancingInfo?.paymentYearInfo?.total}</TableCell>
                                        </TableRow>
                                    ))
                                }

                                </tbody>
                            </Table>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    <BorderedComtainer>
                        <TextBlack14pxBold>Обеспечение гарантийных обязательств</TextBlack14pxBold>
                        {/*<FlexTextColumn>*/}
                        {/*    <TextGray14pxRegular style={{width: '35%'}}>Требуется обеспечение исполнения контракта</TextGray14pxRegular>*/}
                        {/*    <TextBlack14pxRegular></TextBlack14pxRegular>*/}
                        {/*</FlexTextColumn>*/}
                        {tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.provisionWarranty ? (
                            <FlexTextColumn>
                                <TextGray14pxRegular style={{width: '35%'}}>Требуется обеспечение гарантийных обязательств</TextGray14pxRegular>
                                <TextBlack14pxRegular>Да</TextBlack14pxRegular>
                            </FlexTextColumn>
                        ) : null}
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Размер обеспечение гарантийных обязательств</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.provisionWarranty?.amount} Российский рубль</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Порядок предоставления обеспечения гарантийных обязательств, требования к обеспечению</TextGray14pxRegular>
                            <TextBlack14pxRegular>{
                                tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.provisionWarranty?.procedureInfo
                            }</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Наименование бюджета</TextGray14pxRegular>
                            <TextBlack14pxRegular>{
                                tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.financingSourcesInfo?.budgetFinancingsInfo?.budgetInfo?.name
                            }</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Код территории муниципального образования</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.contractExecutionPaymentPlan.financingSourcesInfo.budgetFinancingsInfo.OKTMOInfo.code}: {tender.tender[0].notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.contractExecutionPaymentPlan.financingSourcesInfo.budgetFinancingsInfo.OKTMOInfo.name}</TextBlack14pxRegular>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    <JsonRenderer tenderID={id}/>
                </RightSideSection65>
            </PageContainer>
        </Fragment>
    );
}
