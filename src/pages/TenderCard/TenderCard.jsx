import {FC, Fragment, useState} from 'react'
import {
    Atext14pxBlue,
    BorderedComtainer, BorderFitContaienr,
    BorderOpeningContainer,
    LeftSideSection35,
    PageContainer,
    RightSideSection65
} from "./styles";
import {
    TextBlack14pxBold,
    TextBlack14pxRegular,
    TextBlack22pxBold,
    TextBlue14pxRegular,
    TextGray14pxRegular
} from "../../constants/fonts";
import {FlexTextColumn, FlexTextRow} from "../../containers/containers";
import {ReactComponent as Arrow} from "../../assets/icons/arrow.svg";
import {Menu} from "../../components/Menu/Menu";

const tender_info = {
    "appAbsence": [],
    "clarification": [
        {
            "_id": "6560b058d1c222073687c969",
            "id": "3099271",
            "commonInfo": {
                "purchaseNumber": "0111200004623000016",
                "docPublishDTInEIS": "2023-11-21T19:38:38.524+03:00",
                "docNumber": "№РИ1",
                "topic": "Ответ на запрос",
                "href": "https://zakupki.gov.ru/epz/order/notice/ea20/view/common-info.html?regNumber=0111200004623000016"
            },
            "requestInfo": {
                "requestNumber": "205590",
                "docDT": "2023-11-21T17:32:23.727+03:00",
                "question": "Просим разъяснить требования к участнику: 1. Для чего включать в заявку уведомление лицензирующего органа на территории Камчатского края, если объект расположен в г. Москва? 2. На основании какой нормы необходимо уведомлять лицензирующий орган ДО заключения контракта?"
            },
            "printFormInfo": {
                "url": "https://zakupki.gov.ru/epz/order/notice/printForm/view.html?printFormId=173563296"
            },
            "attachmentsInfo": {
                "attachmentInfo": {
                    "publishedContentId": "0AAD2F6346D63F0CE06334548D0AB611",
                    "fileName": "В соответствии с Вашим запросом будут внесены изменения в извещение и прилагаемые документы.docx",
                    "fileSize": "11730",
                    "docDescription": "В соответствии с Вашим запросом будут внесены изменения в извещение и прилагаемые документы",
                    "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=0AAD2F6346D63F0CE06334548D0AB611",
                    "cryptoSigns": {}
                }
            },
            "printFormFieldsInfo": {
                "notificationInfo": {
                    "commonInfo": {
                        "purchaseObjectInfo": "Оказание охранных услуг в интересах Полномочного представительства Республики Татарстан в Российской Федерации в 2024 году",
                        "placingWay": {
                            "code": "EAP20",
                            "name": "Электронный аукцион"
                        },
                        "ETP": {
                            "code": "ETP_AVK",
                            "name": "АГЗ РТ",
                            "url": "http://etp.zakazrf.ru"
                        },
                        "docType": {
                            "code": "RI",
                            "name": "Разъяснения положений извещения об осуществлении закупки"
                        }
                    },
                    "purchaseResponsibleInfo": {
                        "regNum": "01112000046",
                        "consRegistryNum": "92206356",
                        "fullName": "ПОЛНОМОЧНОЕ ПРЕДСТАВИТЕЛЬСТВО РЕСПУБЛИКИ ТАТАРСТАН В РОССИЙСКОЙ ФЕДЕРАЦИИ",
                        "responsibleRole": "CU"
                    }
                }
            }
        }
    ],
    "noticationCancel": [],
    "protocol": [],
    "protocolCancel": [],
    "protocolDeviation": [],
    "protocolEvDevCancel": [],
    "protocolEvasion": [],
    "result": [],
    "tender": [
        {
            "_id": "6560b061d1c222073687d0b1",
            "id": "34281954",
            "versionNumber": "3",
            "commonInfo": {
                "purchaseNumber": "0111200004623000016",
                "docNumber": "№ИИ2",
                "plannedPublishDate": "2023-11-22+03:00",
                "publishDTInEIS": "2023-11-22T11:08:20.514+03:00",
                "href": "https://zakupki.gov.ru/epz/order/notice/ea20/view/common-info.html?regNumber=0111200004623000016",
                "notPublishedOnEIS": "true",
                "placingWay": {
                    "code": "EAP20",
                    "name": "Электронный аукцион"
                },
                "ETP": {
                    "code": "ETP_AVK",
                    "name": "АГЗ РТ",
                    "url": "http://etp.zakazrf.ru"
                },
                "contractConclusionOnSt83Ch2": "true",
                "purchaseObjectInfo": "Оказание охранных услуг в интересах Полномочного представительства Республики Татарстан в Российской Федерации в 2024 году"
            },
            "purchaseResponsibleInfo": {
                "responsibleOrgInfo": {
                    "regNum": "01112000046",
                    "consRegistryNum": "92206356",
                    "fullName": "ПОЛНОМОЧНОЕ ПРЕДСТАВИТЕЛЬСТВО РЕСПУБЛИКИ ТАТАРСТАН В РОССИЙСКОЙ ФЕДЕРАЦИИ",
                    "shortName": "ПОЛНОМОЧНОЕ ПРЕДСТАВИТЕЛЬСТВО РЕСПУБЛИКИ ТАТАРСТАН В РОССИЙСКОЙ ФЕДЕРАЦИИ",
                    "postAddress": "Российская Федерация, 115172, Москва, ПЕР КОТЕЛЬНИЧЕСКИЙ 3-Й, ДОМ 13/15/КОРПУС 1",
                    "factAddress": "Российская Федерация, 115172, Москва, ПЕР КОТЕЛЬНИЧЕСКИЙ 3-Й, ДОМ 13/15/КОРПУС 1",
                    "INN": "7701039591",
                    "KPP": "770501001"
                },
                "responsibleRole": "CU",
                "responsibleInfo": {
                    "orgPostAddress": "Российская Федерация, 115172, Москва, ПЕР КОТЕЛЬНИЧЕСКИЙ 3-Й, ДОМ 13/15/КОРПУС 1",
                    "orgFactAddress": "Российская Федерация, 115172, Москва, ПЕР КОТЕЛЬНИЧЕСКИЙ 3-Й, ДОМ 13/15/КОРПУС 1",
                    "contactPersonInfo": {
                        "lastName": "Садыков",
                        "firstName": "Фидаиль",
                        "middleName": "Салихзянович"
                    },
                    "contactEMail": "fidail.sadykov@tatar.ru",
                    "contactPhone": "7-495-9150502-104"
                }
            },
            "printFormInfo": {
                "url": "https://zakupki.gov.ru/epz/order/notice/printForm/view.html?regNumber=0111200004623000016"
            },
            "attachmentsInfo": {
                "attachmentInfo": [
                    {
                        "publishedContentId": "0A43C6EA3716CF35E06334548D0A9B2F",
                        "fileName": "n719102_обоснование_нмцк.xls",
                        "fileSize": "47104",
                        "docDescription": "обоснование нмцк",
                        "docDate": "2023-11-16T15:03:34+03:00",
                        "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=0A43C6EA3716CF35E06334548D0A9B2F",
                        "docKindInfo": {
                            "code": "MRJ",
                            "name": "Обоснование начальной (максимальной) цены контракта"
                        },
                        "cryptoSigns": {}
                    },
                    {
                        "publishedContentId": "0A425B502218C61EE06334548D0A3EBF",
                        "fileName": "n719102_проект_контракта.doc",
                        "fileSize": "161280",
                        "docDescription": "проект контракта",
                        "docDate": "2023-11-16T15:03:34+03:00",
                        "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=0A425B502218C61EE06334548D0A3EBF",
                        "docKindInfo": {
                            "code": "CP",
                            "name": "Проект контракта"
                        },
                        "cryptoSigns": {}
                    },
                    {
                        "publishedContentId": "0A40E8214270F131E06334548D0A3159",
                        "fileName": "n719102_ТЗ_ОХРАНА_2024.docx",
                        "fileSize": "20584",
                        "docDescription": "Описание объекта закупки",
                        "docDate": "2023-11-16T15:03:34+03:00",
                        "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=0A40E8214270F131E06334548D0A3159",
                        "docKindInfo": {
                            "code": "POD",
                            "name": "Описание объекта закупки"
                        },
                        "cryptoSigns": {}
                    },
                    {
                        "publishedContentId": "0AAC42C9B78D6889E06334548D0A63F3",
                        "fileName": "ИНСТРУКЦИЯ.doc",
                        "fileSize": "60928",
                        "docDescription": "ИНСТРУКЦИЯ",
                        "docDate": "2023-11-21T19:33:02+03:00",
                        "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=0AAC42C9B78D6889E06334548D0A63F3",
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
                        "startDT": "2023-11-16T15:30:32+03:00",
                        "endDT": "2023-11-29T09:00:00+03:00"
                    },
                    "biddingDate": "2023-11-29+03:00",
                    "summarizingDate": "2023-11-30+03:00"
                },
                "contractConditionsInfo": {
                    "maxPriceInfo": {
                        "maxPrice": "3698877.15",
                        "currency": {
                            "code": "RUB",
                            "name": "Российский рубль"
                        }
                    }
                },
                "customerRequirementsInfo": {
                    "customerRequirementInfo": {
                        "customer": {
                            "regNum": "01112000046",
                            "consRegistryNum": "92206356",
                            "fullName": "ПОЛНОМОЧНОЕ ПРЕДСТАВИТЕЛЬСТВО РЕСПУБЛИКИ ТАТАРСТАН В РОССИЙСКОЙ ФЕДЕРАЦИИ"
                        },
                        "applicationGuarantee": {
                            "amount": "36988.77",
                            "account": {
                                "bik": "049205805",
                                "settlementAccount": "40302810300024000798",
                                "personalAccount": "ЛР007570005-ППрРТвРФ"
                            },
                            "procedureInfo": "Обеспечение заявки на участие в закупке предоставляется участником закупки в виде денежных средств или независимой гарантии, соответствующей требованиям статьи 45 Закона N 44-ФЗ. Способ обеспечения определяется участником закупки самостоятельно и с учетом особенностей, установленных постановлением Правительства Российской Федерации от 10.04.2023 579 «Об особенностях порядка предоставления обеспечения заявок на участие в закупках товаров, работ, услуг для обеспечения государственных или муниципальных нужд участниками таких закупок, являющимися иностранными лицами». Денежные средства, предназначенные для обеспечения заявок, блокируются на банковском счете, открытом участником в банке, включенном в перечень банков, который установлен Распоряжением Правительства РФ от 13.07.2018 N 1451-р. Срок действия независимой гарантии должен составлять не менее месяца с даты окончания срока подачи заявок. Участник закупки для подачи заявки выбирает с использованием электронной площадки способ обеспечения заявки путем указания реквизитов специального счета или указания номера реестровой записи из реестра независимых гарантий, размещенного в ЕИС. Предприятия уголовно-исполнительной системы, организации инвалидов, предусмотренные частью 2 статьи 29 Закона N 44-ФЗ, предоставляют обеспечение заявки на участие в закупке в размере одной второй процента начальной (максимальной) цены контракта. Государственные, муниципальные учреждения не предоставляют обеспечение подаваемых ими заявок на участие в закупке.",
                            "part": "1.0"
                        },
                        "contractGuarantee": {
                            "account": {
                                "bik": "049205805",
                                "settlementAccount": "40302810300024000798",
                                "personalAccount": "ЛР007570005-ППрРТвРФ"
                            },
                            "procedureInfo": "Обеспечение исполнения контракта предоставляется в виде независимой гарантии, соответствующей требованиям ст. 45 Закона N 44-ФЗ, или внесением денежных средств на указанный заказчиком счет, на котором в соответствии с законодательством Российской Федерации учитываются операции со средствами, поступающими заказчику. Способ обеспечения исполнения контракта, срок действия независимой гарантии определяются участником закупки, с которым заключается контракт, самостоятельно. Срок действия независимой гарантии должен превышать предусмотренный контрактом срок исполнения обязательств, не менее чем на один месяц, в том числе в случае его изменения в соответствии со ст. 95 Закона N 44-ФЗ. Участник закупки, с которым заключается контракт по результатам определения поставщика (подрядчика, исполнителя) в соответствии с пунктом 1 части 1 статьи 30 Закона N 44-ФЗ освобождается от предоставления обеспечения исполнения контракта, в том числе с учетом положений статьи 37 Закона N 44-ФЗ, в случае предоставления таким участником закупки информации, содержащейся в реестре контрактов, заключенных заказчиками, и подтверждающей исполнение таким участником (без учета правопреемства) в течение трех лет до даты подачи заявки на участие в закупке трех контрактов, исполненных без применения к такому участнику неустоек (штрафов, пеней). Такая информация представляется участником закупки до заключения контракта в случаях, установленных Законом №44-ФЗ для предоставления обеспечения исполнения контракта. При этом сумма цен таких контрактов должна составлять не менее начальной (максимальной) цены контракта, указанной в извещении об осуществлении закупки и документации о закупке.",
                            "part": "5.0"
                        },
                        "contractConditionsInfo": {
                            "maxPriceInfo": {
                                "maxPrice": "3698877.15"
                            },
                            "mustPublicDiscussion": "false",
                            "IKZInfo": {
                                "purchaseCode": "232770103959177050100100270018010244",
                                "publishYear": "2023",
                                "OKPD2Info": {
                                    "OKPD2": {
                                        "OKPDCode": "80.10",
                                        "OKPDName": "Услуги охранных служб, в том числе частных"
                                    }
                                },
                                "KVRInfo": {
                                    "KVR": {
                                        "code": "244",
                                        "name": "Прочая закупка товаров, работ и услуг"
                                    }
                                },
                                "customerCode": "27701039591770501001",
                                "purchaseNumber": "0027",
                                "purchaseOrderNumber": "001"
                            },
                            "tenderPlan2020Info": {
                                "plan2020Number": "202301112000046001",
                                "position2020Number": "202301112000046001000027"
                            },
                            "contractExecutionPaymentPlan": {
                                "contractExecutionTermsInfo": {
                                    "notRelativeTermsInfo": {
                                        "startDate": "2024-01-01+03:00",
                                        "endDate": "2024-12-31+03:00"
                                    }
                                },
                                "financingSourcesInfo": {
                                    "budgetFinancingsInfo": {
                                        "budgetInfo": {
                                            "code": "11021430",
                                            "name": "бюджет Республики Татарстан"
                                        },
                                        "budgetLevel": "20",
                                        "OKTMOInfo": {
                                            "code": "92000000",
                                            "name": "Муниципальные образования Республики Татарстан (Татарстана)"
                                        }
                                    },
                                    "currentYear": "2023",
                                    "financeInfo": {
                                        "total": "3698877.15",
                                        "currentYear": "0",
                                        "firstYear": "3698877.15",
                                        "secondYear": "0",
                                        "subsecYears": "0"
                                    }
                                },
                                "stagesInfo": {
                                    "stageInfo": {
                                        "sid": "6786207",
                                        "externalSid": "119051",
                                        "termsInfo": {
                                            "notRelativeTermsInfo": {
                                                "startDate": "2024-01-01+03:00",
                                                "endDate": "2024-12-31+03:00"
                                            }
                                        },
                                        "budgetFinancingsInfo": {
                                            "budgetFinancingInfo": {
                                                "KBK": "75704121110102410244",
                                                "paymentYearInfo": {
                                                    "total": "3698877.15",
                                                    "currentYear": "0",
                                                    "firstYear": "3698877.15",
                                                    "secondYear": "0",
                                                    "subsecYears": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "deliveryPlacesInfo": {
                                "deliveryPlaceInfo": {
                                    "kladr": {
                                        "kladrCode": "77000000000",
                                        "fullName": "Российская Федерация, Москва"
                                    },
                                    "deliveryPlace": "115172, г Москва, пер Котельнический 3-й, д. 13/15"
                                }
                            },
                            "isOneSideRejectionSt95": "false"
                        }
                    }
                },
                "purchaseObjectsInfo": {
                    "notDrugPurchaseObjectsInfo": {
                        "purchaseObject": {
                            "sid": "137957310",
                            "OKPD2": {
                                "OKPDCode": "80.10.12.200",
                                "OKPDName": "Услуги частных охранных организаций Эта группировка включает: - защиту жизни и здоровья граждан; - охрану объектов и (или) имущества (в том числе при его транспортировке); - консультирование и подготовку рекомендаций клиентам по вопросам правомерной"
                            },
                            "name": "Оказание охранных услуг для нужд Полномочного представительства Республики Татарстан в Российской Федерации в 2024 году",
                            "OKEI": {
                                "code": "876",
                                "nationalCode": "УСЛ ЕД",
                                "name": "Условная единица"
                            },
                            "price": "3698877.15",
                            "volumeSpecifyingMethod": "QF",
                            "quantity": {
                                "value": "1"
                            },
                            "sum": "3698877.15",
                            "type": "SERVICE",
                            "hierarchyType": "ND"
                        },
                        "totalSum": "3698877.15",
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
                        },
                        {
                            "preferenseRequirementInfo": {
                                "shortName": "TU44",
                                "name": "Требования к участникам закупок в соответствии с ч. 2 ст. 31 Закона № 44-ФЗ"
                            },
                            "addRequirements": {
                                "addRequirement": {
                                    "shortName": "TVS36BN",
                                    "name": "Требования в соответствии с позицией 34 раздела VI приложения к ПП РФ от 29.12.2021 № 2571",
                                    "content": "Наличие опыта исполнения участником закупки договора, предусматривающего оказание услуг по обеспечению охраны объектов (территорий). Цена оказанных услуг должна составлять не менее 20 процентов от начальной (максимальной) цены контракта, заключаемого по результатам определения поставщика (подрядчика, исполнителя). Информация и документы, подтверждающие соответствие участников закупки дополнительным требованиям: 1) исполненный договор; 2) акт приемки оказанных услуг, подтверждающий цену оказанных услуг"
                                }
                            }
                        },
                        {
                            "preferenseRequirementInfo": {
                                "shortName": "TU1131",
                                "name": "Требование к участникам закупок в соответствии с п. 1 ч. 1 ст. 31 Закона № 44-ФЗ"
                            },
                            "content": "копия лицензии (или выписка из реестра лицензий) на осуществление частной охранной деятельности, действующей в период оказания услуг по контракту (часть 1 статьи 11 Закона Российской Федерации от 11 марта 1992 г. № 2487-1 «О частной детективной и охранной деятельности в Российской Федерации», постановление Правительства Российской Федерации от 23 июня 2011 г. № 498 «О некоторых вопросах осуществления частной детективной (сыскной) и частной охранной деятельности»), с указанием разрешенных видов охранных услуг, а именно: • охрана объектов и (или) имущества, а также обеспечение внутриобъектового и пропускного режимов на объектах, в отношении которых установлены обязательные для выполнения требования к антитеррористической защищенности, за исключением объектов, предусмотренных частью третьей статьи 11 Закон РФ от 11 марта 1992 г. N 2487-I \"О частной детективной и охранной деятельности в Российской Федерации\""
                        }
                    ]
                },
                "flags": {
                    "purchaseObjectsCh9St37": "false"
                }
            },
            "modificationInfo": {
                "info": "изменение инструкции в части требований к участнику",
                "reasonInfo": {
                    "responsibleDecisionInfo": {
                        "decisionDate": "2023-11-21+03:00"
                    }
                }
            }
        }
    ]
}

export const TenderCard = () => {

    const [tender, setTender] = useState(tender_info)

    const [isSecondContainerVisible, setSecondContainerVisible] = useState(false);

    // Обработчик клика по кнопке
    const handleClick = () => {
        // Изменяем состояние для показа/скрытия второго контейнера
        setSecondContainerVisible(!isSecondContainerVisible);
    };

    return(
        <Fragment>
            <PageContainer>
                <LeftSideSection35>

                    <BorderedComtainer>
                        <TextBlack14pxBold>Общая информация</TextBlack14pxBold>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Номер извещания</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].commonInfo.purchaseNumber}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Наименование объекта закупки</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].commonInfo.purchaseObjectInfo}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Способ определения поставщика (подрядчика, исполнителя)</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].commonInfo.placingWay.name}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Наименование электронной площадки в информационно - телекоммуникационной сети “Интернет”</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].commonInfo.ETP.name}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Заказчик</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].purchaseResponsibleInfo.responsibleOrgInfo.fullName}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Официальный сайт</TextGray14pxRegular>
                            <TextBlack14pxRegular>https://zakupki.gov.ru/epz/main/public/home.htmlhtki.gov.ru/epz/main/public/</TextBlack14pxRegular>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    <BorderedComtainer>
                        <TextBlack14pxBold>Порядок размещения заказа</TextBlack14pxBold>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Дата публикации извещения</TextGray14pxRegular>
                            <TextBlack14pxRegular>31.12.2019 14:23 (МСК +00:00)</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Дата и время окончания подачи заявок</TextGray14pxRegular>
                            <TextBlack14pxRegular>15.01.2020 в 08:00 (МСК +00:00)</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Место подачи заявок</TextGray14pxRegular>
                            <TextBlack14pxRegular >{tender.tender[0].printFormInfo.url}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Порядок подачи заявок</TextGray14pxRegular>
                            <TextBlack14pxRegular>В соответствии с пунктами 25, 26 раздела I документации</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Дата рассмотрения и оценки заявок</TextGray14pxRegular>
                            <TextBlack14pxRegular>16.01. 2020</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Дата и время проведения аукциона в электронной форме</TextGray14pxRegular>
                            <TextBlack14pxRegular>17.01.2020 в 09:00 (МСК +00:00)</TextBlack14pxRegular>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    <BorderedComtainer>
                        <TextBlack14pxBold>Контактная информация</TextBlack14pxBold>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Организация</TextGray14pxRegular>
                            <TextBlack14pxRegular>АДМИНИСТРАЦИЯ ГОРОДА СУРГУТА</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Фактический адрес</TextGray14pxRegular>
                            <TextBlack14pxRegular>Российская Федерация, 65668, Ханты - Мансийский Автономный округ - Югра АО,
                                Сургут г, УЛ</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Почтовый адрес</TextGray14pxRegular>
                            <TextBlack14pxRegular>Российская Федерация, 567876, Ханты - Мансийский Автономный округ - Югра АО, Сургут г, УЛ ЭНГЕЛЬСА, 8</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Контакты</TextGray14pxRegular>
                            <TextBlack14pxRegular>Штриккер Р. В.</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Телефон</TextGray14pxRegular>
                            <TextBlack14pxRegular>+ 7 (646) 646-65-78</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Факс</TextGray14pxRegular>
                            <TextBlack14pxRegular>34567</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Электронная почта</TextGray14pxRegular>
                            <TextBlack14pxRegular>cscdsvd@gmail.com</TextBlack14pxRegular>
                        </FlexTextColumn>
                    </BorderedComtainer>
                </LeftSideSection35>
                <RightSideSection65>
                    <BorderedComtainer style={{flexDirection: 'row' ,justifyContent: 'space-between', padding: '25px 50px 25px 50px'}}>
                        <FlexTextColumn style={{width: 'fit-content'}}>
                            <TextGray14pxRegular>Цена контракта</TextGray14pxRegular>
                            <TextBlack22pxBold>7 578 753, 00</TextBlack22pxBold>
                        </FlexTextColumn>
                        <FlexTextColumn style={{width: 'fit-content'}}>
                            <TextGray14pxRegular>Обеспечение заявки</TextGray14pxRegular>
                            <TextBlack22pxBold>78 753, 00</TextBlack22pxBold>
                        </FlexTextColumn>
                        <FlexTextColumn style={{width: 'fit-content'}}>
                            <TextGray14pxRegular>Обеспечение контракта</TextGray14pxRegular>
                            <TextBlack22pxBold>678 753, 30</TextBlack22pxBold>
                        </FlexTextColumn>
                    </BorderedComtainer>
                    <BorderedComtainer>
                        <TextBlack14pxBold>Условия контракта</TextBlack14pxBold>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Начальная (максимальная) цена контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo.contractConditionsInfo.maxPriceInfo.maxPrice} российских рублей</TextBlack14pxRegular>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Источник финансирования</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.contractExecutionPaymentPlan.financingSourcesInfo.budgetFinancingsInfo.budgetInfo.name}</TextBlack14pxRegular>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Идентификационный код закупки</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.IKZInfo.purchaseCode}</TextBlack14pxRegular>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Место доставки товара, выполнения работы или оказания услуги</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.deliveryPlacesInfo.deliveryPlaceInfo.kladr.fullName}, {tender.tender[0].notificationInfo.customerRequirementsInfo.customerRequirementInfo.contractConditionsInfo.deliveryPlacesInfo.deliveryPlaceInfo.deliveryPlace}</TextBlack14pxRegular>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Сроки поставки товара или завершения работы либо график оказания услуг</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].purchaseResponsibleInfo.responsibleOrgInfo.fullName}</TextBlack14pxRegular>
                        </FlexTextRow>
                    </BorderedComtainer>
                    <BorderedComtainer>
                        <TextBlack14pxBold>Преимущества и требования к участникам</TextBlack14pxBold>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Преимущества</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo.contractConditionsInfo.maxPriceInfo.maxPrice} российских рублей</TextBlack14pxRegular>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Требования к участникам</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo.customerRequirementsInfo.customerRequirementInfo.applicationGuarantee.procedureInfo}</TextBlack14pxRegular>
                        </FlexTextRow>
                        <FlexTextRow>
                            <TextGray14pxRegular style={{width: '35%'}}>Ограничения</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].commonInfo.placingWay.name}</TextBlack14pxRegular>
                        </FlexTextRow>
                    </BorderedComtainer>
                    <BorderOpeningContainer>
                        <FlexTextRow style={{alignItems: 'center'}}>
                            <TextBlack14pxBold style={{marginRight: '20px'}}>Разъяснения</TextBlack14pxBold>
                            <Arrow onClick={handleClick}/>
                        </FlexTextRow>
                        {isSecondContainerVisible && (
                            <BorderFitContaienr >
                                <FlexTextColumn>
                                    <a href={`${tender.clarification[0]?.commonInfo?.href}`}>
                                        <TextBlue14pxRegular>Запрос - ответ от {tender.clarification[0].commonInfo.docPublishDTInEIS}</TextBlue14pxRegular>
                                    </a>
                                </FlexTextColumn>
                            </BorderFitContaienr>
                        )}
                    </BorderOpeningContainer>
                </RightSideSection65>
            </PageContainer>
        </Fragment>
    );
}
