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
import {CriterialInfo} from "../TenderComponents/CriterialInfo/CriterialInfo";
import {ZakupkiInfo} from "../../components/ZakupkiInfo/ZakupkiInfo";

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

    setTimeout(() => console.log('warranty', tender?.tender[0]));

    return (
        <Fragment>
            <PageContainer>
                <LeftSideSection35>
                    {tender?.tender[0]?.commonInfo ? (
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
                            <TextGray14pxRegular>Официальный сайт</TextGray14pxRegular>
                            <a href={tender?.tender?.[0]?.commonInfo?.ETP?.url}>
                            <TextBlack14pxRegular>{tender?.tender?.[0]?.commonInfo?.ETP?.url}</TextBlack14pxRegular>
                            </a>
                        </FlexTextColumn>
                    </BorderedComtainer>) : null}
                    {tender?.tender[0]?.purchaseResponsibleInfo?.responsibleOrgInfo ? (
                    <BorderedComtainer>
                        <TextBlack14pxBold>Контактная информация</TextBlack14pxBold>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Организация</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.purchaseResponsibleInfo?.responsibleOrgInfo?.fullName}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Фактический адрес</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.purchaseResponsibleInfo?.responsibleOrgInfo?.factAddress}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Почтовый адрес</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.purchaseResponsibleInfo?.responsibleOrgInfo?.postAddress}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Контакты</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.purchaseResponsibleInfo?.responsibleInfo?.contactPersonInfo?.firstName} {tender?.tender[0]?.purchaseResponsibleInfo?.responsibleInfo?.contactPersonInfo?.middleName} {tender?.tender[0]?.purchaseResponsibleInfo?.responsibleInfo?.contactPersonInfo?.lastName}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Телефон</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.purchaseResponsibleInfo?.responsibleInfo?.contactPhone}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Электронная почта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.purchaseResponsibleInfo?.responsibleInfo?.contactEMail}</TextBlack14pxRegular>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    ) : null }
                </LeftSideSection35>
                <RightSideSection65>
                     { tender?.tender[0]?.notificationInfo ?
                        (<BorderedComtainer style={{flexDirection: 'row' ,justifyContent: 'space-between', padding: '25px 50px 25px 50px'}}>
                        <FlexTextColumn style={{width: 'fit-content'}}>
                            <TextGray14pxRegular>Цена контракта</TextGray14pxRegular>
                            <TextBlack22pxBold>{tender?.tender[0]?.notificationInfo?.contractConditionsInfo?.maxPriceInfo?.maxPrice} ₽</TextBlack22pxBold>
                        </FlexTextColumn>
                            {tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.applicationGuarantee?.amount ? (
                        <FlexTextColumn style={{width: 'fit-content'}}>
                            <TextGray14pxRegular>Обеспечение заявки</TextGray14pxRegular>
                            <TextBlack22pxBold>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.applicationGuarantee?.amount} ₽</TextBlack22pxBold>
                        </FlexTextColumn> ) : null }
                            {tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.amount ? (
                        <FlexTextColumn style={{width: 'fit-content'}}>
                            <TextGray14pxRegular>Обеспечение контракта</TextGray14pxRegular>
                            <TextBlack22pxBold>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.amount} ₽</TextBlack22pxBold>
                        </FlexTextColumn> ) : null }
                    </BorderedComtainer>)
                        : null }
                    { tender?.tender[0]?.notificationInfo?.procedureInfo ?
                        (
                            <BorderedComtainer>
                            <TextBlack22pxBold>Информация о процедуре закупки</TextBlack22pxBold>
                            {tender?.tender[0]?.notificationInfo?.procedureInfo?.collectingInfo?.startDT ?
                                (<FlexTextRow>
                                    <TextGray14pxRegular>Дата и время начала срока подачи заявок</TextGray14pxRegular>
                                    <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.procedureInfo?.collectingInfo?.startDT}</TextBlack14pxRegular>
                                </FlexTextRow>)
                               : null }
                            {tender?.tender[0]?.notificationInfo?.procedureInfo?.collectingInfo?.endDT ?
                                (<FlexTextRow>
                                    <TextGray14pxRegular>Дата и время окончания срока подачи заявок</TextGray14pxRegular>
                                    <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.procedureInfo?.collectingInfo?.endDT}</TextBlack14pxRegular>
                                </FlexTextRow>) : null }
                            {tender?.tender[0]?.notificationInfo?.procedureInfo?.biddingDate ?
                                (<FlexTextRow>
                                    <TextGray14pxRegular>Дата проведения процедуры подачи предложений о цене контракта либо о сумме цен единиц товара, работы, услуги</TextGray14pxRegular>
                                    <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.procedureInfo?.biddingDate}</TextBlack14pxRegular>
                                </FlexTextRow>) : null }
                                {tender?.tender[0]?.notificationInfo?.procedureInfo?.firstPartsDate ?
                                    (<FlexTextRow>
                                        <TextGray14pxRegular>Дата окончания срока рассмотрения и оценки первых частей заявок</TextGray14pxRegular>
                                        <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.procedureInfo?.firstPartsDate}</TextBlack14pxRegular>
                                    </FlexTextRow>) : null }
                                {tender?.tender[0]?.notificationInfo?.procedureInfo?.submissionProcedureDate ?
                                    (<FlexTextRow>
                                        <TextGray14pxRegular>Дата проведения процедуры подачи предложений о цене контракта</TextGray14pxRegular>
                                        <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.procedureInfo?.submissionProcedureDate}</TextBlack14pxRegular>
                                    </FlexTextRow>) : null }
                                {tender?.tender[0]?.notificationInfo?.procedureInfo?.secondPartsDate ?
                                    (<FlexTextRow>
                                        <TextGray14pxRegular>Дата окончания срока рассмотрения и оценки вторых частей заявок</TextGray14pxRegular>
                                        <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.procedureInfo?.secondPartsDate}</TextBlack14pxRegular>
                                    </FlexTextRow>) : null }
                            {tender?.tender[0]?.notificationInfo?.procedureInfo?.summarizingDate ?
                                (<FlexTextRow>
                                    <TextGray14pxRegular>Дата подведения итогов определения поставщика (подрядчика, исполнителя)</TextGray14pxRegular>
                                    <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.procedureInfo?.summarizingDate}</TextBlack14pxRegular>
                                </FlexTextRow>) : null }
                        </BorderedComtainer>)
                        : null }
                    <ZakupkiInfo data={tender?.tender[0]?.notificationInfo?.purchaseObjectsInfo?.notDrugPurchaseObjectsInfo}/>
                    <BorderedComtainer>
                        <TextBlack14pxBold>Условия контракта</TextBlack14pxBold>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Начальная (максимальная) цена контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.contractConditionsInfo?.maxPriceInfo?.maxPrice} российских рублей</TextBlack14pxRegular>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Источник финансирования</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.financingSourcesInfo?.budgetFinancingsInfo?.budgetInfo?.name}</TextBlack14pxRegular>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Идентификационный код закупки</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.IKZInfo?.purchaseCode}</TextBlack14pxRegular>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Место доставки товара, выполнения работы или оказания услуги</TextGray14pxRegular>
                            <TextBlack14pxRegular>
                                {tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.deliveryPlacesInfo?.deliveryPlaceInfo?.deliveryPlace}
                            </TextBlack14pxRegular>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Предусмотрена возможность одностороннего отказа от исполнения контракта в соответствии со ст. 95 Закона № 44-ФЗ</TextGray14pxRegular>
                            <TextBlack14pxRegular>
                                {tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.isOneSideRejectionSt95 ? "Да" : "Нет"}
                            </TextBlack14pxRegular>
                        </FlexTextRow>
                    </BorderedComtainer>
                    <BorderedComtainer>
                        <TextBlack14pxBold>Преимущества и требования к участникам</TextBlack14pxBold>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Преимущества</TextGray14pxRegular>
                            <TextBlack14pxRegular>{
                                tender?.tender[0]?.notificationInfo?.preferensesInfo?.preferenseInfo?.preferenseRequirementInfo?.name ?
                                tender?.tender[0]?.notificationInfo?.preferensesInfo?.preferenseInfo?.preferenseRequirementInfo?.name :
                            "Не установлены"
                            }</TextBlack14pxRegular>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Требования к участникам</TextGray14pxRegular>
                            { tender?.tender[0]?.notificationInfo?.requirementsInfo?.requirementInfo?.length ?
                                (<ol>
                                { tender?.tender[0]?.notificationInfo?.requirementsInfo?.requirementInfo?.map((item,index) => (
                                        <li>
                                            <TextBlack14pxRegular key={index}>{item.preferenseRequirementInfo?.name}</TextBlack14pxRegular>
                                        </li>

                                    ))
                                }
                            </ol>) : <TextBlack14pxRegular> Не установлены </TextBlack14pxRegular>
                            }
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Ограничения</TextGray14pxRegular>
                            <TextBlack14pxRegular>{
                                tender?.tender[0]?.notificationInfo?.restrictionsInfo?.restrictionInfo?.preferenseRequirementInfo?.name ?
                                    tender?.tender[0]?.notificationInfo?.restrictionsInfo?.restrictionInfo?.preferenseRequirementInfo?.name :
                                    "Не установлены"
                            }</TextBlack14pxRegular>
                        </FlexTextRow>
                    </BorderedComtainer>
                    {tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee ? (
                    <BorderedComtainer>
                        <TextBlack14pxBold>Обеспечение исполнения контракта</TextBlack14pxBold>
                        {/*<FlexTextColumn>*/}
                        {/*    <TextGray14pxRegular style={{width: '35%'}}>Требуется обеспечение исполнения контракта</TextGray14pxRegular>*/}
                        {/*    <TextBlack14pxRegular></TextBlack14pxRegular>*/}
                        {/*</FlexTextColumn>*/}
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Размер обеспечения исполнения контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.amount} ({tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.part}) %</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Порядок предоставления обеспечения исполнения контракта, требования к обеспечению</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.procedureInfo}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Платежные реквизиты для обеспечения исполнения контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>р/с {tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.account?.settlementAccount} л/с {tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.account?.personalAccount}, БИК {tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.account?.bik}</TextBlack14pxRegular>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    ) : null }
                    {tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.applicationGuarantee ? (
                    <BorderedComtainer>
                        <TextBlack14pxBold>Обеспечение заявки</TextBlack14pxBold>
                        {/*<FlexTextColumn>*/}
                        {/*    <TextGray14pxRegular style={{width: '35%'}}>Требуется обеспечение исполнения контракта</TextGray14pxRegular>*/}
                        {/*    <TextBlack14pxRegular></TextBlack14pxRegular>*/}
                        {/*</FlexTextColumn>*/}
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Размер обеспечения исполнения контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.applicationGuarantee?.amount} ₽</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Порядок предоставления обеспечения исполнения контракта, требования к обеспечению</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.applicationGuarantee?.procedureInfo}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Платежные реквизиты для обеспечения исполнения контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>р/с {tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.applicationGuarantee?.account?.settlementAccount} л/с {tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.account?.personalAccount}, БИК {tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.account?.bik}</TextBlack14pxRegular>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    ) : null }
                    <BorderedComtainer>
                        <TextBlack14pxBold>Начальная(максимальная) цена контракта</TextBlack14pxBold>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Начальная(максимальная) цена контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.contractConditionsInfo?.maxPriceInfo?.maxPrice}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Валюта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.contractConditionsInfo?.maxPriceInfo?.currency?.name}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Идентификационный номер закупки</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.IKZInfo?.purchaseCode}</TextBlack14pxRegular>
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
                                    tender?.tender[0]?.attachmentsInfo?.attachmentInfo?.map((item, index) => (
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
                                        tender?.protocol?.map((item,index) => (
                                            <a href={`${item.id}`}>
                                                <TextBlue14pxRegular>Протокол {item.id} от {item.commonInfo?.signDT}</TextBlue14pxRegular>
                                            </a>
                                        ))
                                    }
                                </FlexTextColumn>
                            </BorderFitContaienr>
                        )}
                    </BorderOpeningContainer>
                    {tender?.clarification[0]?.commonInfo ? (
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
                                    {tender?.clarification[0]?.commonInfo?.href ?
                                        (<a href={`${tender?.clarification[0]?.commonInfo?.href}`}>
                                            <TextBlue14pxRegular>Запрос - ответ от {formatDate(tender?.clarification[0]?.commonInfo?.docPublishDTInEIS)}</TextBlue14pxRegular>
                                        </a>) : null
                                    }
                                </FlexTextColumn>
                            </BorderFitContaienr>
                        )}
                    </BorderOpeningContainer>
                    ) : null }
                    { tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan ? (
                    <BorderedComtainer>
                        <TextBlack14pxBold>Информация о сроках исполнения контракта и источниках финансирования</TextBlack14pxBold>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Дата начала исполнения контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{
                                tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.contractExecutionTermsInfo?.notRelativeTermsInfo?.isFromConclusionDate ?
                                   'с даты заключения контракта' :
                                tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.contractExecutionTermsInfo?.notRelativeTermsInfo?.startDate }</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Срок исполнения контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.contractExecutionTermsInfo?.notRelativeTermsInfo?.endDate}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        {tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.stagesInfo?.length ? (
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Количество этапов</TextGray14pxRegular>
                            <TextBlack14pxRegular>{
                              tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.stagesInfo?.length
                            }</TextBlack14pxRegular>
                        </FlexTextColumn> ) : null }
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Наименование бюджета</TextGray14pxRegular>
                            <TextBlack14pxRegular>{
                                tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.financingSourcesInfo?.budgetFinancingsInfo?.budgetInfo?.name
                            }</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Код территории муниципального образования</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.financingSourcesInfo?.budgetFinancingsInfo?.OKTMOInfo?.code}: {tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.financingSourcesInfo?.budgetFinancingsInfo?.OKTMOInfo?.name}</TextBlack14pxRegular>
                        </FlexTextColumn>
                    </BorderedComtainer> ) : null }
                    {tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.warrantyInfo ? (
                    <BorderedComtainer>
                        <TextBlack14pxBold>Требования к гарантии качества товара, работы, услуги</TextBlack14pxBold>
                            <FlexTextColumn>
                                <TextGray14pxRegular style={{width: '35%'}}>Требуется гарантия качества товара, работы, услуги</TextGray14pxRegular>
                                <TextBlack14pxRegular> Да </TextBlack14pxRegular>
                                <TextGray14pxRegular style={{width: '35%'}}>Срок, на который предоставляется гарантия и (или) требования к объёму предоставления гарантий качества товара.</TextGray14pxRegular>
                                <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.warrantyInfo?.warrantyTerm}</TextBlack14pxRegular>
                                <TextGray14pxRegular style={{width: '35%'}}>Информация о требованиях к гарантийному обслуживанию товара</TextGray14pxRegular>
                                <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.warrantyInfo?.manufacturersWarrantyRequirement}</TextBlack14pxRegular>
                                <TextGray14pxRegular style={{width: '35%'}}>Срок, на который предоставляется гарантия и (или) требования к объёму предоставления гарантий качества товара.</TextGray14pxRegular>
                                <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.warrantyInfo?.warrantyServiceRequirement}</TextBlack14pxRegular>
                            </FlexTextColumn>
                        </BorderedComtainer>
                    ) : null }
                        <BorderedComtainer>
                        { tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.financingSourcesInfo?.financeInfo ? (
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
                                    <TableCell>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.financingSourcesInfo?.financeInfo?.currentYear}</TableCell>
                                    <TableCell>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.financingSourcesInfo?.financeInfo?.firstYear}</TableCell>
                                    <TableCell>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.financingSourcesInfo?.financeInfo?.secondYear}</TableCell>
                                    <TableCell>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.financingSourcesInfo?.financeInfo?.subsecYears}</TableCell>
                                    <TableCell>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.financingSourcesInfo?.financeInfo?.total}</TableCell>
                                </TableRow>
                                </tbody>
                            </Table>
                        </FlexTextColumn> ) : null}
                        {
                            tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.stagesInfo ? (
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
                                        Object.values(tender?.tender[0]?.notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.contractExecutionPaymentPlan.stagesInfo).map((item, index) =>
                                            (
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
                        ) : null }
                    </BorderedComtainer>
                    <BorderedComtainer>
                        <TextBlack14pxBold>Обеспечение гарантийных обязательств</TextBlack14pxBold>
                        {tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.provisionWarranty ? (
                            <FlexTextColumn>
                                <TextGray14pxRegular style={{width: '35%'}}>Требуется обеспечение гарантийных обязательств</TextGray14pxRegular>
                                <TextBlack14pxRegular>Да</TextBlack14pxRegular>
                            </FlexTextColumn>
                        ) : null}
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Размер обеспечение гарантийных обязательств</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.provisionWarranty?.amount} Российский рубль</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Порядок предоставления обеспечения гарантийных обязательств, требования к обеспечению</TextGray14pxRegular>
                            <TextBlack14pxRegular>{
                                tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.provisionWarranty?.procedureInfo
                            }</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Наименование бюджета</TextGray14pxRegular>
                            <TextBlack14pxRegular>{
                                tender?.tender[0]?.notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.contractExecutionPaymentPlan?.financingSourcesInfo?.budgetFinancingsInfo?.budgetInfo?.name
                            }</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Код территории муниципального образования</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender?.tender[0]?.notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.contractExecutionPaymentPlan.financingSourcesInfo.budgetFinancingsInfo.OKTMOInfo.code}: {tender?.tender[0]?.notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.contractExecutionPaymentPlan.financingSourcesInfo.budgetFinancingsInfo.OKTMOInfo.name}</TextBlack14pxRegular>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    {
                        tender?.tender[0]?.notificationInfo?.criteriaInfo ? (
                           <CriterialInfo criterias={tender?.tender[0]?.notificationInfo?.criteriaInfo?.criterionInfo}/>
                        ) : null
                    }
                    <JsonRenderer tenderID={id}/>
                </RightSideSection65>
            </PageContainer>
        </Fragment>
    )}
