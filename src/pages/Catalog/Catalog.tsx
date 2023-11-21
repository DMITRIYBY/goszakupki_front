import {FC, Fragment, useEffect, useState} from "react";
import {TenderPreiewCard} from "../../components/TenderPreviewCard/TenderPreiewCard";
import {PageContainer} from "../TenderCard/styles";
import tendersDB from './many_tenders.json'
import {CatalogPage, DocumentsCount, FindByIDButton, FinderByID, ShowCount} from "./styles";
import axios from "axios";
import { Link } from "react-router-dom";
import {TextBlack14pxRegular, TextBlack22pxRegular, TextGray14pxRegular} from "../../constants/fonts";
import {FlexRow, FlexTextRow} from "../../containers/containers";

const test_catalog_data = [
    {
        "_id": "6556917ac3762f423a126de3",
        "id": "34092723",
        "externalId": "2DFBB298-5CB9-46A2-A0ED-E2056A8E87C801",
        "versionNumber": "1",
        "commonInfo": {
            "purchaseNumber": "034",
            "docNumber": "№0348100062023000258",
            "plannedPublishDate": "2023-11-03+05:00",
            "publishDTInEIS": "2023-11-03T13:33:17.376+05:00",
            "href": "https://zakupki.gov.ru/epz/order/notice/ea20/view/common-info.html?regNumber=0348100062023000258",
            "notPublishedOnEIS": "true",
            "placingWay": {
                "code": "EAP20",
                "name": "Электронный аукцион"
            },
            "ETP": {
                "code": "ETP_SBAST",
                "name": "АО «Сбербанк-АСТ»",
                "url": "http://www.sberbank-ast.ru"
            },
            "contractConclusionOnSt83Ch2": "true",
            "purchaseObjectInfo": "Поставка бумаги для офисной техники"
        },
        "purchaseResponsibleInfo": {
            "responsibleOrgInfo": {
                "regNum": "03481000620",
                "consRegistryNum": "55280616",
                "fullName": "УПРАВЛЕНИЕ ПО РАЗМЕЩЕНИЮ ЗАКАЗА АДМИНИСТРАЦИИ ГОРОДА БАЙКОНУР",
                "shortName": "УПРАВЛЕНИЕ ПО РАЗМЕЩЕНИЮ ЗАКАЗА АДМИНИСТРАЦИИ ГОРОДА БАЙКОНУР",
                "postAddress": "468320, Байконур г, пр. академика Королева, д. 33",
                "factAddress": "Российская Федерация, 468320, Байконур г, ПРОСПЕКТ АКАДЕМИКА КОРОЛЕВА, 33",
                "INN": "9901033738",
                "KPP": "990101001"
            },
            "responsibleRole": "RA",
            "responsibleInfo": {
                "orgPostAddress": "468320, Байконур г, пр. академика Королева, д. 33",
                "orgFactAddress": "Российская Федерация, 468320, Байконур г, ПРОСПЕКТ АКАДЕМИКА КОРОЛЕВА, 33",
                "contactPersonInfo": {
                    "lastName": "Горшенина",
                    "firstName": "Анна",
                    "middleName": "Игоревна"
                },
                "contactEMail": "adm-kdu@yandex.ru",
                "contactPhone": "7-33622-75295",
                "contactFax": "7-33622-75293",
                "addInfo": "ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ \"БЮРО СУДЕБНО-МЕДИЦИНСКОЙ ЭКСПЕРТИЗЫ ГОРОДА БАЙКОНУР\". Место нахождения: Российская Федерация, 468320, Байконур г, УЛ. ПИОНЕРСКАЯ, ЗД. 10. Почтовый адрес:Российская Федерация, 468320, Байконур г, УЛИЦА ПИОНЕРСКАЯ, здание 10. Телефон: 8-33622-50082. Адрес электронной почты: gbubsme@baykonur.ru Ответственное лицо: НУРИМОВА ЗАРИНА СЕРИКОВНА."
            }
        },
        "printFormInfo": {
            "url": "https://zakupki.gov.ru/epz/order/notice/printForm/view.html?regNumber=0348100062023000258"
        },
        "attachmentsInfo": {
            "attachmentInfo": [
                {
                    "publishedContentId": "09381E36D32DC5EFE06334548D0A2DA5",
                    "fileName": "Приложение № 2 к извещению_обоснование НМЦК.doc",
                    "fileSize": "90624",
                    "docDescription": "Обоснование начальной (максимальной) цены контракта",
                    "docDate": "2023-11-03T11:30:40+03:00",
                    "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=09381E36D32DC5EFE06334548D0A2DA5",
                    "docKindInfo": {
                        "code": "MRJ",
                        "name": "Обоснование начальной (максимальной) цены контракта"
                    },
                    "cryptoSigns": {}
                },
                {
                    "publishedContentId": "0938C80994E8F16CE06334548D0A8AFF",
                    "fileName": "Приложение № 4 к извещению_проект контракта.doc",
                    "fileSize": "189440",
                    "docDescription": "Проект государственного контракта",
                    "docDate": "2023-11-03T11:30:40+03:00",
                    "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=0938C80994E8F16CE06334548D0A8AFF",
                    "docKindInfo": {
                        "code": "CP",
                        "name": "Проект контракта"
                    },
                    "cryptoSigns": {}
                },
                {
                    "publishedContentId": "0939AAD3DCE5CAEFE06334548D0AF84E",
                    "fileName": "Приложение № 1 к извещению_описание ОЗ.doc",
                    "fileSize": "88064",
                    "docDescription": "Описание объекта закупки",
                    "docDate": "2023-11-03T11:30:40+03:00",
                    "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=0939AAD3DCE5CAEFE06334548D0AF84E",
                    "docKindInfo": {
                        "code": "POD",
                        "name": "Описание объекта закупки"
                    },
                    "cryptoSigns": {}
                },
                {
                    "publishedContentId": "0934E9CE028F07B0E06334548D0A2EF3",
                    "fileName": "Приложение № 3 к извещению_треб к заявке.docx",
                    "fileSize": "35392",
                    "docDescription": "Требования к содержанию и составу заявки на участие в аукционе",
                    "docDate": "2023-11-03T11:30:40+03:00",
                    "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=0934E9CE028F07B0E06334548D0A2EF3",
                    "docKindInfo": {
                        "code": "CAR",
                        "name": "Требование к содержанию, составу заявки на участие в закупке"
                    },
                    "cryptoSigns": {}
                }
            ]
        },
        "notificationInfo": {
            "procedureInfo": {
                "collectingInfo": {
                    "startDT": "2023-11-03T13:33:17+05:00",
                    "endDT": "2023-11-13T14:00:00+05:00"
                },
                "biddingDate": "2023-11-13+05:00",
                "summarizingDate": "2023-11-15+05:00"
            },
            "contractConditionsInfo": {
                "maxPriceInfo": {
                    "maxPrice": "ыаыва",
                    "currency": {
                        "code": "RUB",
                        "name": "Российский рубль"
                    }
                }
            },
            "customerRequirementsInfo": {
                "customerRequirementInfo": {
                    "customer": {
                        "regNum": "03481000744",
                        "consRegistryNum": "552Р1633",
                        "fullName": "ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ \"БЮРО СУДЕБНО-МЕДИЦИНСКОЙ ЭКСПЕРТИЗЫ ГОРОДА БАЙКОНУР\""
                    },
                    "contractConditionsInfo": {
                        "maxPriceInfo": {
                            "maxPrice": "54600"
                        },
                        "mustPublicDiscussion": "false",
                        "IKZInfo": {
                            "purchaseCode": "231990100420899010100100150011712244",
                            "publishYear": "2023",
                            "OKPD2Info": {
                                "OKPD2": {
                                    "OKPDCode": "17.12",
                                    "OKPDName": "Бумага и картон"
                                }
                            },
                            "KVRInfo": {
                                "KVR": {
                                    "code": "244",
                                    "name": "Прочая закупка товаров, работ и услуг"
                                }
                            },
                            "customerCode": "19901004208990101001",
                            "purchaseNumber": "0015",
                            "purchaseOrderNumber": "001"
                        },
                        "tenderPlan2020Info": {
                            "plan2020Number": "202303481000744001",
                            "position2020Number": "202303481000744001000015"
                        },
                        "contractExecutionPaymentPlan": {
                            "contractExecutionTermsInfo": {
                                "notRelativeTermsInfo": {
                                    "isFromConclusionDate": "true",
                                    "endDate": "2023-12-31+03:00"
                                }
                            },
                            "financingSourcesInfo": {
                                "nonbudgetFinancingsInfo": {
                                    "selfFunds": "true"
                                },
                                "currentYear": "2023",
                                "financeInfo": {
                                    "total": "54600",
                                    "currentYear": "54600",
                                    "firstYear": "0",
                                    "secondYear": "0",
                                    "subsecYears": "0"
                                }
                            },
                            "stagesInfo": {
                                "stageInfo": {
                                    "sid": "6522571",
                                    "externalSid": "3F726B37-7935-456E-B485-829FC8CCDCB3",
                                    "termsInfo": {
                                        "notRelativeTermsInfo": {
                                            "isFromConclusionDate": "true",
                                            "endDate": "2023-12-31+03:00"
                                        }
                                    },
                                    "nonbudgetFinancingInfo": {
                                        "paymentYearInfo": {
                                            "total": "54600",
                                            "currentYear": "54600",
                                            "firstYear": "0",
                                            "secondYear": "0",
                                            "subsecYears": "0"
                                        },
                                        "KVRsInfo": {
                                            "currentYear": "2023",
                                            "KVRInfo": {
                                                "KVR": {
                                                    "code": "244",
                                                    "name": "Прочая закупка товаров, работ и услуг"
                                                },
                                                "KVRYearsInfo": {
                                                    "total": "54600",
                                                    "currentYear": "54600",
                                                    "firstYear": "0",
                                                    "secondYear": "0",
                                                    "subsecYears": "0"
                                                }
                                            },
                                            "totalSum": "54600"
                                        }
                                    }
                                }
                            }
                        },
                        "deliveryPlacesInfo": {
                            "deliveryPlaceInfo": {
                                "deliveryPlace": "ул. Пионерская, здание 10, город Байконур, Республика Казахстан"
                            }
                        },
                        "isOneSideRejectionSt95": "true"
                    }
                }
            },
            "purchaseObjectsInfo": {
                "notDrugPurchaseObjectsInfo": {
                    "purchaseObject": {
                        "sid": "137164640",
                        "externalSid": "64897903-FD9E-42D4-A430-5F821E8D4BE5",
                        "KTRU": {
                            "code": "17.12.14.110-00000004",
                            "name": "Бумага для офисной техники",
                            "versionId": "155697",
                            "versionNumber": "4",
                            "characteristics": {
                                "characteristicsUsingReferenceInfo": [
                                    {
                                        "sid": "72098967",
                                        "code": "834b8c19-2",
                                        "name": "Количество листов в пачке",
                                        "type": "2",
                                        "kind": "2",
                                        "values": {
                                            "value": {
                                                "sid": "87055879",
                                                "OKEI": {
                                                    "code": "796",
                                                    "nationalCode": "ШТ",
                                                    "name": "Штука"
                                                },
                                                "valueFormat": "N",
                                                "rangeSet": {
                                                    "valueRange": {
                                                        "minMathNotation": "greaterOrEqual",
                                                        "min": "500"
                                                    }
                                                }
                                            }
                                        },
                                        "characteristicsFillingInstruction": {
                                            "code": "2",
                                            "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                        }
                                    },
                                    {
                                        "sid": "72098968",
                                        "code": "f44ed6e1-e",
                                        "name": "Марка бумаги",
                                        "type": "1",
                                        "kind": "1",
                                        "values": {
                                            "value": {
                                                "sid": "87055880",
                                                "qualityDescription": "Не ниже С"
                                            }
                                        },
                                        "characteristicsFillingInstruction": {
                                            "code": "3",
                                            "name": "Участник закупки указывает в заявке только одно значение характеристики"
                                        }
                                    },
                                    {
                                        "sid": "72098966",
                                        "code": "1e0b867b-6",
                                        "name": "Формат",
                                        "type": "1",
                                        "kind": "1",
                                        "values": {
                                            "value": {
                                                "sid": "87055878",
                                                "qualityDescription": "А4"
                                            }
                                        },
                                        "characteristicsFillingInstruction": {
                                            "code": "6",
                                            "name": "Значение характеристики не может изменяться участником закупки"
                                        }
                                    }
                                ]
                            },
                            "OKPD2": {
                                "OKPDCode": "17.12.14.129",
                                "OKPDName": "Бумага печатная прочая"
                            }
                        },
                        "name": "Бумага для офисной техники",
                        "OKEI": {
                            "code": "728",
                            "nationalCode": "ПАЧ",
                            "name": "Пачка"
                        },
                        "price": "350",
                        "quantity": {
                            "value": "156"
                        },
                        "sum": "54600",
                        "type": "PRODUCT",
                        "hierarchyType": "ND"
                    },
                    "totalSum": "54600",
                    "quantityUndefined": "false"
                }
            },
            "preferensesInfo": {
                "preferenseInfo": {
                    "preferenseRequirementInfo": {
                        "shortName": "PVS33044",
                        "name": "Преимущество в соответствии с ч. 3 ст. 30 Закона № 44-ФЗ"
                    }
                }
            },
            "requirementsInfo": {
                "requirementInfo": [
                    {
                        "preferenseRequirementInfo": {
                            "shortName": "ET44",
                            "name": "Единые требования к участникам закупок в соответствии с ч. 1 ст. 31 Закона № 44-ФЗ"
                        }
                    },
                    {
                        "preferenseRequirementInfo": {
                            "shortName": "TR442",
                            "name": "Требования к участникам закупок в соответствии с ч. 1.1 ст. 31 Закона № 44-ФЗ"
                        }
                    }
                ]
            },
            "restrictionsInfo": {
                "restrictionInfo": {
                    "preferenseRequirementInfo": {
                        "shortName": "JB2149",
                        "name": "Запрет на допуск товаров, работ, услуг при осуществлении закупок, а также ограничения и условия допуска в соответствии с требованиями, установленными ст. 14 Закона № 44-ФЗ"
                    },
                    "restrictionsSt14": {
                        "restrictionSt14": {
                            "requirementsType": {
                                "requirementType": {
                                    "type": "BAN"
                                }
                            },
                            "NPAInfo": {
                                "code": "19",
                                "name": "Постановление Правительства РФ от 30.04.2020 № 616 \"Об установлении запрета на допуск промышленных товаров, происходящих из иностранных государств, для целей осуществления закупок для государственных и муниципальных нужд, а также промышленных товаров, происходящих из иностранных государств, работ (услуг), выполняемых (оказываемых) иностранными лицами, для целей осуществления закупок для нужд обороны страны и безопасности государства\"",
                                "shortName": "Постановление Правительства РФ от 30.04.2020 № 616"
                            },
                            "exception": {
                                "imposibilityBan": "true",
                                "imposibilityBanReason": "Запрет на допуск промышленных товаров, происходящих из иностранных государств, для целей осуществления закупок для государственных и муниципальных нужд, а также промышленных товаров, происходящих из иностранных государств, работ (услуг), выполняемых (оказываемых) иностранными лицами, для целей осуществления закупок для нужд обороны страны и безопасности государства, установленный постановлением Правительства РФ от 30.04.2020 № 616, не применяется на основании п.п. «б» п. 3 (закупка одной единицы товара, стоимость которой не превышает 300 тыс. рублей, и закупки совокупности таких товаров, суммарная стоимость которых составляет менее 1 млн. рублей)"
                            }
                        }
                    }
                }
            },
            "flags": {
                "purchaseObjectsCh9St37": "false"
            }
        }
    }
]


export const Catalog: FC = () => {
    const [tenders, setTenders] = useState([]);
    const [tendersCount, setTendersCount] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [countItems, setCountItems] = useState(10);
    const [findedTenderId, setFindedTenderId] = useState('')



    useEffect(() => {
        // Определите функцию для выполнения запроса
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://51.250.27.179:4100/client/tenders?page=${currentPage}&perPage=10`);
                setTenders(response.data); // Обновите состояние данными из ответа
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
            }
        };

        const fetchTendersCount = async () => {
            try {
                const response = await axios.get(`http://51.250.27.179:4100/client/tendersCount`);
                setTendersCount(response.data); // Обновите состояние данными из ответа
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
            }
        };

        // Вызовите функцию для выполнения запроса
        fetchData();
        fetchTendersCount();

    }, [currentPage]); // Зависимость от currentPage для повторного выполнения при изменении страницы

    const fetchTenderByID = async () => {
        try {
            const response = await axios.get(`http://51.250.27.179:4100/client/tender/${findedTenderId}`);
            console.log('TESTIFY SHIT: '+response.data)
            setTenders(response.data); // Обновите состояние данными из ответа
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const handleClickFinder = () => {
        fetchTenderByID()
    }

    // @ts-ignore
    return (
        <Fragment>
            <CatalogPage>
                <FlexTextRow style={{alignItems: 'center', gap: '20px'}}>
                    <TextBlack22pxRegular>Результаты поиска</TextBlack22pxRegular>
                    <TextGray14pxRegular>найдено {tendersCount} тендеров</TextGray14pxRegular>
                </FlexTextRow>
                <FlexRow style={{width: '100%', justifyContent: 'flex-start'}}>
                    <FinderByID onChange={(event) => setFindedTenderId(event.target.value)} />
                    <FindByIDButton onClick={handleClickFinder}>Найти</FindByIDButton>
                </FlexRow>
                {tenders
                    .map((item, index) => (
                    // Проверка на null перед отображением TenderPreiewC
                    item !== undefined || null ? (

                        <TenderPreiewCard key={index} jsonData={item} />
                    ) : null
                ))}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        Назад
                    </button>
                    <span style={{ margin: '0 10px' }}>Страница {currentPage}</span>
                    <button onClick={() => handlePageChange(currentPage + 1)}>
                        Вперед
                    </button>
                </div>
                {/*<FlexRow>*/}
                {/*    <ShowCount>*/}
                {/*        <TextGray14pxRegular>Показать по</TextGray14pxRegular>*/}
                {/*        <TextBlack14pxRegular onClick={() => setCountItems(10)}>10</TextBlack14pxRegular>*/}
                {/*        <TextBlack14pxRegular onClick={() => setCountItems(20)}>20</TextBlack14pxRegular>*/}
                {/*        <TextBlack14pxRegular onClick={() => setCountItems(30)}>30</TextBlack14pxRegular>*/}
                {/*        <TextBlack14pxRegular></TextBlack14pxRegular>*/}
                {/*        <TextBlack14pxRegular onClick={() => setCountItems(50)}>50</TextBlack14pxRegular>*/}
                {/*    </ShowCount>*/}
                {/*</FlexRow>*/}
            </CatalogPage>
        </Fragment>
    );
};