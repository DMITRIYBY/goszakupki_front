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

const tender_info = {
    "appAbsence": [],
    "clarification": [],
    "noticationCancel": [],
    "protocol": [],
    "protocolCancel": [],
    "protocolDeviation": [],
    "protocolEvDevCancel": [],
    "protocolEvasion": [],
    "result": [],
    "tender": [
        {
            "_id": "6561a40c63ca1e084f16eb0e",
            "id": "33990592",
            "externalId": "14281785",
            "versionNumber": "1",
            "commonInfo": {
                "purchaseNumber": "0148300014523000170",
                "docNumber": "№0148300014523000170",
                "plannedPublishDate": "2023-10-26+03:00",
                "publishDTInEIS": "2023-10-26T10:08:37.330+03:00",
                "href": "https://zakupki.gov.ru/epz/order/notice/ea20/view/common-info.html?regNumber=0148300014523000170",
                "notPublishedOnEIS": "true",
                "placingWay": {
                    "code": "EAP20",
                    "name": "Электронный аукцион"
                },
                "ETP": {
                    "code": "ETP_EETP",
                    "name": "АО «ЕЭТП»",
                    "url": "http://roseltorg.ru"
                },
                "contractConclusionOnSt83Ch2": "true",
                "purchaseObjectInfo": "Поставка автогидроподъемника"
            },
            "purchaseResponsibleInfo": {
                "responsibleOrgInfo": {
                    "regNum": "01483000145",
                    "consRegistryNum": "45383020",
                    "fullName": "АДМИНИСТРАЦИЯ ПОСЕЛЕНИЯ МОСКОВСКИЙ",
                    "shortName": "АДМИНИСТРАЦИЯ ПОСЕЛЕНИЯ МОСКОВСКИЙ",
                    "postAddress": "город Москва, поселение Московский, город Московский, микрорайон 1-й",
                    "factAddress": "город Москва, поселение Московский, город Московский, микрорайон 1-й",
                    "INN": "5003057325",
                    "KPP": "775101001"
                },
                "responsibleRole": "CU",
                "responsibleInfo": {
                    "orgPostAddress": "город Москва, поселение Московский, город Московский, микрорайон 1-й",
                    "orgFactAddress": "город Москва, поселение Московский, город Московский, микрорайон 1-й",
                    "contactPersonInfo": {
                        "lastName": "Тихонов",
                        "firstName": "А",
                        "middleName": "Б"
                    },
                    "contactEMail": "mz@adm-moskovsky.ru",
                    "contactPhone": "+7 (495) 841-81-47",
                    "contactFax": "4959419147"
                }
            },
            "printFormInfo": {
                "url": "https://zakupki.gov.ru/epz/order/notice/printForm/view.html?regNumber=0148300014523000170"
            },
            "attachmentsInfo": {
                "attachmentInfo": [
                    {
                        "publishedContentId": "0884317A699AFC34E06334548D0A21A5",
                        "fileName": "протокол (1).docx",
                        "fileSize": "13384",
                        "docDescription": "Протокол НМЦК(Д)",
                        "docDate": "2023-10-25T12:34:50+03:00",
                        "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=0884317A699AFC34E06334548D0A21A5",
                        "docKindInfo": {
                            "code": "MRJ",
                            "name": "Обоснование начальной (максимальной) цены контракта"
                        },
                        "cryptoSigns": {}
                    },
                    {
                        "publishedContentId": "08848BDEE7EE98BCE06334548D0A2A77",
                        "fileName": "ЦК по коммерческих оценка.xlsx",
                        "fileSize": "15291",
                        "docDescription": "Расчет НМЦК(Д)",
                        "docDate": "2023-10-25T12:34:50+03:00",
                        "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=08848BDEE7EE98BCE06334548D0A2A77",
                        "docKindInfo": {
                            "code": "MRJ",
                            "name": "Обоснование начальной (максимальной) цены контракта"
                        },
                        "cryptoSigns": {}
                    },
                    {
                        "publishedContentId": "08848BDEE7EC98BCE06334548D0A2A77",
                        "fileName": "Поставка автогидроподъемника.doc",
                        "fileSize": "144896",
                        "docDescription": "Проект контракта (договора)",
                        "docDate": "2023-10-25T12:34:50+03:00",
                        "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=08848BDEE7EC98BCE06334548D0A2A77",
                        "docKindInfo": {
                            "code": "CP",
                            "name": "Проект контракта"
                        },
                        "cryptoSigns": {}
                    },
                    {
                        "publishedContentId": "0887122C00DCBC60E06334548D0A73F6",
                        "fileName": "Техническое_задание_16025703-1.pdf",
                        "fileSize": "64935",
                        "docDescription": "Техническое задание",
                        "docDate": "2023-10-25T12:34:50+03:00",
                        "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=0887122C00DCBC60E06334548D0A73F6",
                        "docKindInfo": {
                            "code": "POD",
                            "name": "Описание объекта закупки"
                        },
                        "cryptoSigns": {}
                    },
                    {
                        "publishedContentId": "08848BDEE7EA98BCE06334548D0A2A77",
                        "fileName": "ElectronicAuction14281785.pdf",
                        "fileSize": "93507",
                        "docDescription": "ElectronicAuction14281785.pdf",
                        "docDate": "2023-10-25T12:34:50+03:00",
                        "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=08848BDEE7EA98BCE06334548D0A2A77",
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
                        "startDT": "2023-10-26T10:08:37+03:00",
                        "endDT": "2023-11-03T09:00:00+03:00"
                    },
                    "biddingDate": "2023-11-03+03:00",
                    "summarizingDate": "2023-11-08+03:00"
                },
                "contractConditionsInfo": {
                    "maxPriceInfo": {
                        "maxPrice": "8800000",
                        "currency": {
                            "code": "RUB",
                            "name": "Российский рубль"
                        }
                    }
                },
                "customerRequirementsInfo": {
                    "customerRequirementInfo": {
                        "customer": {
                            "regNum": "01483000145",
                            "consRegistryNum": "45383020",
                            "fullName": "АДМИНИСТРАЦИЯ ПОСЕЛЕНИЯ МОСКОВСКИЙ"
                        },
                        "applicationGuarantee": {
                            "amount": "88000.00",
                            "account": {
                                "bik": "004525988",
                                "settlementAccount": "03100643000000017300",
                                "personalAccount": "04733830200",
                                "creditOrgName": "ГУ БАНКА РОССИИ ПО ЦФО//УФК ПО Г. МОСКВЕ, г Москва"
                            },
                            "procedureInfo": "В соответствии с правилами и порядком, определенными оператором электронной торговой площадки",
                            "part": "1.0"
                        },
                        "contractGuarantee": {
                            "account": {
                                "bik": "004525988",
                                "settlementAccount": "03232643459520007300",
                                "personalAccount": "05733830200",
                                "creditOrgName": "ГУ Банка России по ЦФО//УФК по г.Москве"
                            },
                            "procedureInfo": "Контракт заключается после предоставления заказчику обеспечения исполнения контракта. Обеспечение исполнения контракта может быть представлено в виде безотзывной независимой гарантии или внесением денежных средств на указанный заказчиком счет, на котором в соответствии с законодательством Российской Федерации учитываются операции со средствами, поступающими заказчику, в размере обеспечения исполнения контракта, указанном в документации о закупках. Безотзывная независимая гарантия должна соответствовать требованиям, установленным Гражданским кодексом Российской Федерации, а также иным законодательством Российской Федерации.\nСпособ обеспечения исполнения контракта определяется участником закупки, с которым заключается контракт, самостоятельно.\nСрок внесения обеспечения - до момента заключения контракта».",
                            "part": "30.0"
                        },
                        "contractConditionsInfo": {
                            "maxPriceInfo": {
                                "maxPrice": "8800000"
                            },
                            "mustPublicDiscussion": "false",
                            "IKZInfo": {
                                "purchaseCode": "233500305732577510100100800010000244",
                                "publishYear": "2023",
                                "OKPD2Info": {
                                    "undefined": "0000"
                                },
                                "KVRInfo": {
                                    "KVR": {
                                        "code": "244",
                                        "name": "Прочая закупка товаров, работ и услуг"
                                    }
                                },
                                "customerCode": "35003057325775101001",
                                "purchaseNumber": "0080",
                                "purchaseOrderNumber": "001"
                            },
                            "tenderPlan2020Info": {
                                "plan2020Number": "202301483000145001",
                                "position2020Number": "202301483000145001000082"
                            },
                            "contractExecutionPaymentPlan": {
                                "contractExecutionTermsInfo": {
                                    "relativeTermsInfo": {
                                        "start": "1",
                                        "startDayType": "working",
                                        "term": "57",
                                        "termDayType": "working"
                                    }
                                },
                                "financingSourcesInfo": {
                                    "budgetFinancingsInfo": {
                                        "budgetInfo": {
                                            "code": "73030502",
                                            "name": "Бюджет поселения Московский"
                                        },
                                        "budgetLevel": "30",
                                        "OKTMOInfo": {
                                            "code": "45952000",
                                            "name": "Муниципальные образования города Москвы (столицы Российской Федерации города федерального значения) / Внутригородские муниципальные образования города Москвы (см. также 45 300 000) / поселение Московский"
                                        }
                                    },
                                    "currentYear": "2023",
                                    "financeInfo": {
                                        "total": "8800000",
                                        "currentYear": "8800000",
                                        "firstYear": "0",
                                        "secondYear": "0",
                                        "subsecYears": "0"
                                    }
                                },
                                "stagesInfo": {
                                    "stageInfo": {
                                        "sid": "6334892",
                                        "externalSid": "23832133",
                                        "termsInfo": {
                                            "relativeTermsInfo": {
                                                "start": "1",
                                                "startDayType": "working",
                                                "term": "57",
                                                "termDayType": "working"
                                            }
                                        },
                                        "budgetFinancingsInfo": {
                                            "budgetFinancingInfo": {
                                                "KBK": "90005037950202040244",
                                                "paymentYearInfo": {
                                                    "total": "8800000",
                                                    "currentYear": "8800000",
                                                    "firstYear": "0",
                                                    "secondYear": "0",
                                                    "subsecYears": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "BOInfo": {
                                "BONumber": "4538302023730001493",
                                "BODate": "2023-10-25T00:00:00+03:00",
                                "inputBOFlag": "auto"
                            },
                            "deliveryPlacesInfo": {
                                "deliveryPlaceInfo": {
                                    "deliveryPlace": "108811, г. Москва, г. Московский, микрорайон 1-й, д. 19а"
                                }
                            },
                            "isOneSideRejectionSt95": "true"
                        },
                        "warrantyInfo": {
                            "warrantyTerm": "Срок гарантии качества на товар должен быть не менее срока, установленного производителем (заводом-изготовителем товара), определенного в руководстве (инструкции) по эксплуатации товара или в соответствии с гарантийным талоном производителя (завода-изготовителя) или формуляром, или сервисной книжкой. В случае если производитель (завод-изготовитель) не установил срок гарантии качества товара, то Поставщик предоставляет свои гарантийные обязательства сроком не менее 1 (одного) года с момента подписания уполномоченными представителями Сторон электронного структурированного Документа о приемке."
                        },
                        "provisionWarranty": {
                            "amount": "88000",
                            "part": "1.0",
                            "procedureInfo": "в соответствии с контрактом",
                            "account": {
                                "bik": "004525988",
                                "settlementAccount": "03232643459520007300",
                                "personalAccount": "05733830200",
                                "creditOrgName": "ГУ Банка России по ЦФО//УФК по г.Москве"
                            }
                        }
                    }
                },
                "purchaseObjectsInfo": {
                    "notDrugPurchaseObjectsInfo": {
                        "purchaseObject": {
                            "sid": "136544128",
                            "externalSid": "173949847-1154803086",
                            "OKPD2": {
                                "OKPDCode": "29.10.59.270",
                                "OKPDName": "Средства транспортные, оснащенные подъемниками с рабочими платформами",
                                "characteristics": {
                                    "characteristicsUsingTextForm": [
                                        {
                                            "sid": "69817737",
                                            "externalSid": "1024753106-1320511080",
                                            "name": "Максимальная рабочая высота подъема",
                                            "type": "2",
                                            "characteristicsFillingInstruction": {
                                                "code": "2",
                                                "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091824",
                                                    "externalSid": "enum-298582500",
                                                    "OKEI": {
                                                        "code": "006",
                                                        "nationalCode": "М",
                                                        "name": "Метр"
                                                    },
                                                    "rangeSet": {
                                                        "valueRange": {
                                                            "minMathNotation": "greaterOrEqual",
                                                            "min": "20"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817759",
                                            "externalSid": "1024753111-1300565462",
                                            "name": "Количество пассажирских мест (не считая водителя)",
                                            "type": "2",
                                            "characteristicsFillingInstruction": {
                                                "code": "2",
                                                "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091848",
                                                    "externalSid": "ch-1024753111",
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
                                        },
                                        {
                                            "sid": "69817739",
                                            "externalSid": "1024754103-1310299957",
                                            "name": "Наличие системы изменяемого опорного контура",
                                            "type": "1",
                                            "characteristicsFillingInstruction": {
                                                "code": "6",
                                                "name": "Значение характеристики не может изменяться участником закупки"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091826",
                                                    "externalSid": "enum-298583115",
                                                    "qualityDescription": "Да"
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817740",
                                            "externalSid": "1024754073-1300563839",
                                            "name": "Экологический класс",
                                            "type": "1",
                                            "characteristicsFillingInstruction": {
                                                "code": "3",
                                                "name": "Участник закупки указывает в заявке только одно значение характеристики"
                                            },
                                            "values": {
                                                "value": [
                                                    {
                                                        "sid": "84091827",
                                                        "externalSid": "enum-298583104",
                                                        "qualityDescription": "5"
                                                    },
                                                    {
                                                        "sid": "84091828",
                                                        "externalSid": "enum-298583105",
                                                        "qualityDescription": "3"
                                                    },
                                                    {
                                                        "sid": "84091829",
                                                        "externalSid": "enum-298583106",
                                                        "qualityDescription": "4"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "sid": "69817741",
                                            "externalSid": "1024753108-1300566819",
                                            "name": "Грузоподъемность люльки",
                                            "type": "2",
                                            "characteristicsFillingInstruction": {
                                                "code": "2",
                                                "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091830",
                                                    "externalSid": "ch-1024753108",
                                                    "OKEI": {
                                                        "code": "166",
                                                        "nationalCode": "КГ",
                                                        "name": "Килограмм"
                                                    },
                                                    "rangeSet": {
                                                        "valueRange": {
                                                            "minMathNotation": "greaterOrEqual",
                                                            "min": "300"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817742",
                                            "externalSid": "1024754070-1300566883",
                                            "name": "Дополнительное оборудование",
                                            "type": "1",
                                            "characteristicsFillingInstruction": {
                                                "code": "6",
                                                "name": "Значение характеристики не может изменяться участником закупки"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091831",
                                                    "externalSid": "enum-298583103",
                                                    "qualityDescription": "Проблесковый маячок желтого (оранжевого) цвета на кабине водителя"
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817743",
                                            "externalSid": "1024754076-1310299956",
                                            "name": "Ширина люльки",
                                            "type": "2",
                                            "characteristicsFillingInstruction": {
                                                "code": "2",
                                                "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091832",
                                                    "externalSid": "ch-1024754076",
                                                    "OKEI": {
                                                        "code": "003",
                                                        "nationalCode": "ММ",
                                                        "name": "Миллиметр"
                                                    },
                                                    "rangeSet": {
                                                        "valueRange": {
                                                            "minMathNotation": "greaterOrEqual",
                                                            "min": "700",
                                                            "maxMathNotation": "lessOrEqual",
                                                            "max": "800"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817744",
                                            "externalSid": "1024753109-1302548202",
                                            "name": "Высота",
                                            "type": "2",
                                            "characteristicsFillingInstruction": {
                                                "code": "2",
                                                "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091833",
                                                    "externalSid": "ch-1024753109",
                                                    "OKEI": {
                                                        "code": "003",
                                                        "nationalCode": "ММ",
                                                        "name": "Миллиметр"
                                                    },
                                                    "rangeSet": {
                                                        "valueRange": {
                                                            "minMathNotation": "greaterOrEqual",
                                                            "min": "3700",
                                                            "maxMathNotation": "lessOrEqual",
                                                            "max": "4000"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817745",
                                            "externalSid": "1024754072-1300565597",
                                            "name": "Вылет стрелы",
                                            "type": "2",
                                            "characteristicsFillingInstruction": {
                                                "code": "2",
                                                "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091834",
                                                    "externalSid": "ch-1024754072",
                                                    "OKEI": {
                                                        "code": "006",
                                                        "nationalCode": "М",
                                                        "name": "Метр"
                                                    },
                                                    "rangeSet": {
                                                        "valueRange": {
                                                            "minMathNotation": "greaterOrEqual",
                                                            "min": "17"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817746",
                                            "externalSid": "1024754099-1300566811",
                                            "name": "Тип шасси подъемника",
                                            "type": "1",
                                            "characteristicsFillingInstruction": {
                                                "code": "6",
                                                "name": "Значение характеристики не может изменяться участником закупки"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091835",
                                                    "externalSid": "enum-298583114",
                                                    "qualityDescription": "Автомобильное"
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817747",
                                            "externalSid": "1024754095-1300531737",
                                            "name": "Тип двигателя",
                                            "type": "1",
                                            "characteristicsFillingInstruction": {
                                                "code": "6",
                                                "name": "Значение характеристики не может изменяться участником закупки"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091836",
                                                    "externalSid": "enum-298583112",
                                                    "qualityDescription": "Дизельный"
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817748",
                                            "externalSid": "1024753121-1310299954",
                                            "name": "Длина люльки",
                                            "type": "2",
                                            "characteristicsFillingInstruction": {
                                                "code": "2",
                                                "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091837",
                                                    "externalSid": "ch-1024753121",
                                                    "OKEI": {
                                                        "code": "003",
                                                        "nationalCode": "ММ",
                                                        "name": "Миллиметр"
                                                    },
                                                    "rangeSet": {
                                                        "valueRange": {
                                                            "minMathNotation": "greaterOrEqual",
                                                            "min": "1400",
                                                            "maxMathNotation": "lessOrEqual",
                                                            "max": "1500"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817749",
                                            "externalSid": "1024754087-1300567485",
                                            "name": "Размещение электропроводки и рукавов высокого давления",
                                            "type": "1",
                                            "characteristicsFillingInstruction": {
                                                "code": "6",
                                                "name": "Значение характеристики не может изменяться участником закупки"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091838",
                                                    "externalSid": "enum-298583111",
                                                    "qualityDescription": "Снаружи стрелы"
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817750",
                                            "externalSid": "1024753114-1320508580",
                                            "name": "Наличие отопителя",
                                            "type": "1",
                                            "characteristicsFillingInstruction": {
                                                "code": "6",
                                                "name": "Значение характеристики не может изменяться участником закупки"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091839",
                                                    "externalSid": "enum-298583102",
                                                    "qualityDescription": "Да"
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817751",
                                            "externalSid": "1024754063-1302548201",
                                            "name": "Ширина",
                                            "type": "2",
                                            "characteristicsFillingInstruction": {
                                                "code": "2",
                                                "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091840",
                                                    "externalSid": "ch-1024754063",
                                                    "OKEI": {
                                                        "code": "003",
                                                        "nationalCode": "ММ",
                                                        "name": "Миллиметр"
                                                    },
                                                    "rangeSet": {
                                                        "valueRange": {
                                                            "minMathNotation": "greaterOrEqual",
                                                            "min": "2500",
                                                            "maxMathNotation": "lessOrEqual",
                                                            "max": "2600"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817752",
                                            "externalSid": "1024754085-1300566813",
                                            "name": "Тип автоподъемника",
                                            "type": "1",
                                            "characteristicsFillingInstruction": {
                                                "code": "6",
                                                "name": "Значение характеристики не может изменяться участником закупки"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091841",
                                                    "externalSid": "enum-298583110",
                                                    "qualityDescription": "С телескопической стрелой"
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817753",
                                            "externalSid": "1024754075-1300565392",
                                            "name": "Колесная формула",
                                            "type": "1",
                                            "characteristicsFillingInstruction": {
                                                "code": "6",
                                                "name": "Значение характеристики не может изменяться участником закупки"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091842",
                                                    "externalSid": "enum-298583108",
                                                    "qualityDescription": "4х2"
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817754",
                                            "externalSid": "1024753110-1314120191",
                                            "name": "Объем топливного бака",
                                            "type": "2",
                                            "characteristicsFillingInstruction": {
                                                "code": "2",
                                                "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091843",
                                                    "externalSid": "ch-1024753110",
                                                    "OKEI": {
                                                        "code": "112",
                                                        "nationalCode": "л; дм[3*]",
                                                        "name": "Литр; кубический дециметр"
                                                    },
                                                    "rangeSet": {
                                                        "valueRange": {
                                                            "minMathNotation": "greaterOrEqual",
                                                            "min": "100"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817755",
                                            "externalSid": "1024753122-1302548203",
                                            "name": "Длина",
                                            "type": "2",
                                            "characteristicsFillingInstruction": {
                                                "code": "2",
                                                "name": "Участник закупки указывает в заявке конкретное значение характеристики"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091844",
                                                    "externalSid": "ch-1024753122",
                                                    "OKEI": {
                                                        "code": "003",
                                                        "nationalCode": "ММ",
                                                        "name": "Миллиметр"
                                                    },
                                                    "rangeSet": {
                                                        "valueRange": {
                                                            "minMathNotation": "greaterOrEqual",
                                                            "min": "7500",
                                                            "maxMathNotation": "lessOrEqual",
                                                            "max": "8000"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817756",
                                            "externalSid": "1024754074-1300566856",
                                            "name": "Транспортное положение люльки",
                                            "type": "1",
                                            "characteristicsFillingInstruction": {
                                                "code": "6",
                                                "name": "Значение характеристики не может изменяться участником закупки"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091845",
                                                    "externalSid": "enum-298583107",
                                                    "qualityDescription": "Над кабиной"
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817757",
                                            "externalSid": "1024754084-1300565589",
                                            "name": "Тип кабины",
                                            "type": "1",
                                            "characteristicsFillingInstruction": {
                                                "code": "6",
                                                "name": "Значение характеристики не может изменяться участником закупки"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091846",
                                                    "externalSid": "enum-298583109",
                                                    "qualityDescription": "Одинарная"
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817758",
                                            "externalSid": "1024754098-1319531780",
                                            "name": "Электроизоляция люльки",
                                            "type": "2",
                                            "characteristicsFillingInstruction": {
                                                "code": "6",
                                                "name": "Значение характеристики не может изменяться участником закупки"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091847",
                                                    "externalSid": "enum-298583113",
                                                    "OKEI": {
                                                        "code": "222",
                                                        "nationalCode": "В",
                                                        "name": "Вольт"
                                                    },
                                                    "valueSet": {
                                                        "concreteValue": "2000.0000"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "sid": "69817738",
                                            "externalSid": "1024753107-1320511081",
                                            "name": "Наличие электроизоляции подъемника",
                                            "type": "1",
                                            "characteristicsFillingInstruction": {
                                                "code": "6",
                                                "name": "Значение характеристики не может изменяться участником закупки"
                                            },
                                            "values": {
                                                "value": {
                                                    "sid": "84091825",
                                                    "externalSid": "enum-298583101",
                                                    "qualityDescription": "Электроизолированный"
                                                }
                                            }
                                        }
                                    ]
                                }
                            },
                            "name": "Автогидроподъемник",
                            "OKEI": {
                                "code": "796",
                                "nationalCode": "ШТ",
                                "name": "Штука"
                            },
                            "price": "8800000",
                            "quantity": {
                                "value": "1"
                            },
                            "sum": "8800000",
                            "type": "PRODUCT",
                            "hierarchyType": "ND"
                        },
                        "totalSum": "8800000",
                        "quantityUndefined": "false"
                    }
                },
                "preferensesInfo": {
                    "preferenseInfo": {
                        "preferenseRequirementInfo": {
                            "shortName": "PVS33044",
                            "name": "Преимущество в соответствии с ч. 3 ст. 30 Закона № 44-ФЗ"
                        },
                        "prefValue": "100.0"
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
}


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
                            <TextBlack14pxRegular>+ {tender.tender[0].purchaseResponsibleInfo?.responsibleInfo?.contactPhone}</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Электронная почта</TextGray14pxRegular>
                            <TextBlack14pxRegular>{tender.tender[0].purchaseResponsibleInfo?.responsibleInfo?.contactEMail}</TextBlack14pxRegular>
                        </FlexTextColumn>
                    </BorderedComtainer>
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
                                <TextBlack22pxBold>Итого: {tender.tender[0].notificationInfo?.purchaseObjectsInfo?.notDrugPurchaseObjectsInfo?.totalSum} ₽</TextBlack22pxBold>
                            </FlexTextRow>
                        </FlexTextColumn>
                    </BorderedComtainer>
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
                                    Object.values(tender.tender[0].notificationInfo?.purchaseObjectsInfo?.notDrugPurchaseObjectsInfo?.purchaseObject).map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                {item.KTRU ? (item?.KTRU?.OKPD2?.OKPDCode) : item?.OKPD2?.OKPDCode }
                                            </TableCell>
                                            <TableCell>
                                                <FlexTextColumn>
                                                    <TextBlack14pxRegular>{item?.name}</TextBlack14pxRegular>
                                                    {item.KTRU ? (Object.values(item.KTRU?.characteristics?.characteristicsUsingTextForm).map((item,index) => (
                                                        <TextGray14pxRegular>{item?.name} {item?.values?.value?.rangeSet?.min} {item?.values?.value?.OKEI?.nationalCode}</TextGray14pxRegular>
                                                    ))) :
                                                        Object.values(item.OKPD2?.characteristics?.characteristicsUsingTextForm).map((item,index) => (
                                                            <TextGray14pxRegular>{item?.name} {item?.values?.value?.rangeSet?.min} {item?.values?.value?.OKEI?.nationalCode}</TextGray14pxRegular>
                                                        ))
                                                    }
                                                </FlexTextColumn>
                                            </TableCell>
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
