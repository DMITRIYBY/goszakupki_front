import {FC, Fragment, useState, useEffect} from 'react'
import {
    Atext14pxBlue,
    BorderedComtainer, BorderFitContaienr,
    BorderOpeningContainer, Table, TableRow, TableCell,
    LeftSideSection35,
    PageContainer,
    RightSideSection65, OrderedList, ListItem, LoaderTest
} from "./styles";
import {
    TextBlack14pxBold,
    TextBlack14pxRegular,
    TextBlack22pxBold, TextBlack22pxRegular,
    TextBlue14pxRegular, TextGray11pxRegular,
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
import {CriterialInfoFixed} from "../TenderComponents/CriterialInfo/CriterialInfoFixed";
import {ZakupkiInfo} from "../../components/ZakupkiInfo/ZakupkiInfo";
import { TailSpin } from 'react-loader-spinner';
import {TenderCard44} from "./TenderCard44";
import {TenderCard223} from "./TenderCard223";

export const TenderCard = () => {

    const [tender, setTender] = useState()
    const { id } = useParams();
    const [isSecondContainerVisible, setSecondContainerVisible] = useState(false);
    const [isThirdContainerVisible, setThirdContainerVisible] = useState(false);
    const [isProtocolsContainerVisible, setProtocolsContainerVisible] = useState(false);
    const [loading, setLoading] = useState(true)

    const formatDate = (originalDate) => {
        const parsedDate = parseISO(originalDate);
        return format(parsedDate, 'dd.MM.yyyy');
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}client/tender?id=${id}`, { timeout: 0, maxContentLength: 0 });
                console.log(response.data)
                setTender(response.data);
                setLoading(false)
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

    const getEvents = () => {
        if (tender) {
            const placement = tender?.tender[0]?.commonInfo?.ETP?.name
            const events = [
                {
                    date: (new Date(tender?.tender[0]?.commonInfo?.publishDTInEIS)).toLocaleString(),
                    message: `Размещено извещение №${tender?.tender[0]?.commonInfo?.purchaseNumber} от ${(new Date(tender?.tender[0]?.commonInfo?.publishDTInEIS)).toLocaleDateString()}`,
                    ndate: new Date(tender?.tender[0]?.commonInfo?.publishDTInEIS)
                }]
            tender.protocols = Array.from([tender?.protocol, tender?.protocolCancel, tender?.protocolDeviation, tender?.protocolEvasion, tender?.protocolEvDevCancel]).flat();
            console.log('protocols', tender?.protocols)
            tender?.protocols?.length && tender?.protocols?.forEach(proto => {

                const protocol = {...proto}

                protocol.pubDate = new Date(protocol?.commonInfo?.publishDTInEIS)
                if (protocol?.commonInfo?.docNumber) {
                    switch (protocol.commonInfo.docNumber) {
                        case "ИЭА1": {
                            events.push({
                                date: protocol?.pubDate?.toLocaleString(),
                                message: `От электронной площадки ${placement} получен протокол подачи ценовых предложений. `,
                                ndate: protocol?.pubDate
                            });
                            events.push(
                                {
                                    date: protocol?.pubDate?.toLocaleString(),
                                    message: `Размещен «Протокол подведения итогов определения поставщика (подрядчика, исполнителя)
                                     от ${protocol?.pubDate?.toLocaleDateString()} №${protocol?.commonInfo?.docNumber}» для закупки
                                     №${tender?.tender[0]?.commonInfo?.purchaseNumber}`,
                                    ndate: protocol?.pubDate
                                })
                            break;
                        }
                        case "ЦПА1": {
                            events.push({
                                date: protocol?.pubDate?.toLocaleString(),
                                message: `От электронной площадки ${placement} получен  протокол подведения итогов определения поставщика (подрядчика, исполнителя). `,
                                ndate: protocol?.pubDate
                            });
                            events.push(
                                {
                                    date: protocol?.pubDate?.toLocaleString(),
                                    message: `Размещен «Протокол подачи ценовых предложений
                                     от ${protocol?.pubDate?.toLocaleDateString()} №${protocol?.commonInfo?.docNumber}» для закупки
                                     №${tender?.tender[0]?.commonInfo?.purchaseNumber}`,
                                    ndate: protocol?.pubDate
                                })
                            break;
                        }
                    }
                } else {
                    events.push(
                        {
                            date: protocol?.pubDate?.toLocaleString(),
                            message: `Размещен протокол ${protocol?.externalId} от ${protocol?.pubDate?.toLocaleDateString()}`,
                            ndate: protocol?.pubDate
                        })
                }

            });
            if (tender?.tender[0]?.notificationInfo?.procedureInfo?.collectingInfo?.startDT && tender?.tender[0]?.notificationInfo?.procedureInfo?.collectingInfo?.endDT) {
                const collectingStartDate = new Date(tender?.tender[0].notificationInfo.procedureInfo.collectingInfo?.startDT)
                const collectingEndDate = new Date(tender?.tender[0].notificationInfo.procedureInfo.collectingInfo?.endDT)
                if (collectingStartDate <= new Date())
                    events.push
                    ({
                        date: collectingStartDate.toLocaleString(),
                        message: `Закупка №${tender?.tender[0]?.commonInfo.purchaseNumber} переведена на этап «Подача заявок»`,
                        ndate: collectingStartDate
                    })
                if (collectingEndDate && collectingEndDate <= new Date())
                events.push({
                    date: collectingEndDate.toLocaleString(),
                    message: `Закупка №${tender?.tender[0]?.commonInfo?.purchaseNumber} автоматически переведена на этап «Работа комиссии» `,
                    ndate: collectingEndDate
                })
            }
            if (tender?.result?.length) {
                events.push({
                    date: new Date(tender?.result[0]?.createDate).toLocaleString(),
                    message: `Закупка №${tender?.tender[0]?.commonInfo?.purchaseNumber} автоматически переведена 
            на этап «Определение поставщика завершено» в связи с размещением протокола, завершающего работу комиссии`,
                    ndate: new Date(tender?.result[0]?.createDate)
                })
            }

            return events.sort((a, b) => {
                   return  a.ndate < b.ndate ? 1 :
                             a.ndate > b.ndate ? -1 :
                                 a.message[0] !== b.message[0] ? 1 : -1
                }
             )
        }
    }

    const events = getEvents()

    return (


        <Fragment>
                 {
                     loading ?
                     <LoaderTest>
                         <TailSpin color="#3294F4" height={150} width={150} />
                     </LoaderTest>
                          :
                                tender?.tender[0]?.fz === 'fz44' ?
                                                    <TenderCard44 tender={tender}/>
                                     :
                                                    <TenderCard223 tender={tender}/>
                     }
        </Fragment>
    )}
