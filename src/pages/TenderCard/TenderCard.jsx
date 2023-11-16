import {FC, Fragment, useState} from 'react'
import {
    BorderedComtainer, BorderFitContaienr,
    BorderOpeningContainer,
    LeftSideSection35,
    PageContainer,
    RightSideSection65
} from "./styles";
import {TextBlack14pxBold, TextBlack14pxRegular, TextBlack22pxBold, TextGray14pxRegular} from "../../constants/fonts";
import {FlexTextColumn, FlexTextRow} from "../../containers/containers";
import {ReactComponent as Arrow} from "../../assets/icons/arrow.svg";
import {Menu} from "../../components/Menu/Menu";

export const TenderCard : FC = () => {

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
                            <TextBlack14pxRegular>345678909865434567</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Наименование объекта закупки</TextGray14pxRegular>
                            <TextBlack14pxRegular>Оказание услуг по организации и приготовлению ежедневного горячего питания для больных</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Способ определения поставщика (подрядчика, исполнителя)</TextGray14pxRegular>
                            <TextBlack14pxRegular>Электронный аукцион</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Наименование электронной площадки в информационно - телекоммуникационной сети “Интернет”</TextGray14pxRegular>
                            <TextBlack14pxRegular>ЗАО “Сбербанк - АСТ”</TextBlack14pxRegular>
                        </FlexTextColumn>
                        <FlexTextColumn>
                            <TextGray14pxRegular>Заказчик</TextGray14pxRegular>
                            <TextBlack14pxRegular>ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ ПЕРМСКОГО КРАЯ “ГОРОДСКАЯ БОЛЬНИЦА ЛЫСЬВЕНСКОГО ГОРОДСКОГО ОКРУГА” </TextBlack14pxRegular>
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
                            <TextBlack14pxRegular>htt:dfghjjhgfdxcvbn</TextBlack14pxRegular>
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
                    <BorderOpeningContainer>
                        <FlexTextRow style={{alignItems: 'center'}}>
                            <TextBlack14pxBold style={{marginRight: '20px'}}>Разъяснения</TextBlack14pxBold>
                            <Arrow onClick={handleClick}/>
                        </FlexTextRow>
                        {isSecondContainerVisible && (
                            <BorderFitContaienr >
                                <FlexTextColumn>
                                    <TextGray14pxRegular>Контакты</TextGray14pxRegular>
                                    <TextBlack14pxRegular>Штриккер Р. В.</TextBlack14pxRegular>
                                </FlexTextColumn>
                            </BorderFitContaienr>
                        )}
                    </BorderOpeningContainer>
                </RightSideSection65>
            </PageContainer>
        </Fragment>
    );
}
