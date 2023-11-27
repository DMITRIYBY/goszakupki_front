import {FC, Fragment, useState, useEffect} from 'react'
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
import axios from "axios";
import {useParams} from "react-router-dom";
import testTender1 from '../../components/testTender1'
import {format, parseISO} from "date-fns";

const tender_info = {
    "appAbsence": [],
    "clarification": [],
    "noticationCancel": [],
    "protocol": [
        {
            "_id": "6561a67d63ca1e084f17af86",
            "id": "43013313",
            "externalId": "0101500000623000043-1-2",
            "versionNumber": "1",
            "foundationDocInfo": {
                "foundationDocNumber": "№0101500000623000043",
                "foundationDocNumberExternal": "krista.02800000.23913465863"
            },
            "commonInfo": {
                "purchaseNumber": "0101500000623000043",
                "docNumber": "ИЭА1",
                "publishDTInEIS": "2023-11-07T14:47:30+03:00",
                "href": "https://lk.zakupki.gov.ru/44fz/priz/notice/ea20/view/documents.html?orderId=30762603",
                "docNumberExternal": "0101500000623000043-1-2",
                "publishDTInETP": "2023-11-07T14:46:49+03:00",
                "procedureDT": "2023-11-07T14:46:49+03:00",
                "signDT": "2023-11-07+03:00",
                "hrefExternal": "https://etp-ets.ru/44/ea21/protocol/final-request/view/421639/?eventId=2012071"
            },
            "protocolPublisherInfo": {
                "publisherOrg": {
                    "regNum": "01015000006",
                    "consRegistryNum": "802J0959",
                    "fullName": "АППАРАТ ПО ОБЕСПЕЧЕНИЮ ДЕЯТЕЛЬНОСТИ ОРГАНОВ ГОСУДАРСТВЕННОЙ ВЛАСТИ РЕСПУБЛИКИ БАШКОРТОСТАН В Г. МОСКВЕ",
                    "shortName": "АППАРАТ ПО ОБЕСПЕЧЕНИЮ ДЕЯТЕЛЬНОСТИ ОРГАНОВ ВЛАСТИ РБ В Г. МОСКВЕ",
                    "postAddress": "Российская Федерация, 105066, Москва, УЛ. ДОБРОСЛОБОДСКАЯ, Д. 6/СТР. 2",
                    "factAddress": "Российская Федерация, 105066, Москва, УЛ. ДОБРОСЛОБОДСКАЯ, Д. 6/СТР. 2",
                    "INN": "9701186367",
                    "KPP": "770101001"
                },
                "publisherRole": "CU"
            },
            "extPrintFormInfo": {
                "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=A54BB3D205294634B5855F11823BF7DD",
                "fileType": "xml",
                "commissionSignatures": {
                    "memberSignature": [
                        {
                            "memberNumber": "1"
                        },
                        {
                            "memberNumber": "2"
                        },
                        {
                            "memberNumber": "3"
                        }
                    ]
                }
            },
            "attachmentsInfo": {
                "attachmentInfo": [
                    {
                        "publishedContentId": "43DF1E46BA2F424BB81519C08171A0B0",
                        "fileName": "Электронный документ, полученный из внешней системы.xml",
                        "fileSize": "36360",
                        "docDescription": "Электронный документ, полученный из внешней системы",
                        "docDate": "2023-11-07T14:47:26+03:00",
                        "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=43DF1E46BA2F424BB81519C08171A0B0",
                        "cryptoSigns": {}
                    },
                    {
                        "publishedContentId": "098ADD5533AAC695E06334548D0A2C45",
                        "fileName": "Протокол подведения итогов_07.11.2023_14.42.53_0101500000623000043_2_1.docx",
                        "fileSize": "32541",
                        "docDescription": "Протокол подведения итогов_07.11.2023_14.42.53_0101500000623000043_2_1.docx",
                        "docDate": "2023-11-07T14:47:26+03:00",
                        "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=098ADD5533AAC695E06334548D0A2C45",
                        "cryptoSigns": {}
                    }
                ]
            },
            "protocolInfo": {
                "commissionInfo": {
                    "commissionName": "Единая комиссии по осуществлению закупок Аппарата по обеспечению деятельности органов государственной власти Республики Башкортостан в г. Москве",
                    "commissionMembers": {
                        "commissionMember": [
                            {
                                "memberNumber": "1",
                                "nameInfo": {
                                    "lastName": "Панченко",
                                    "firstName": "Дмитрий",
                                    "middleName": "Владимирович"
                                },
                                "role": {
                                    "code": "2",
                                    "name": "Зам. председателя комиссии",
                                    "rightVote": "true"
                                }
                            },
                            {
                                "memberNumber": "2",
                                "nameInfo": {
                                    "lastName": "Гильмутдинов",
                                    "firstName": "Булат",
                                    "middleName": "Рависович"
                                },
                                "role": {
                                    "code": "4",
                                    "name": "Член комиссии",
                                    "rightVote": "true"
                                }
                            },
                            {
                                "memberNumber": "3",
                                "nameInfo": {
                                    "lastName": "Гайсина",
                                    "firstName": "Анна",
                                    "middleName": "Альбертовна"
                                },
                                "role": {
                                    "code": "8",
                                    "name": "Секретарь комиссии",
                                    "rightVote": "true"
                                }
                            }
                        ]
                    }
                },
                "applicationsInfo": {
                    "applicationInfo": {
                        "commonInfo": {
                            "appNumber": "1",
                            "appDT": "2023-11-02T12:57:18+03:00",
                            "admissionResultsInfo": {
                                "admissionResultInfo": [
                                    {
                                        "commissionMemberInfo": {
                                            "memberNumber": "1",
                                            "nameInfo": {
                                                "lastName": "Панченко",
                                                "firstName": "Дмитрий",
                                                "middleName": "Владимирович"
                                            },
                                            "role": {
                                                "code": "2",
                                                "name": "Зам. председателя комиссии",
                                                "rightVote": "true"
                                            }
                                        },
                                        "admitted": "true"
                                    },
                                    {
                                        "commissionMemberInfo": {
                                            "memberNumber": "2",
                                            "nameInfo": {
                                                "lastName": "Гильмутдинов",
                                                "firstName": "Булат",
                                                "middleName": "Рависович"
                                            },
                                            "role": {
                                                "code": "4",
                                                "name": "Член комиссии",
                                                "rightVote": "true"
                                            }
                                        },
                                        "admitted": "true"
                                    },
                                    {
                                        "commissionMemberInfo": {
                                            "memberNumber": "3",
                                            "nameInfo": {
                                                "lastName": "Гайсина",
                                                "firstName": "Анна",
                                                "middleName": "Альбертовна"
                                            },
                                            "role": {
                                                "code": "8",
                                                "name": "Секретарь комиссии",
                                                "rightVote": "true"
                                            }
                                        },
                                        "admitted": "true"
                                    }
                                ]
                            }
                        },
                        "finalPrice": "29584.99",
                        "lastPriceOffer": {
                            "price": "29584.99",
                            "date": "2023-11-02T12:57:18+03:00",
                            "increaseInitialPrice": "false"
                        },
                        "admittedInfo": {
                            "appAdmittedInfo": {
                                "admitted": "true",
                                "appRating": "1"
                            }
                        }
                    }
                },
                "abandonedReason": {
                    "code": "EA20IEAOR",
                    "name": "По окончании срока подачи заявок подана только одна заявка на участие в закупке (п. 1 ч. 1 ст. 52 Закона № 44-ФЗ). Заявка соответствует требованиям"
                }
            }
        }
    ],
    "protocolCancel": [],
    "protocolDeviation": [],
    "protocolEvDevCancel": [],
    "protocolEvasion": [],
    "result": [],
    "tender": [
        {
            "_id": "6561a40a63ca1e084f16ea5e",
            "id": "33988584",
            "externalId": "krista.02800000.23913465863",
            "versionNumber": "1",
            "commonInfo": {
                "purchaseNumber": "0101500000623000043",
                "docNumber": "№0101500000623000043",
                "plannedPublishDate": "2023-10-25+03:00",
                "publishDTInEIS": "2023-10-25T14:06:00.387+03:00",
                "href": "https://zakupki.gov.ru/epz/order/notice/ea20/view/common-info.html?regNumber=0101500000623000043",
                "notPublishedOnEIS": "true",
                "placingWay": {
                    "code": "EAP20",
                    "name": "Электронный аукцион"
                },
                "ETP": {
                    "code": "ETP_MMVB",
                    "name": "Электронная торговая площадка «Фабрикант»",
                    "url": "http://www.etp-ets.ru"
                },
                "contractConclusionOnSt83Ch2": "true",
                "purchaseObjectInfo": "Поставка комплектующих для персонального компьютера"
            },
            "purchaseResponsibleInfo": {
                "responsibleOrgInfo": {
                    "regNum": "01015000006",
                    "consRegistryNum": "802J0959",
                    "fullName": "АППАРАТ ПО ОБЕСПЕЧЕНИЮ ДЕЯТЕЛЬНОСТИ ОРГАНОВ ГОСУДАРСТВЕННОЙ ВЛАСТИ РЕСПУБЛИКИ БАШКОРТОСТАН В Г. МОСКВЕ",
                    "shortName": "АППАРАТ ПО ОБЕСПЕЧЕНИЮ ДЕЯТЕЛЬНОСТИ ОРГАНОВ ГОСУДАРСТВЕННОЙ ВЛАСТИ РЕСПУБЛИКИ БАШКОРТОСТАН В Г. МОСКВЕ",
                    "postAddress": "105066, МОСКВА Г., УЛ. ДОБРОСЛОБОДСКАЯ, Д. 6, СТР. 2",
                    "factAddress": "105066, МОСКВА Г., УЛ. ДОБРОСЛОБОДСКАЯ, Д. 6, СТР. 2",
                    "INN": "9701186367",
                    "KPP": "770101001"
                },
                "responsibleRole": "CU",
                "responsibleInfo": {
                    "orgPostAddress": "105066, МОСКВА Г., УЛ. ДОБРОСЛОБОДСКАЯ, Д. 6, СТР. 2",
                    "orgFactAddress": "105066, МОСКВА Г., УЛ. ДОБРОСЛОБОДСКАЯ, Д. 6, СТР. 2",
                    "contactPersonInfo": {
                        "lastName": "Гильмутдинов",
                        "firstName": "Булат",
                        "middleName": "Рависович"
                    },
                    "contactEMail": "gilmutdinov.br@bashkortostan.ru",
                    "contactPhone": "84956214030",
                    "addInfo": "КОНТАКТНАЯ ИНФОРМАЦИЯ: Заказчик : АППАРАТ ПО ОБЕСПЕЧЕНИЮ ДЕЯТЕЛЬНОСТИ ОРГАНОВ ГОСУДАРСТВЕННОЙ ВЛАСТИ РЕСПУБЛИКИ БАШКОРТОСТАН В Г. МОСКВЕ; Контактная информация : Местонахождение: 105066, МОСКВА Г., УЛ. ДОБРОСЛОБОДСКАЯ, Д. 6, СТР. 2; Телефон: 84956214030; E-mail: apparatmsk@bashkortostan.ru; Контактное лицо заказчика: Гильмутдинов Булат Рависович; Должность: Главный специалист-эксперт; Номер контактного телефона: 84956214030; E-mail: gilmutdinov.br@bashkortostan.ru;"
                }
            },
            "printFormInfo": {
                "url": "https://zakupki.gov.ru/epz/order/notice/printForm/view.html?regNumber=0101500000623000043"
            },
            "attachmentsInfo": {
                "attachmentInfo": [
                    {
                        "publishedContentId": "088612DCE6C98CE8E06334548D0AC9C2",
                        "fileName": "Приложение №1 - НМЦК.pdf.zip",
                        "fileSize": "1720974",
                        "docDescription": "Приложение №1 - НМЦК.pdf.zip",
                        "docDate": "2023-10-25T11:03:16+03:00",
                        "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=088612DCE6C98CE8E06334548D0AC9C2",
                        "docKindInfo": {
                            "code": "MRJ",
                            "name": "Обоснование начальной (максимальной) цены контракта"
                        },
                        "cryptoSigns": {}
                    },
                    {
                        "publishedContentId": "0884E6DF2AA699D8E06334548D0A0A9F",
                        "fileName": "Приложение №2 - Проект контракта .doc.zip",
                        "fileSize": "225500",
                        "docDescription": "Приложение №2 - Проект контракта .doc.zip",
                        "docDate": "2023-10-25T11:03:16+03:00",
                        "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=0884E6DF2AA699D8E06334548D0A0A9F",
                        "docKindInfo": {
                            "code": "CP",
                            "name": "Проект контракта"
                        },
                        "cryptoSigns": {}
                    },
                    {
                        "publishedContentId": "0884747F9F6E4E87E06334548D0AC816",
                        "fileName": "Приложение №3 - Описание объекта закупки.docx.zip",
                        "fileSize": "156622",
                        "docDescription": "Приложение №3 - Описание объекта закупки.docx.zip",
                        "docDate": "2023-10-25T11:03:16+03:00",
                        "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=0884747F9F6E4E87E06334548D0AC816",
                        "docKindInfo": {
                            "code": "POD",
                            "name": "Описание объекта закупки"
                        },
                        "cryptoSigns": {}
                    },
                    {
                        "publishedContentId": "0884E6DF2AA899D8E06334548D0A0A9F",
                        "fileName": "Приложение №4 - Требования к содержанию заявки.docx.zip",
                        "fileSize": "172764",
                        "docDescription": "Приложение №4 - Требования к содержанию заявки.docx.zip",
                        "docDate": "2023-10-25T11:03:16+03:00",
                        "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=0884E6DF2AA899D8E06334548D0A0A9F",
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
                        "startDT": "2023-10-25T14:06:00+03:00",
                        "endDT": "2023-11-03T09:00:00+03:00"
                    },
                    "biddingDate": "2023-11-03+03:00",
                    "summarizingDate": "2023-11-07+03:00"
                },
                "contractConditionsInfo": {
                    "maxPriceInfo": {
                        "maxPrice": "29584.99",
                        "currency": {
                            "code": "RUB",
                            "name": "Российский рубль"
                        }
                    }
                },
                "customerRequirementsInfo": {
                    "customerRequirementInfo": {
                        "customer": {
                            "regNum": "01015000006",
                            "consRegistryNum": "802J0959",
                            "fullName": "АППАРАТ ПО ОБЕСПЕЧЕНИЮ ДЕЯТЕЛЬНОСТИ ОРГАНОВ ГОСУДАРСТВЕННОЙ ВЛАСТИ РЕСПУБЛИКИ БАШКОРТОСТАН В Г. МОСКВЕ"
                        },
                        "contractConditionsInfo": {
                            "maxPriceInfo": {
                                "maxPrice": "29584.99"
                            },
                            "mustPublicDiscussion": "false",
                            "IKZInfo": {
                                "purchaseCode": "232970118636777010100100990010000242",
                                "publishYear": "2023",
                                "OKPD2Info": {
                                    "undefined": "0000"
                                },
                                "KVRInfo": {
                                    "KVR": {
                                        "code": "242",
                                        "name": "Закупка товаров, работ и услуг в сфере информационно-коммуникационных технологий"
                                    }
                                },
                                "customerCode": "29701186367770101001",
                                "purchaseNumber": "0099",
                                "purchaseOrderNumber": "001"
                            },
                            "tenderPlan2020Info": {
                                "plan2020Number": "202301015000006002",
                                "position2020Number": "202301015000006002000091"
                            },
                            "contractExecutionPaymentPlan": {
                                "contractExecutionTermsInfo": {
                                    "notRelativeTermsInfo": {
                                        "isFromConclusionDate": "true",
                                        "endDate": "2023-12-25+03:00"
                                    }
                                },
                                "financingSourcesInfo": {
                                    "budgetFinancingsInfo": {
                                        "budgetInfo": {
                                            "code": "01021251",
                                            "name": "Бюджет Республики Башкортостан"
                                        },
                                        "budgetLevel": "20",
                                        "OKTMOInfo": {
                                            "code": "80000000",
                                            "name": "Муниципальные образования Республики Башкортостан"
                                        }
                                    },
                                    "currentYear": "2023",
                                    "financeInfo": {
                                        "total": "29584.99",
                                        "currentYear": "29584.99",
                                        "firstYear": "0",
                                        "secondYear": "0",
                                        "subsecYears": "0"
                                    }
                                },
                                "stagesInfo": {
                                    "stageInfo": {
                                        "sid": "6331191",
                                        "externalSid": "23910427992",
                                        "termsInfo": {
                                            "notRelativeTermsInfo": {
                                                "isFromConclusionDate": "true",
                                                "endDate": "2023-12-25+03:00"
                                            }
                                        },
                                        "budgetFinancingsInfo": {
                                            "budgetFinancingInfo": {
                                                "KBK": "80101029900002040242",
                                                "paymentYearInfo": {
                                                    "total": "29584.99",
                                                    "currentYear": "29584.99",
                                                    "firstYear": "0",
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
                                    "deliveryPlace": "г. Москва, ул. Доброслободская, 6, строение 2"
                                }
                            },
                            "isOneSideRejectionSt95": "true"
                        },
                        "warrantyInfo": {
                            "warrantyServiceRequirement": "в соответствии с действующим законодательством",
                            "manufacturersWarrantyRequirement": "не менее 24 месяцев и исчисляется с момента подписания Заказчиком документа о приемке",
                            "warrantyTerm": "не менее 24 месяцев и исчисляется с момента подписания Заказчиком документа о приемке"
                        }
                    }
                },
                "purchaseObjectsInfo": {
                    "notDrugPurchaseObjectsInfo": {
                        "purchaseObject": [
                            {
                                "sid": "136527514",
                                "externalSid": "23912483850",
                                "OKPD2": {
                                    "OKPDCode": "26.40.33.110",
                                    "OKPDName": "Видеокамеры",
                                    "characteristics": {
                                        "characteristicsUsingTextForm": [
                                            {
                                                "sid": "69770824",
                                                "externalSid": "23913746932",
                                                "name": "HD-формат 5,7K;8K;Full HD 1080p;UHD 4K",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "6",
                                                    "name": "Значение характеристики не может изменяться участником закупки"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034516",
                                                        "qualityDescription": "наличие"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770825",
                                                "externalSid": "23913746933",
                                                "name": "Разрешение видео, пикселей",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "2",
                                                    "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034517",
                                                        "qualityDescription": "не менее 1920 х\nне менее 1080"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770826",
                                                "externalSid": "23913746934",
                                                "name": "Матрица CMOS",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "6",
                                                    "name": "Значение характеристики не может изменяться участником закупки"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034518",
                                                        "qualityDescription": "наличие"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770827",
                                                "externalSid": "23913746936",
                                                "name": "Максимальная частота кадров",
                                                "type": "2",
                                                "characteristicsFillingInstruction": {
                                                    "code": "2",
                                                    "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034519",
                                                        "OKEI": {
                                                            "code": "290",
                                                            "nationalCode": "ГЦ",
                                                            "name": "Герц"
                                                        },
                                                        "rangeSet": {
                                                            "valueRange": {
                                                                "minMathNotation": "greaterOrEqual",
                                                                "min": "30"
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770828",
                                                "externalSid": "23913746937",
                                                "name": "Крепление на монитор",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "6",
                                                    "name": "Значение характеристики не может изменяться участником закупки"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034520",
                                                        "qualityDescription": "наличие"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770834",
                                                "externalSid": "23913746942",
                                                "name": "Угол поворота",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "2",
                                                    "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034526",
                                                        "qualityDescription": "не менее 360 градусов"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770830",
                                                "externalSid": "23913746939",
                                                "name": "Совместимость с ОС Windows, Linux",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "6",
                                                    "name": "Значение характеристики не может изменяться участником закупки"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034522",
                                                        "qualityDescription": "наличие"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770831",
                                                "externalSid": "23913746940",
                                                "name": "Угол обзора объектива",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "2",
                                                    "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034523",
                                                        "qualityDescription": "не менее 75 градусов"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770832",
                                                "externalSid": "23913746941",
                                                "name": "Угол наклона",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "2",
                                                    "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034524",
                                                        "qualityDescription": "не менее 40 градусов"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770833",
                                                "externalSid": "23913746935",
                                                "name": "Встроенный микрофон",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "6",
                                                    "name": "Значение характеристики не может изменяться участником закупки"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034525",
                                                        "qualityDescription": "наличие"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770829",
                                                "externalSid": "23913746938",
                                                "name": "Тип подключения USB",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "6",
                                                    "name": "Значение характеристики не может изменяться участником закупки"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034521",
                                                        "qualityDescription": "наличие"
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                "name": "Видеокамеры",
                                "OKEI": {
                                    "code": "796",
                                    "nationalCode": "ШТ",
                                    "name": "Штука"
                                },
                                "customerQuantities": {
                                    "customerQuantity": {
                                        "customer": {
                                            "regNum": "01015000006",
                                            "consRegistryNum": "802J0959",
                                            "fullName": "АППАРАТ ПО ОБЕСПЕЧЕНИЮ ДЕЯТЕЛЬНОСТИ ОРГАНОВ ГОСУДАРСТВЕННОЙ ВЛАСТИ РЕСПУБЛИКИ БАШКОРТОСТАН В Г. МОСКВЕ"
                                        },
                                        "quantity": "3"
                                    }
                                },
                                "price": "1573.33",
                                "quantity": {
                                    "value": "3"
                                },
                                "sum": "4719.99",
                                "type": "PRODUCT",
                                "hierarchyType": "ND"
                            },
                            {
                                "sid": "136527515",
                                "externalSid": "23914306001",
                                "OKPD2": {
                                    "OKPDCode": "26.20.16.170",
                                    "OKPDName": "Манипуляторы",
                                    "characteristics": {
                                        "characteristicsUsingTextForm": [
                                            {
                                                "sid": "69770835",
                                                "externalSid": "23913746943",
                                                "name": "Тип устройства беспроводное",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "6",
                                                    "name": "Значение характеристики не может изменяться участником закупки"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034527",
                                                        "qualityDescription": "наличие"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770836",
                                                "externalSid": "23913746944",
                                                "name": "Интерфейс подключения USB (радиоканал)",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "6",
                                                    "name": "Значение характеристики не может изменяться участником закупки"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034528",
                                                        "qualityDescription": "наличие"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770837",
                                                "externalSid": "23913746945",
                                                "name": "Тип клавиатуры мембранная",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "6",
                                                    "name": "Значение характеристики не может изменяться участником закупки"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034529",
                                                        "qualityDescription": "наличие"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770841",
                                                "externalSid": "23913746949",
                                                "name": "Разрешение оптического сенсора мыши",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "2",
                                                    "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034533",
                                                        "qualityDescription": "не менее 1600 dpi"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770839",
                                                "externalSid": "23913746948",
                                                "name": "Цифровой блок (Num pad)",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "6",
                                                    "name": "Значение характеристики не может изменяться участником закупки"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034531",
                                                        "qualityDescription": "наличие"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770840",
                                                "externalSid": "23913746946",
                                                "name": "Конструкция клавиатуры классическая",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "6",
                                                    "name": "Значение характеристики не может изменяться участником закупки"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034532",
                                                        "qualityDescription": "наличие"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770838",
                                                "externalSid": "23913746947",
                                                "name": "Количество клавиш клавиатуры",
                                                "type": "2",
                                                "characteristicsFillingInstruction": {
                                                    "code": "2",
                                                    "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034530",
                                                        "OKEI": {
                                                            "code": "796",
                                                            "nationalCode": "ШТ",
                                                            "name": "Штука"
                                                        },
                                                        "rangeSet": {
                                                            "valueRange": {
                                                                "minMathNotation": "greaterOrEqual",
                                                                "min": "104"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                "name": "Манипуляторы",
                                "OKEI": {
                                    "code": "796",
                                    "nationalCode": "ШТ",
                                    "name": "Штука"
                                },
                                "customerQuantities": {
                                    "customerQuantity": {
                                        "customer": {
                                            "regNum": "01015000006",
                                            "consRegistryNum": "802J0959",
                                            "fullName": "АППАРАТ ПО ОБЕСПЕЧЕНИЮ ДЕЯТЕЛЬНОСТИ ОРГАНОВ ГОСУДАРСТВЕННОЙ ВЛАСТИ РЕСПУБЛИКИ БАШКОРТОСТАН В Г. МОСКВЕ"
                                        },
                                        "quantity": "5"
                                    }
                                },
                                "price": "2979.33",
                                "quantity": {
                                    "value": "5"
                                },
                                "sum": "14896.65",
                                "type": "PRODUCT",
                                "hierarchyType": "ND"
                            },
                            {
                                "sid": "136527516",
                                "externalSid": "23914306002",
                                "OKPD2": {
                                    "OKPDCode": "26.20.40.110",
                                    "OKPDName": "Устройства и блоки питания вычислительных машин",
                                    "characteristics": {
                                        "characteristicsUsingTextForm": [
                                            {
                                                "sid": "69770842",
                                                "externalSid": "23914334301",
                                                "name": "Мощность",
                                                "type": "2",
                                                "characteristicsFillingInstruction": {
                                                    "code": "2",
                                                    "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034534",
                                                        "OKEI": {
                                                            "code": "212",
                                                            "nationalCode": "ВТ",
                                                            "name": "Ватт"
                                                        },
                                                        "rangeSet": {
                                                            "valueRange": {
                                                                "minMathNotation": "greaterOrEqual",
                                                                "min": "400"
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770845",
                                                "externalSid": "23914334302",
                                                "name": "Тип разъема для материнской платы 20+4 pin",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "6",
                                                    "name": "Значение характеристики не может изменяться участником закупки"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034537",
                                                        "qualityDescription": "наличие"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770844",
                                                "externalSid": "23913746950",
                                                "name": "Форм-фактор ATX",
                                                "type": "1",
                                                "characteristicsFillingInstruction": {
                                                    "code": "6",
                                                    "name": "Значение характеристики не может изменяться участником закупки"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034536",
                                                        "qualityDescription": "наличие"
                                                    }
                                                }
                                            },
                                            {
                                                "sid": "69770843",
                                                "externalSid": "23914334303",
                                                "name": "Количество разъемов 15-pin SATA",
                                                "type": "2",
                                                "characteristicsFillingInstruction": {
                                                    "code": "2",
                                                    "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                                },
                                                "values": {
                                                    "value": {
                                                        "sid": "84034535",
                                                        "OKEI": {
                                                            "code": "796",
                                                            "nationalCode": "ШТ",
                                                            "name": "Штука"
                                                        },
                                                        "rangeSet": {
                                                            "valueRange": {
                                                                "minMathNotation": "greaterOrEqual",
                                                                "min": "2"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                "name": "Устройства и блоки питания вычислительных машин",
                                "OKEI": {
                                    "code": "796",
                                    "nationalCode": "ШТ",
                                    "name": "Штука"
                                },
                                "customerQuantities": {
                                    "customerQuantity": {
                                        "customer": {
                                            "regNum": "01015000006",
                                            "consRegistryNum": "802J0959",
                                            "fullName": "АППАРАТ ПО ОБЕСПЕЧЕНИЮ ДЕЯТЕЛЬНОСТИ ОРГАНОВ ГОСУДАРСТВЕННОЙ ВЛАСТИ РЕСПУБЛИКИ БАШКОРТОСТАН В Г. МОСКВЕ"
                                        },
                                        "quantity": "5"
                                    }
                                },
                                "price": "1993.67",
                                "quantity": {
                                    "value": "5"
                                },
                                "sum": "9968.35",
                                "type": "PRODUCT",
                                "hierarchyType": "ND"
                            }
                        ],
                        "totalSum": "29584.99",
                        "quantityUndefined": "false"
                    }
                },
                "preferensesInfo": {
                    "preferenseInfo": [
                        {
                            "preferenseRequirementInfo": {
                                "shortName": "PVS33044",
                                "name": "Преимущество в соответствии с ч. 3 ст. 30 Закона № 44-ФЗ"
                            }
                        },
                        {
                            "preferenseRequirementInfo": {
                                "shortName": "RBK126",
                                "name": "Участникам, заявки или окончательные предложения которых содержат предложения о поставке товаров в соответствии с приказом Минфина России от 04.06.2018 № 126н"
                            },
                            "prefValue": "15.0"
                        }
                    ]
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
                                "shortName": "TOVNPIVR",
                                "name": "Требование об отсутствии в реестре недобросовестных поставщиков (подрядчиков, исполнителей) информации, включенной в такой реестр в связи отказом поставщика (подрядчика, исполнителя) от исполнения контракта по причине введения в отношении заказчика санкций и (или) мер ограничительного характера"
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
                            "restrictionSt14": [
                                {
                                    "requirementsType": {
                                        "requirementType": {
                                            "type": "RA"
                                        }
                                    },
                                    "NPAInfo": {
                                        "code": "15",
                                        "name": "Постановление Правительства РФ N 878 от 10.07.2019 \"О мерах стимулирования производства радиоэлектронной продукции на территории Российской Федерации при осуществлении закупок товаров, работ, услуг для обеспечения государственных и муниципальных нужд, о внесении изменений в постановление Правительства Российской Федерации от 16 сентября 2016 г. N 925 и признании утратившими силу некоторых актов Правительства Российской Федерации\"",
                                        "shortName": "Постановление Правительства РФ N 878 от 10.07.2019"
                                    }
                                },
                                {
                                    "requirementsType": {
                                        "requirementType": {
                                            "type": "AC"
                                        }
                                    },
                                    "NPAInfo": {
                                        "code": "1",
                                        "name": "Участникам, заявки или окончательные предложения которых содержат предложения о поставке товаров в соответствии с приказом Минфина России № 126н от 04.06.2018",
                                        "shortName": "Приказ Минфина от 04.06.2018 № 126н"
                                    }
                                }
                            ]
                        }
                    }
                },
                "flags": {
                    "purchaseObjectsCh9St37": "false"
                }
            }
        }
    ]
}


export const TenderCard = () => {

    const [tender, setTender] = useState(tender_info)
    const { id } = useParams();
    const [isSecondContainerVisible, setSecondContainerVisible] = useState(false);
    const [isThirdContainerVisible, setThirdContainerVisible] = useState(false);

    const formatDate = (originalDate) => {
        const parsedDate = parseISO(originalDate);
        return format(parsedDate, 'dd.MM.yyyy');
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://51.250.27.179:4100/client/tender?id=${id}`);
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
                    {/*<BorderedComtainer>*/}
                    {/*    <TextBlack14pxBold>Контактная информация</TextBlack14pxBold>*/}
                    {/*    <FlexTextColumn>*/}
                    {/*        <TextGray14pxRegular>Организация</TextGray14pxRegular>*/}
                    {/*        <TextBlack14pxRegular>АДМИНИСТРАЦИЯ ГОРОДА СУРГУТА</TextBlack14pxRegular>*/}
                    {/*    </FlexTextColumn>*/}
                    {/*    <FlexTextColumn>*/}
                    {/*        <TextGray14pxRegular>Фактический адрес</TextGray14pxRegular>*/}
                    {/*        <TextBlack14pxRegular>Российская Федерация, 65668, Ханты - Мансийский Автономный округ - Югра АО, Сургут г, УЛ</TextBlack14pxRegular>*/}
                    {/*    </FlexTextColumn>*/}
                    {/*    <FlexTextColumn>*/}
                    {/*        <TextGray14pxRegular>Почтовый адрес</TextGray14pxRegular>*/}
                    {/*        <TextBlack14pxRegular>Российская Федерация, 567876, Ханты - Мансийский Автономный округ - Югра АО, Сургут г, УЛ ЭНГЕЛЬСА, 8</TextBlack14pxRegular>*/}
                    {/*    </FlexTextColumn>*/}
                    {/*    <FlexTextColumn>*/}
                    {/*        <TextGray14pxRegular>Контакты</TextGray14pxRegular>*/}
                    {/*        <TextBlack14pxRegular>Штриккер Р. В.</TextBlack14pxRegular>*/}
                    {/*    </FlexTextColumn>*/}
                    {/*    <FlexTextColumn>*/}
                    {/*        <TextGray14pxRegular>Телефон</TextGray14pxRegular>*/}
                    {/*        <TextBlack14pxRegular>+ 7 (646) 646-65-78</TextBlack14pxRegular>*/}
                    {/*    </FlexTextColumn>*/}
                    {/*    <FlexTextColumn>*/}
                    {/*        <TextGray14pxRegular>Факс</TextGray14pxRegular>*/}
                    {/*        <TextBlack14pxRegular>34567</TextBlack14pxRegular>*/}
                    {/*    </FlexTextColumn>*/}
                    {/*    <FlexTextColumn>*/}
                    {/*        <TextGray14pxRegular>Электронная почта</TextGray14pxRegular>*/}
                    {/*        <TextBlack14pxRegular>cscdsvd@gmail.com</TextBlack14pxRegular>*/}
                    {/*    </FlexTextColumn>*/}
                    {/*</BorderedComtainer>*/}
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
                    <BorderedComtainer>
                        <TextBlack14pxBold>Обеспечение исполнения контракта</TextBlack14pxBold>
                        {/*<FlexTextColumn>*/}
                        {/*    <TextGray14pxRegular style={{width: '35%'}}>Требуется обеспечение исполнения контракта</TextGray14pxRegular>*/}
                        {/*    <TextBlack14pxRegular></TextBlack14pxRegular>*/}
                        {/*</FlexTextColumn>*/}
                        <FlexTextColumn>
                            <TextGray14pxRegular style={{width: '35%'}}>Размер обеспечения исполнения контракта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractGuarantee?.amount} P</TextBlack14pxRegular>
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
                            <Arrow onClick={handleClickThird}/>
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
                            <TextBlack14pxBold style={{marginRight: '20px'}}>Разъяснения</TextBlack14pxBold>
                            <Arrow onClick={handleClick}/>
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
                    {/*<BorderedComtainer>*/}
                    {/*    <TextBlack14pxBold>Информация о сроках исполнения контракта и источниках финансирования</TextBlack14pxBold>*/}
                    {/*    /!*<FlexTextColumn>*!/*/}
                    {/*    /!*    <TextGray14pxRegular style={{width: '35%'}}>Требуется обеспечение исполнения контракта</TextGray14pxRegular>*!/*/}
                    {/*    /!*    <TextBlack14pxRegular></TextBlack14pxRegular>*!/*/}
                    {/*    /!*</FlexTextColumn>*!/*/}
                    {/*    <FlexTextColumn>*/}
                    {/*        <TextGray14pxRegular style={{width: '35%'}}>Дата начала исполнения контрактаы</TextGray14pxRegular>*/}
                    {/*        <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.contractConditionsInfo?.maxPriceInfo?.maxPrice}</TextBlack14pxRegular>*/}
                    {/*    </FlexTextColumn>*/}
                    {/*    <FlexTextColumn>*/}
                    {/*        <TextGray14pxRegular style={{width: '35%'}}>Валюта</TextGray14pxRegular>*/}
                    {/*        <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.contractConditionsInfo?.maxPriceInfo?.currency?.name}</TextBlack14pxRegular>*/}
                    {/*    </FlexTextColumn>*/}
                    {/*    <FlexTextColumn>*/}
                    {/*        <TextGray14pxRegular style={{width: '35%'}}>Идентификационный номер закупки</TextGray14pxRegular>*/}
                    {/*        <TextBlack14pxRegular>{tender.tender[0].notificationInfo?.customerRequirementsInfo?.customerRequirementInfo?.contractConditionsInfo?.IKZInfo?.purchaseCode}</TextBlack14pxRegular>*/}
                    {/*    </FlexTextColumn>*/}
                    {/*</BorderedComtainer>*/}
                </RightSideSection65>
            </PageContainer>
        </Fragment>
    );
}
