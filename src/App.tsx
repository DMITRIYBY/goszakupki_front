import React, {Fragment} from 'react';
import {TenderCard} from "./pages/TenderCard/TenderCard";
import {Header} from "./components/Header/Header";
import {Menu} from "./components/Menu/Menu";
import JsonRenderer from "./pages/JsonRenderer";
import {Catalog} from "./pages/Catalog/Catalog";
import {FlexTextColumn} from "./containers/containers";
import {Route, Router, Routes} from "react-router-dom";
import {ContractsPage} from "./pages/ContractsPage/ContractsPage";

const test_data = [
    {
        "contract": []
    },
    {
        "contractAvailableForElAct": []
    },
    {
        "epClarificationDoc": []
    },
    {
        "epProtocolEF2020Final": [
            {
                "_id": "65550b453c1397c666b0550b",
                "id": "43064383",
                "versionNumber": "1",
                "foundationDocInfo": {
                    "foundationDocNumber": "ЦПА1",
                    "foundationDocNumberExternal": "0348100062023000256-1"
                },
                "commonInfo": {
                    "purchaseNumber": "0348100062023000256",
                    "docNumber": "ИЭА1",
                    "publishDTInEIS": "2023-11-10T14:50:33+05:00",
                    "href": "https://lk.zakupki.gov.ru/44fz/priz/notice/ea20/view/documents.html?orderId=30810631",
                    "docNumberExternal": "0348100062023000256-2",
                    "publishDTInETP": "2023-11-10T12:46:22+05:00",
                    "procedureDT": "2023-11-10T12:46:22+05:00",
                    "signDT": "2023-11-10+03:00",
                    "hrefExternal": "https://www.sberbank-ast.ru/ViewDocument.aspx?id=1013329134"
                },
                "protocolPublisherInfo": {
                    "publisherOrg": {
                        "regNum": "03481000620",
                        "consRegistryNum": "55280616",
                        "fullName": "УПРАВЛЕНИЕ ПО РАЗМЕЩЕНИЮ ЗАКАЗА АДМИНИСТРАЦИИ ГОРОДА БАЙКОНУР",
                        "shortName": "УРЗ",
                        "postAddress": "468320, Байконур г, пр. академика Королева, д. 33",
                        "factAddress": "Российская Федерация, Байконур г, ПР-КТ АКАДЕМИКА КОРОЛЕВА, Д. 33",
                        "INN": "9901033738",
                        "KPP": "990101001"
                    },
                    "publisherRole": "RA"
                },
                "extPrintFormInfo": {
                    "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=3ED3D5D91028412B93D478D6F2D8112E",
                    "fileType": "doc",
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
                            },
                            {
                                "memberNumber": "4"
                            },
                            {
                                "memberNumber": "5"
                            }
                        ]
                    }
                },
                "attachmentsInfo": {
                    "attachmentInfo": [
                        {
                            "publishedContentId": "FAC6E7754A1C48028905370C84B40D97",
                            "fileName": "Электронный документ, полученный из внешней системы.xml",
                            "fileSize": "47644",
                            "docDescription": "Электронный документ, полученный из внешней системы",
                            "docDate": "2023-11-10T12:50:29+03:00",
                            "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=FAC6E7754A1C48028905370C84B40D97",
                            "cryptoSigns": {}
                        },
                        {
                            "publishedContentId": "09C71A1E31D7665EE06334548D0AF19B",
                            "fileName": "Протокол.docx",
                            "fileSize": "38899",
                            "docDescription": "Протокол.docx",
                            "docDate": "2023-11-10T12:50:29+03:00",
                            "url": "https://zakupki.gov.ru/44fz/filestore/public/1.0/download/priz/file.html?uid=09C71A1E31D7665EE06334548D0AF19B",
                            "cryptoSigns": {}
                        }
                    ]
                },
                "protocolInfo": {
                    "commissionInfo": {
                        "commissionName": "Комиссия №1",
                        "commissionMembers": {
                            "commissionMember": [
                                {
                                    "memberNumber": "1",
                                    "nameInfo": {
                                        "lastName": "Тлучкевич",
                                        "firstName": "Анна",
                                        "middleName": "Петровна"
                                    },
                                    "role": {
                                        "code": "1",
                                        "name": "Председатель комиссии",
                                        "rightVote": "true"
                                    }
                                },
                                {
                                    "memberNumber": "2",
                                    "nameInfo": {
                                        "lastName": "Тереховская",
                                        "firstName": "Валерия",
                                        "middleName": "Фирдинантовна"
                                    },
                                    "role": {
                                        "code": "2",
                                        "name": "Зам. председателя комиссии",
                                        "rightVote": "true"
                                    }
                                },
                                {
                                    "memberNumber": "3",
                                    "nameInfo": {
                                        "lastName": "Иванова",
                                        "firstName": "Елена",
                                        "middleName": "Леонтьевна"
                                    },
                                    "role": {
                                        "code": "4",
                                        "name": "Член комиссии",
                                        "rightVote": "true"
                                    }
                                },
                                {
                                    "memberNumber": "4",
                                    "nameInfo": {
                                        "lastName": "Тен",
                                        "firstName": "Вячеслав",
                                        "middleName": "Ильич"
                                    },
                                    "role": {
                                        "code": "4",
                                        "name": "Член комиссии",
                                        "rightVote": "true"
                                    }
                                },
                                {
                                    "memberNumber": "5",
                                    "nameInfo": {
                                        "lastName": "Бубочкина",
                                        "firstName": "Ольга",
                                        "middleName": "Михайловна"
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
                        "applicationInfo": [
                            {
                                "commonInfo": {
                                    "appNumber": "219",
                                    "appDT": "2023-11-07T07:33:17+05:00",
                                    "admissionResultsInfo": {
                                        "admissionResultInfo": [
                                            {
                                                "commissionMemberInfo": {
                                                    "memberNumber": "1",
                                                    "nameInfo": {
                                                        "lastName": "Тлучкевич",
                                                        "firstName": "Анна",
                                                        "middleName": "Петровна"
                                                    },
                                                    "role": {
                                                        "code": "1",
                                                        "name": "Председатель комиссии",
                                                        "rightVote": "true"
                                                    }
                                                },
                                                "admitted": "false"
                                            },
                                            {
                                                "commissionMemberInfo": {
                                                    "memberNumber": "2",
                                                    "nameInfo": {
                                                        "lastName": "Тереховская",
                                                        "firstName": "Валерия",
                                                        "middleName": "Фирдинантовна"
                                                    },
                                                    "role": {
                                                        "code": "2",
                                                        "name": "Зам. председателя комиссии",
                                                        "rightVote": "true"
                                                    }
                                                },
                                                "admitted": "false"
                                            },
                                            {
                                                "commissionMemberInfo": {
                                                    "memberNumber": "3",
                                                    "nameInfo": {
                                                        "lastName": "Иванова",
                                                        "firstName": "Елена",
                                                        "middleName": "Леонтьевна"
                                                    },
                                                    "role": {
                                                        "code": "4",
                                                        "name": "Член комиссии",
                                                        "rightVote": "true"
                                                    }
                                                },
                                                "admitted": "false"
                                            },
                                            {
                                                "commissionMemberInfo": {
                                                    "memberNumber": "4",
                                                    "nameInfo": {
                                                        "lastName": "Тен",
                                                        "firstName": "Вячеслав",
                                                        "middleName": "Ильич"
                                                    },
                                                    "role": {
                                                        "code": "4",
                                                        "name": "Член комиссии",
                                                        "rightVote": "true"
                                                    }
                                                },
                                                "admitted": "false"
                                            },
                                            {
                                                "commissionMemberInfo": {
                                                    "memberNumber": "5",
                                                    "nameInfo": {
                                                        "lastName": "Бубочкина",
                                                        "firstName": "Ольга",
                                                        "middleName": "Михайловна"
                                                    },
                                                    "role": {
                                                        "code": "8",
                                                        "name": "Секретарь комиссии",
                                                        "rightVote": "true"
                                                    }
                                                },
                                                "admitted": "false"
                                            }
                                        ]
                                    }
                                },
                                "finalPrice": "97791.65",
                                "lastPriceOffer": {
                                    "price": "97791.65",
                                    "date": "2023-11-08T14:12:26+05:00",
                                    "increaseInitialPrice": "false"
                                },
                                "admittedInfo": {
                                    "appNotAdmittedInfo": {
                                        "appRejectedReasonsInfo": {
                                            "appRejectedReasonInfo": {
                                                "rejectReason": {
                                                    "code": "NIDN125143",
                                                    "name": "Несоответствие информации и документов, предусмотренных извещением об осуществлении закупки (за исключением информации и документов, предусмотренных п. 2 и 3 ч. 6 ст. 43 Закона №44 ФЗ) требованиям, установленным в извещении об осуществлении закупки"
                                                },
                                                "explanation": "Заявка участника подлежит отклонению на основании п. 1 ч. 12 ст. 48 закона № 44-ФЗ: - представленные конкретные показатели поставляемых аккумуляторов для автотранспортных средств не соответствуют значениям, установленным в извещении о проведении электронного аукциона, в приложении № 1 «Техническое задание» (Приложение № 1 к Техническому заданию «Спецификация»), а именно в заявке участника в таблице «Характеристики товара, работы, услуги» содержащей конкретные показатели предлагаемых к поставке аккумуляторов для автотранспортных средств:\n- в п. 1 «Аккумулятор свинцовый для запуска поршневых двигателей» не соответствует показатель «Пусковой ток аккумулятора» (необходимо «>700 и ?800 (ампер)», предлагают «700 (ампер)»);\n- в п. 2 «Аккумулятор свинцовый для запуска поршневых двигателей» не соответствует показатель «Пусковой ток аккумулятора» (необходимо «>500 и ?600 (ампер)», предлагают «500 (ампер)»);\n- в п. 3 «Аккумулятор свинцовый для запуска поршневых двигателей» не соответствует показатель «Пусковой ток аккумулятора» (необходимо «>700 и ?800 (ампер)», предлагают «700 (ампер)»);\n- в п. 4 «Аккумулятор свинцовый для запуска поршневых двигателей» не соответствует показатель «Пусковой ток аккумулятора» (необходимо «>900 и ?1200 (ампер)», предлагают «900 (ампер)»);\n- в п. 5 «Аккумулятор свинцовый для запуска поршневых двигателей» не соответствует показатель «Пусковой ток аккумулятора» (необходимо «>700 и ?800 (ампер)», предлагают «700 (ампер)»)."
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "commonInfo": {
                                    "appNumber": "171",
                                    "appDT": "2023-11-07T07:24:15+05:00",
                                    "admissionResultsInfo": {
                                        "admissionResultInfo": [
                                            {
                                                "commissionMemberInfo": {
                                                    "memberNumber": "1",
                                                    "nameInfo": {
                                                        "lastName": "Тлучкевич",
                                                        "firstName": "Анна",
                                                        "middleName": "Петровна"
                                                    },
                                                    "role": {
                                                        "code": "1",
                                                        "name": "Председатель комиссии",
                                                        "rightVote": "true"
                                                    }
                                                },
                                                "admitted": "false"
                                            },
                                            {
                                                "commissionMemberInfo": {
                                                    "memberNumber": "2",
                                                    "nameInfo": {
                                                        "lastName": "Тереховская",
                                                        "firstName": "Валерия",
                                                        "middleName": "Фирдинантовна"
                                                    },
                                                    "role": {
                                                        "code": "2",
                                                        "name": "Зам. председателя комиссии",
                                                        "rightVote": "true"
                                                    }
                                                },
                                                "admitted": "false"
                                            },
                                            {
                                                "commissionMemberInfo": {
                                                    "memberNumber": "3",
                                                    "nameInfo": {
                                                        "lastName": "Иванова",
                                                        "firstName": "Елена",
                                                        "middleName": "Леонтьевна"
                                                    },
                                                    "role": {
                                                        "code": "4",
                                                        "name": "Член комиссии",
                                                        "rightVote": "true"
                                                    }
                                                },
                                                "admitted": "false"
                                            },
                                            {
                                                "commissionMemberInfo": {
                                                    "memberNumber": "4",
                                                    "nameInfo": {
                                                        "lastName": "Тен",
                                                        "firstName": "Вячеслав",
                                                        "middleName": "Ильич"
                                                    },
                                                    "role": {
                                                        "code": "4",
                                                        "name": "Член комиссии",
                                                        "rightVote": "true"
                                                    }
                                                },
                                                "admitted": "false"
                                            },
                                            {
                                                "commissionMemberInfo": {
                                                    "memberNumber": "5",
                                                    "nameInfo": {
                                                        "lastName": "Бубочкина",
                                                        "firstName": "Ольга",
                                                        "middleName": "Михайловна"
                                                    },
                                                    "role": {
                                                        "code": "8",
                                                        "name": "Секретарь комиссии",
                                                        "rightVote": "true"
                                                    }
                                                },
                                                "admitted": "false"
                                            }
                                        ]
                                    }
                                },
                                "finalPrice": "98331.94",
                                "lastPriceOffer": {
                                    "price": "98331.94",
                                    "date": "2023-11-08T14:12:07+05:00",
                                    "increaseInitialPrice": "false"
                                },
                                "admittedInfo": {
                                    "appNotAdmittedInfo": {
                                        "appRejectedReasonsInfo": {
                                            "appRejectedReasonInfo": {
                                                "rejectReason": {
                                                    "code": "NIDN125143",
                                                    "name": "Несоответствие информации и документов, предусмотренных извещением об осуществлении закупки (за исключением информации и документов, предусмотренных п. 2 и 3 ч. 6 ст. 43 Закона №44 ФЗ) требованиям, установленным в извещении об осуществлении закупки"
                                                },
                                                "explanation": "Заявка участника подлежит отклонению на основании п. 1 ч. 12 ст. 48 закона № 44-ФЗ: - представленные конкретные показатели поставляемых аккумуляторов для автотранспортных средств не соответствуют значениям, установленным в извещении о проведении электронного аукциона в приложении № 1 «Техническое задание» (Приложение № 1 к Техническому заданию «Спецификация»), а именно в заявке участника в таблице «характеристики товара, работы, услуги» содержащей конкретные показатели предлагаемых к поставке аккумуляторов для автотранспортных средств:\n- в п. 3 «Аккумулятор свинцовый для запуска поршневых двигателей» не соответствует показатель «Пусковой ток аккумулятора» (необходимо «>700 и ?800 (ампер)», предлагают «700 (ампер)»); - в п. 5 «Аккумулятор свинцовый для запуска поршневых двигателей» не соответствует показатель «Пусковой ток аккумулятора» (необходимо «>700 и ?800 (ампер)», предлагают «700 (ампер)»)."
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "abandonedReason": {
                        "code": "EA20IEANV",
                        "name": "По результатам рассмотрения заявок на участие в закупке все поданные заявки отклонены (п. 4 ч. 1 ст. 52 Закона № 44-ФЗ)"
                    }
                }
            }
        ]
    }
]

function App() {
  return (
      <Fragment>
          <Header />
          <Menu />
      <Routes>
          {/*<TenderCard />*/}
            <Route path="/" element={<Catalog />} />
            <Route path="/contracts" element={<ContractsPage />} />
            <Route path="/tender/:id" element={<JsonRenderer />} />
            {/*<JsonRenderer data={test_data} />*/}
      </Routes>
      </Fragment>
  );
}

export default App;


